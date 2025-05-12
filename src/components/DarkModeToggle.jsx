
import useDarkMode from "../hooks/useDarkMode";

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useDarkMode();

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="px-2 py-1 rounded-2xl border-2 dark  text-black dark:text-white transition"
    >
      {isDarkMode ? "☀️" : "🌙"}
    </button>
  );
}
