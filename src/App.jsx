import "./App.css";
import MainLeft from "./components/MainLeft";
import MainRight from "./components/MainRight";

function App() {
  return (
    <div className="flex flex-row">
      {/* Left part: Sticky */}
      <div className="w-2/3 h-1/2 sticky top-0 overflow">
        <MainLeft />
      </div>
      <MainRight />
    </div>
  );
}

export default App;
