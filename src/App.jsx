import { useState, useEffect } from "react";
import Home from "./components/Home";
import Theory from "./components/Theory";
import Practice from "./components/Practice";
import ProgressBar from "./components/ProgressBar";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("math-progress") || "{}");
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem("math-progress", JSON.stringify(progress));
  }, [progress]);

  // Блокировка скролла при открытом меню
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleTab = (tab) => {
    setActiveTab(tab);
    setMenuOpen(false);
  };

  const solvedCount = Object.keys(progress).filter((k) => progress[k]).length;

  // Закрытие меню при клике вне его (для iOS Safari)
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) setMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="header-inner">
          <div className="logo" onClick={() => handleTab("home")}>
            <div className="logo-icon">∑</div>
            <span>СистеМатик</span>
          </div>

          <nav className="nav-tabs">
            {["home", "theory", "practice", "progress"].map((tab) => (
              <button
                key={tab}
                className={`nav-tab ${activeTab === tab ? "active" : ""}`}
                onClick={() => handleTab(tab)}
              >
                {tab === "home"
                  ? "Главная"
                  : tab === "theory"
                    ? "Теория"
                    : tab === "practice"
                      ? "Практика"
                      : "Прогресс"}
              </button>
            ))}
          </nav>

          {solvedCount > 0 && (
            <span className="solved-badge">✓ {solvedCount}/100</span>
          )}

          <button
            className={`burger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Меню"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="mobile-menu" onClick={handleBackdropClick}>
          {[
            { key: "home", label: "🏠 Главная" },
            { key: "theory", label: "📚 Теория" },
            { key: "practice", label: "✏️ Практика" },
            { key: "progress", label: "📊 Прогресс" },
          ].map((tab) => (
            <button
              key={tab.key}
              className={`nav-tab ${activeTab === tab.key ? "active" : ""}`}
              onClick={() => handleTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}

      <main>
        {activeTab === "home" && (
          <Home onNavigate={handleTab} progress={progress} />
        )}
        {activeTab === "theory" && <Theory />}
        {activeTab === "practice" && (
          <Practice
            progress={progress}
            onSolve={(id) => setProgress((p) => ({ ...p, [id]: true }))}
          />
        )}
        {activeTab === "progress" && <ProgressBar progress={progress} />}
      </main>

      {solvedCount === 100 && <Confetti />}
    </>
  );
}

function Confetti() {
  useEffect(() => {
    const c = document.createElement("div");
    c.className = "confetti-container";
    document.body.appendChild(c);
    const colors = ["#0A84FF", "#30D158", "#FF9F0A", "#BF5AF2", "#FF453A"];
    for (let i = 0; i < 30; i++) {
      const el = document.createElement("div");
      el.className = "confetti";
      el.style.left = Math.random() * 100 + "%";
      el.style.background = colors[Math.floor(Math.random() * colors.length)];
      el.style.width = el.style.height = Math.random() * 6 + 4 + "px";
      el.style.borderRadius = Math.random() > 0.5 ? "50%" : "2px";
      el.style.animationDuration = Math.random() * 2 + 2 + "s";
      el.style.animationDelay = Math.random() * 1.5 + "s";
      c.appendChild(el);
    }
    const t = setTimeout(() => c.remove(), 4500);
    return () => {
      clearTimeout(t);
      c.remove();
    };
  }, []);
  return null;
}
