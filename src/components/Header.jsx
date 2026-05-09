import { useState, useEffect } from "react";

export default function Header({ activeTab, onTabChange, progress }) {
  const solvedCount = Object.keys(progress).filter((k) => progress[k]).length;

  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo" onClick={() => onTabChange("home")}>
          <div className="logo-icon">∑</div>
          <span>СистеМатик</span>
        </div>

        <nav className="nav-tabs">
          <button
            className={`nav-tab ${activeTab === "home" ? "active" : ""}`}
            onClick={() => onTabChange("home")}
          >
            Главная
          </button>
          <button
            className={`nav-tab ${activeTab === "theory" ? "active" : ""}`}
            onClick={() => onTabChange("theory")}
          >
            Теория
          </button>
          <button
            className={`nav-tab ${activeTab === "practice" ? "active" : ""}`}
            onClick={() => onTabChange("practice")}
          >
            Практика
          </button>
          <button
            className={`nav-tab ${activeTab === "progress" ? "active" : ""}`}
            onClick={() => onTabChange("progress")}
          >
            Прогресс
          </button>
        </nav>

        {solvedCount > 0 && (
          <div
            style={{
              fontSize: "14px",
              fontWeight: 700,
              color: "var(--success)",
            }}
          >
            ✓ {solvedCount}/100
          </div>
        )}
      </div>
    </header>
  );
}
