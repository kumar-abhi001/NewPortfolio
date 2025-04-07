
import useDarkMode from "../hooks/useDarkMode";

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useDarkMode();

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="p-2 rounded  text-black dark:text-white transition"
    >
      {isDarkMode ? "☀️" : "🌙"}
    </button>
  );
}
