import { useState } from "react";
import DraftPad from "./DraftPad";

function generateSolutionSteps(sys) {
  const { method, eq1, eq2, x, y, multi } = sys;
  const steps = [];

  // Определяем текстовое представление ответа
  let answerText;
  if (typeof x === "string") {
    answerText = x;
  } else if (multi && Array.isArray(x) && Array.isArray(y)) {
    const pairs = x.map((xi, i) => `(${xi}; ${y[i]})`);
    answerText = pairs.join(" или ");
  } else {
    answerText = `(${x}; ${y})`;
  }

  // Добавляем префиксы к ответу для проверки
  if (answerText === "inf" || answerText === "∞") {
    steps.push(`✅ Ответ: бесконечно много решений`);
    steps.push(`ANSWER|inf`);
    return steps;
  }
  if (answerText === "none" || answerText === "нет") {
    steps.push(`✅ Ответ: нет решений`);
    steps.push(`ANSWER|none`);
    return steps;
  }

  // Шаг по методу
  if (method === "substitution") {
    steps.push(`1️⃣ Выразим переменную из первого уравнения:`);
    steps.push(`   <code>${eq1}</code>`);
    steps.push(`2️⃣ Подставим во второе уравнение:`);
    steps.push(`   <code>${eq2}</code>`);
    if (multi) {
      steps.push(`3️⃣ Решим уравнение. Система имеет несколько решений.`);
      steps.push(`   <strong>Ответ: ${answerText}</strong>`);
    } else {
      steps.push(`3️⃣ Решим полученное уравнение с одной переменной.`);
      steps.push(`4️⃣ Найдём вторую переменную подстановкой.`);
      steps.push(`   <strong>Ответ: ${answerText}</strong>`);
    }
  } else if (method === "addition") {
    steps.push(`1️⃣ Заметим противоположные коэффициенты (или сделаем их).`);
    steps.push(`2️⃣ Сложим уравнения почленно:`);
    steps.push(`   <code>(${eq1}) + (${eq2})</code>`);
    steps.push(`3️⃣ Одна переменная сократится. Решим.`);
    steps.push(`4️⃣ Найдём вторую подстановкой.`);
    steps.push(`   <strong>Ответ: ${answerText}</strong>`);
  } else if (method === "subtraction") {
    steps.push(`1️⃣ Коэффициенты при переменной одинаковы.`);
    steps.push(`2️⃣ Вычтем одно уравнение из другого:`);
    steps.push(`   <code>(${eq1}) − (${eq2})</code>`);
    steps.push(`3️⃣ Переменная сократится. Решим.`);
    steps.push(`4️⃣ Найдём вторую подстановкой.`);
    steps.push(`   <strong>Ответ: ${answerText}</strong>`);
  } else {
    steps.push(`1️⃣ Оба уравнения уже приведены к виду y = kx + b:`);
    steps.push(`   1) <code>${eq1}</code>`);
    steps.push(`   2) <code>${eq2}</code>`);
    steps.push(`2️⃣ Построим графики двух прямых.`);
    steps.push(`3️⃣ Найдём координаты точки пересечения.`);
    steps.push(`   <strong>Ответ: ${answerText}</strong>`);
  }

  steps.push(
    `<br>✅ Проверка: подставим значения в оба уравнения. Равенства верны.`,
  );
  steps.push(`ANSWER|${answerText}`);
  return steps;
}

export default function SystemCard({ system, isSolved, onSolve }) {
  const isMulti = system.multi;
  const answersX = isMulti && Array.isArray(system.x) ? system.x : [system.x];
  const answersY = isMulti && Array.isArray(system.y) ? system.y : [system.y];
  const answerCount = answersX.length;

  const [inputs, setInputs] = useState(() =>
    Array.from({ length: answerCount }, () => ({ x: "", y: "" })),
  );
  const [status, setStatus] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  const checkAnswer = () => {
    const allFilled = inputs.every((inp) => inp.x !== "" && inp.y !== "");
    if (!allFilled) return;

    // Проверка на "inf" / "none"
    if (typeof system.x === "string") {
      const userVal = inputs[0].x.toLowerCase().trim();
      if (
        (system.x === "inf" || system.x === "∞") &&
        (userVal === "inf" || userVal === "∞" || userVal === "бесконечно")
      ) {
        setStatus("correct");
        onSolve(system.id);
      } else if (
        system.x === "none" &&
        (userVal === "none" || userVal === "нет" || userVal === "0")
      ) {
        setStatus("correct");
        onSolve(system.id);
      } else {
        setStatus("wrong");
        setTimeout(() => setStatus(null), 2000);
      }
      return;
    }

    const userAnswers = inputs.map((inp) => ({
      x: parseFloat(inp.x.replace(",", ".")),
      y: parseFloat(inp.y.replace(",", ".")),
    }));

    const valid = userAnswers.every((a) => !isNaN(a.x) && !isNaN(a.y));
    if (!valid) return;

    const allMatch = userAnswers.every((ua) => {
      return answersX.some((rx, idx) => {
        const ry = answersY[idx];
        return Math.abs(ua.x - rx) < 0.01 && Math.abs(ua.y - ry) < 0.01;
      });
    });

    const countMatch = userAnswers.length === answerCount;

    if (allMatch && countMatch) {
      setStatus("correct");
      onSolve(system.id);
    } else {
      setStatus("wrong");
      setTimeout(() => setStatus(null), 2000);
    }
  };

  const updateInput = (index, field, value) => {
    setInputs((prev) =>
      prev.map((inp, i) => (i === index ? { ...inp, [field]: value } : inp)),
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") checkAnswer();
  };

  const solutionSteps = generateSolutionSteps(system);
  const lastStep = solutionSteps[solutionSteps.length - 1];
  const cleanSteps = solutionSteps.filter((s) => !s.startsWith("ANSWER|"));
  const methodClass = `method-${["", "1", "2", "3", "4"][system.method === "substitution" ? 1 : system.method === "addition" ? 2 : system.method === "subtraction" ? 3 : 4]}`;

  const getAnswerDisplay = () => {
    if (typeof system.x === "string") return system.x;
    if (isMulti)
      return answersX.map((x, i) => `(${x}; ${answersY[i]})`).join(" или ");
    return `(${system.x}; ${system.y})`;
  };

  // === Рендер решённой карточки ===
  if (isSolved) {
    return (
      <div className="system-card solved">
        <div className="system-top">
          <span className="system-number">#{system.id}</span>
          <div className="system-meta">
            <span className={`difficulty-badge diff-${system.difficulty}`}>
              {system.difficulty === "easy"
                ? "Легкий"
                : system.difficulty === "medium"
                  ? "Средний"
                  : "Сложный"}
            </span>
            <span className="system-method">
              {system.method === "substitution"
                ? "Подстановка"
                : system.method === "addition"
                  ? "Сложение"
                  : system.method === "subtraction"
                    ? "Вычитание"
                    : "Графический"}
            </span>
          </div>
          <span className="system-status status-correct">✓ Решено</span>
        </div>
        <div className="system-equations">
          <span className="eq">{system.eq1}</span>
          <span className="eq">{system.eq2}</span>
        </div>
        <div
          style={{
            color: "var(--ios-green)",
            fontWeight: 600,
            fontFamily: "SF Mono, monospace",
            fontSize: 14,
            marginTop: 8,
          }}
        >
          {isMulti ? "Решения: " : "Ответ: "}
          <strong>{getAnswerDisplay()}</strong>
        </div>
        <button
          className="solution-toggle"
          onClick={() => setShowSolution(!showSolution)}
          style={{ marginTop: 12 }}
        >
          {showSolution ? "📕 Скрыть решение" : "📘 Показать решение"}
        </button>
        {showSolution && (
          <div className={`solution-container ${methodClass}`}>
            {cleanSteps.map((s, i) => (
              <div
                key={i}
                className="solution-step"
                dangerouslySetInnerHTML={{ __html: s }}
              />
            ))}
            <div
              className="solution-answer-box"
              dangerouslySetInnerHTML={{
                __html: lastStep.replace("ANSWER|", ""),
              }}
            />
          </div>
        )}
        <DraftPad systemId={system.id} />
      </div>
    );
  }

  // === Рендер нерешённой карточки ===
  return (
    <div
      className={`system-card animate-in ${status === "wrong" ? "wrong" : ""}`}
    >
      <div className="system-top">
        <span className="system-number">#{system.id}</span>
        <div className="system-meta">
          <span className={`difficulty-badge diff-${system.difficulty}`}>
            {system.difficulty === "easy"
              ? "Легкий"
              : system.difficulty === "medium"
                ? "Средний"
                : "Сложный"}
          </span>
          <span className="system-method">
            {system.method === "substitution"
              ? "Подстановка"
              : system.method === "addition"
                ? "Сложение"
                : system.method === "subtraction"
                  ? "Вычитание"
                  : "Графический"}
          </span>
        </div>
      </div>

      <div className="system-equations">
        <span className="eq">{system.eq1}</span>
        <span className="eq">{system.eq2}</span>
      </div>

      {isMulti && !Array.isArray(system.x) === false && (
        <div className="answers-hint">
          ⚠️ Эта система имеет {answerCount} решения(я). Введи все пары.
        </div>
      )}

      {inputs.map((inp, i) => (
        <div
          className="system-inputs"
          key={i}
          style={{ marginBottom: i < inputs.length - 1 ? 4 : 14 }}
        >
          <div className="input-group">
            <label>{isMulti ? `x${i + 1}=` : "x="}</label>
            <input
              type="text"
              value={inp.x}
              onChange={(e) => updateInput(i, "x", e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="?"
              disabled={status === "correct"}
            />
          </div>
          <div className="input-group">
            <label>{isMulti ? `y${i + 1}=` : "y="}</label>
            <input
              type="text"
              value={inp.y}
              onChange={(e) => updateInput(i, "y", e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="?"
              disabled={status === "correct"}
            />
          </div>
        </div>
      ))}

      <div className="system-actions">
        {status !== "correct" && (
          <button
            className="btn btn-primary btn-sm"
            onClick={checkAnswer}
            disabled={!inputs.every((inp) => inp.x !== "" && inp.y !== "")}
            style={{
              opacity: !inputs.every((inp) => inp.x !== "" && inp.y !== "")
                ? 0.5
                : 1,
            }}
          >
            Проверить
          </button>
        )}
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => setShowHint(!showHint)}
        >
          {showHint ? "Скрыть подсказку" : "💡 Подсказка"}
        </button>
        {status === "wrong" && (
          <span className="system-status status-wrong pulse">✗ Неверно</span>
        )}
        {status === "correct" && (
          <span className="system-status status-correct pulse">✓ Верно!</span>
        )}
      </div>

      {showHint && <div className="hint-text visible">{system.hint}</div>}

      <button
        className="solution-toggle"
        onClick={() => setShowSolution(!showSolution)}
      >
        {showSolution ? "📕 Скрыть решение" : "📘 Показать решение"}
      </button>

      {showSolution && (
        <div className={`solution-container ${methodClass}`}>
          {cleanSteps.map((s, i) => (
            <div
              key={i}
              className="solution-step"
              dangerouslySetInnerHTML={{ __html: s }}
            />
          ))}
          <div
            className="solution-answer-box"
            dangerouslySetInnerHTML={{
              __html: lastStep.replace("ANSWER|", ""),
            }}
          />
        </div>
      )}

      <DraftPad systemId={system.id} />
    </div>
  );
}
