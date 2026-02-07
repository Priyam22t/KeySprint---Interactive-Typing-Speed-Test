export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <header className="navbar">
      <div className="nav-brand">
        <img src="/logo.png" alt="KeySprint" />
        <span>KeySprint</span>
      </div>

      <button
        className="theme-toggle"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀ Light" : "🌙 Dark"}
      </button>
    </header>
  );
}
