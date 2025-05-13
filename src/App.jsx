import "./App.css";
import MainLeft from "./components/MainLeft";
import MainRight from "./components/MainRight";
import { Analytics } from "@vercel/analytics/next"

function App() {
  return (
    <div className="flex flex-row dark:bg-[#18181b] dark:text-white">
      {/* Left part: Sticky */}
      <div className="w-2/3 h-1/2 sticky top-0 overflow dark:text-white">
        <MainLeft />
      </div>
      <MainRight />
      <Analytics />
    </div>
  );
}

export default App;
