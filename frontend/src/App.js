import "./App.css";
import { Routes, Route } from "react-router-dom";
import ConfigUpdate from "./components/ConfigUpdate";
import ConfigCreate from "./components/ConfigCreate";
function App() {
  return (
    <div>
      <Routes>
        {/* task1 in this route */}
        <Route path="/" element={<ConfigCreate />} />
        {/* //task2 in this route */}
        <Route path="/update" element={<ConfigUpdate />} />
      </Routes>
    </div>
  );
}

export default App;
