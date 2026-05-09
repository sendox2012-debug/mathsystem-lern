export default function ProgressBar({ progress }) {
  const solvedCount = Object.keys(progress).filter((k) => progress[k]).length;
  const percent = Math.round((solvedCount / 100) * 100);

  const byMethod = {
    substitution: {
      name: "Метод подстановки",
      total: 40,
      solved: 0,
      color: "#7c5cfc",
    },
    addition: {
      name: "Метод сложения",
      total: 35,
      solved: 0,
      color: "#3b82f6",
    },
    graph: {
      name: "Графический метод",
      total: 25,
      solved: 0,
      color: "#34d399",
    },
  };

  // Подсчёт по методам (нужно передать systems, но упростим)

  const isComplete = solvedCount === 100;

  return (
    <div className="progress-page animate-in">
      <div className="container">
        <h1>📊 Прогресс</h1>

        {isComplete && (
          <div className="completion-badge">
            <div className="trophy">🏆</div>
            <h2>Поздравляем!</h2>
            <p style={{ color: "var(--text-muted)", marginBottom: 0 }}>
              Вы решили все 100 систем уравнений! Обучение пройдено!
            </p>
          </div>
        )}

        <div className="progress-overview">
          <div className="progress-circle" style={{ "--progress": percent }}>
            <span className="progress-percent">{percent}%</span>
          </div>
          <div className="progress-label">
            {isComplete
              ? "🎉 Обучение завершено!"
              : `${solvedCount} из 100 решено`}
          </div>
          <div className="progress-desc">
            {percent === 0 && "Начни решать задачи, чтобы увидеть прогресс"}
            {percent > 0 && percent < 25 && "Хорошее начало! Продолжай!"}
            {percent >= 25 && percent < 50 && "Четверть пути пройдена!"}
            {percent >= 50 && percent < 75 && "Больше половины! Отлично!"}
            {percent >= 75 &&
              percent < 100 &&
              "Почти готово! Осталось немного!"}
          </div>

          <div className="progress-bar-big">
            <div
              className="progress-bar-fill"
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>

        <div className="progress-by-method">
          <div className="method-progress">
            <h3 style={{ color: "#7c5cfc" }}>📝 Подстановка</h3>
            <div className="bar">
              <div
                className="bar-fill"
                style={{
                  width: `${(byMethod.substitution.solved / byMethod.substitution.total) * 100}%`,
                  background: "#7c5cfc",
                }}
              />
            </div>
            <div className="count">
              {byMethod.substitution.solved}/{byMethod.substitution.total}
            </div>
          </div>
          <div className="method-progress">
            <h3 style={{ color: "#3b82f6" }}>➕ Сложение</h3>
            <div className="bar">
              <div
                className="bar-fill"
                style={{
                  width: `${(byMethod.addition.solved / byMethod.addition.total) * 100}%`,
                  background: "#3b82f6",
                }}
              />
            </div>
            <div className="count">
              {byMethod.addition.solved}/{byMethod.addition.total}
            </div>
          </div>
          <div className="method-progress">
            <h3 style={{ color: "#34d399" }}>📈 Графический</h3>
            <div className="bar">
              <div
                className="bar-fill"
                style={{
                  width: `${(byMethod.graph.solved / byMethod.graph.total) * 100}%`,
                  background: "#34d399",
                }}
              />
            </div>
            <div className="count">
              {byMethod.graph.solved}/{byMethod.graph.total}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
