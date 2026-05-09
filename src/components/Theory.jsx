export default function Theory() {
  const sources = [
    {
      title: "Решу ОГЭ — Системы уравнений",
      url: "https://math-oge.sdamgia.ru/test?theme=216",
    },
    {
      title: "ЯКласс — Видеоуроки по системам",
      url: "https://www.yaklass.ru/matematika/7-klass/sistemy-lineinyh-uravnenii",
    },
    {
      title: 'YouTube — Канал "Математик МГУ"',
      url: "https://www.youtube.com/watch?v=example1",
    },
    {
      title: "ИнтернетУрок — 7 класс: Алгебра",
      url: "https://interneturok.ru/algebra/7-klass",
    },
    {
      title: "Mathprosto — Пошаговые решения",
      url: "https://mathprosto.ru/sistemy-uravnenii",
    },
    {
      title: "Khan Academy — Systems of equations",
      url: "https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:systems-of-equations",
    },
  ];

  return (
    <div className="theory-page animate-in">
      <div className="container">
        <div className="section-header">
          <h1>📚 Теория</h1>
          <p>4 метода решения + проверка + типичные ошибки</p>
        </div>

        {/* Подстановка */}
        <div className="method-card method-1">
          <div className="method-header">
            <div
              className="method-icon"
              style={{ background: "var(--ios-blue)" }}
            >
              🔄
            </div>
            <div>
              <div className="method-title">Метод подстановки</div>
              <div className="method-subtitle">
                Вырази одну переменную и подставь
              </div>
            </div>
          </div>
          <div className="method-content">
            <h3>📝 Алгоритм:</h3>
            <p>1. Вырази одну переменную через другую</p>
            <p>2. Подставь в другое уравнение</p>
            <p>3. Реши уравнение с одной переменной</p>
            <p>4. Найди вторую переменную подстановкой</p>
            <div className="math-example">
              <span className="step">
                <span className="step-label">Дано:</span> {`{ y = x + 3`}
              </span>
              <span className="step">
                <span className="step-label">Шаг 2:</span> 2x + (x + 3) = 9
              </span>
              <span className="step">
                <span className="step-label">Ответ:</span>{" "}
                <span className="result">x = 2, y = 5</span>
              </span>
            </div>
            <div className="tips-box">
              <strong>⚠️ Ошибка:</strong> Забывать менять знаки при раскрытии
              скобок: 2x - (x + 3) = 2x - x - 3
            </div>
          </div>
        </div>

        {/* Сложение */}
        <div className="method-card method-2">
          <div className="method-header">
            <div
              className="method-icon"
              style={{ background: "var(--ios-green)" }}
            >
              ➕
            </div>
            <div>
              <div className="method-title">Метод сложения</div>
              <div className="method-subtitle">
                Сложи уравнения для уничтожения переменной
              </div>
            </div>
          </div>
          <div className="method-content">
            <p>Идеален, когда коэффициенты противоположны.</p>
            <div className="math-example">
              <span className="step">
                <span className="step-label">Дано:</span> {`{ 3x + 2y = 13`}
              </span>
              <span className="step">
                <span className="step-label">Сложение:</span> 6x = 18 →{" "}
                <span className="result">x = 3</span>
              </span>
            </div>
          </div>
        </div>

        {/* Вычитание */}
        <div className="method-card method-3">
          <div className="method-header">
            <div
              className="method-icon"
              style={{ background: "var(--ios-orange)" }}
            >
              ➖
            </div>
            <div>
              <div className="method-title">Метод вычитания</div>
              <div className="method-subtitle">
                Вычти одно уравнение из другого
              </div>
            </div>
          </div>
          <div className="method-content">
            <p>Когда коэффициенты при переменной одинаковы.</p>
            <div className="math-example">
              <span className="step">
                <span className="step-label">Дано:</span> {`{ 5x + 3y = 18`}
              </span>
              <span className="step">
                <span className="step-label">Вычитание:</span> 3x = 9 →{" "}
                <span className="result">x = 3</span>
              </span>
            </div>
          </div>
        </div>

        {/* Графический */}
        <div className="method-card method-4">
          <div className="method-header">
            <div
              className="method-icon"
              style={{ background: "var(--ios-purple)" }}
            >
              📈
            </div>
            <div>
              <div className="method-title">Графический метод</div>
              <div className="method-subtitle">
                Построй графики и найди пересечение
              </div>
            </div>
          </div>
          <div className="method-content">
            <p>Каждое уравнение — прямая. Решение = точка пересечения.</p>
            <div className="math-example">
              <span className="step">
                <span className="step-label">Дано:</span> {`{ y = x + 1`}
              </span>
              <span className="step">
                <span className="step-label">Пересечение:</span>{" "}
                <span className="result">(2; 3)</span>
              </span>
            </div>
            <div className="tips-box">
              <strong>🔍 Параллельные прямые</strong> → нет решений. Совпадающие
              → бесконечно много.
            </div>
          </div>
        </div>

        {/* Источники */}
        <div className="sources-box">
          <h4>📖 Рекомендуемые источники</h4>
          {sources.map((s, i) => (
            <a
              key={i}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="source-link"
            >
              <span className="arrow">→</span>
              {s.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
