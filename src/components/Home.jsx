export default function Home({ onNavigate, progress }) {
  const solvedCount = Object.keys(progress).filter((k) => progress[k]).length;
  const percent = Math.round((solvedCount / 100) * 100);

  return (
    <div className="hero">
      <h1>
        Решай системы
        <br />
        <span>уравнений</span> легко
      </h1>
      <p>
        Изучи 4 метода решения, реши 100 задач и получи сертификат прохождения
      </p>

      <div className="hero-stats">
        <div className="hero-stat">
          <div className="hero-stat-value">3</div>
          <div className="hero-stat-label">Метода</div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat-value">100</div>
          <div className="hero-stat-label">Задач</div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat-value">{percent}%</div>
          <div className="hero-stat-label">Прогресс</div>
        </div>
      </div>

      <div className="hero-actions">
        <button
          className="btn btn-primary"
          onClick={() => onNavigate("theory")}
        >
          📖 Начать обучение
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => onNavigate("practice")}
        >
          ✏️ К практике
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => onNavigate("progress")}
        >
          📊 Мой прогресс
        </button>
      </div>
    </div>
  );
}
