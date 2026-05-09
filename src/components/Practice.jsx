import { useState, useMemo } from "react";
import systems from "../data/systems";
import SystemCard from "./SystemCard";

const METHOD_LABELS = {
  all: "Все методы",
  substitution: "🔄 Подстановка",
  addition: "➕ Сложение",
  subtraction: "➖ Вычитание",
  graph: "📈 Графический",
};

const DIFFICULTY_LABELS = {
  all: "Любая сложность",
  easy: "🟢 Легкий",
  medium: "🟡 Средний",
  hard: "🔴 Сложный",
};

export default function Practice({ progress = {}, onSolve }) {
  const [methodFilter, setMethodFilter] = useState("all");
  const [diffFilter, setDiffFilter] = useState("all");

  const filteredSystems = useMemo(() => {
    return systems.filter((s) => {
      const matchMethod = methodFilter === "all" || s.method === methodFilter;
      const matchDiff = diffFilter === "all" || s.difficulty === diffFilter;
      return matchMethod && matchDiff;
    });
  }, [methodFilter, diffFilter]);

  const resetFilters = () => {
    setMethodFilter("all");
    setDiffFilter("all");
  };

  const solvedCount = Object.keys(progress).filter((k) => progress[k]).length;

  return (
    <div className="practice-page animate-in">
      <div className="container">
        <div className="section-header">
          <h1>✏️ Практика</h1>
          <p>Решай системы и проверяй ответы. Решено: {solvedCount} из 100</p>
        </div>

        <div className="filter-section">
          <div className="filter-group">
            <span className="filter-label">Метод:</span>
            <div className="filter-buttons">
              {Object.entries(METHOD_LABELS).map(([key, label]) => (
                <button
                  key={key}
                  className={`filter-btn ${methodFilter === key ? "active" : ""}`}
                  onClick={() => setMethodFilter(key)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <span className="filter-label">Сложность:</span>
            <div className="filter-buttons">
              {Object.entries(DIFFICULTY_LABELS).map(([key, label]) => (
                <button
                  key={key}
                  className={`filter-btn ${diffFilter === key ? "active" : ""}`}
                  onClick={() => setDiffFilter(key)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {(methodFilter !== "all" || diffFilter !== "all") && (
            <button
              className="btn btn-secondary btn-sm filter-reset"
              onClick={resetFilters}
            >
              🔄 Сбросить фильтры
            </button>
          )}
        </div>

        <div className="filter-stats">
          Найдено задач: <strong>{filteredSystems.length}</strong>
        </div>

        <div className="systems-grid">
          {filteredSystems.map((system) => (
            <SystemCard
              key={system.id}
              system={system}
              isSolved={!!progress[system.id]}
              onSolve={onSolve}
            />
          ))}
        </div>

        {filteredSystems.length === 0 && (
          <div className="empty-state">
            <div style={{ fontSize: 48, marginBottom: 16 }}>🎯</div>
            <p>
              Нет задач по выбранным фильтрам. Попробуй изменить параметры или
              сбросить фильтры.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
