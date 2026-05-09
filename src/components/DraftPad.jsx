import { useState, useEffect } from "react";

export default function DraftPad({ systemId }) {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState("");
  const [isSaved, setIsSaved] = useState(false);

  // Загрузка при открытии
  useEffect(() => {
    if (isOpen) {
      try {
        const saved = localStorage.getItem(`draft-sys-${systemId}`);
        setContent(saved || "");
      } catch (e) {
        console.warn("localStorage недоступен");
      }
    }
  }, [isOpen, systemId]);

  const handleChange = (e) => {
    setContent(e.target.value);
    setIsSaved(false);
  };

  // Автосохранение с задержкой 500мс
  useEffect(() => {
    if (!isOpen) return;
    const timer = setTimeout(() => {
      try {
        localStorage.setItem(`draft-sys-${systemId}`, content);
        setIsSaved(true);
        setTimeout(() => setIsSaved(false), 1500);
      } catch (e) {}
    }, 500);
    return () => clearTimeout(timer);
  }, [content, isOpen, systemId]);

  const handleClear = () => {
    if (window.confirm("Очистить черновик?")) {
      setContent("");
      try {
        localStorage.removeItem(`draft-sys-${systemId}`);
      } catch (e) {}
      setIsSaved(false);
    }
  };

  if (!isOpen) {
    return (
      <button
        className="btn btn-secondary btn-sm draft-toggle"
        onClick={() => setIsOpen(true)}
      >
        📝 Черновик
      </button>
    );
  }

  return (
    <div className="draft-container animate-in">
      <div className="draft-header">
        <span>📝 Черновик #{systemId}</span>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {isSaved && <span className="draft-saved">✓ Сохранено</span>}
          <button
            className="btn btn-sm draft-icon-btn"
            onClick={handleClear}
            title="Очистить"
          >
            🗑️
          </button>
          <button
            className="btn btn-sm draft-icon-btn"
            onClick={() => setIsOpen(false)}
            title="Свернуть"
          >
            ✕
          </button>
        </div>
      </div>
      <textarea
        value={content}
        onChange={handleChange}
        placeholder="Записывайте вычисления, подстановки, заметки..."
        className="draft-textarea"
        spellCheck={false}
      />
    </div>
  );
}
