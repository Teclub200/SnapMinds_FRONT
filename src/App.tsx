import { Route, Routes } from "react-router-dom";
import { HomePage } from "./components/pages/HomePage";

function App() {
  return (
    <div className="App">
      <h1>React App</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
