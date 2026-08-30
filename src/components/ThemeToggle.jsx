import "../styles/ThemeToggle.css";

function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      className="theme-btn"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}

export default ThemeToggle;