import { Route, Routes } from "react-router-dom";
import { TopPage } from "./components/pages/TopPage";

function App() {
  return (
    <div className="App">
      <h1>React App</h1>
      <Routes>
        <Route path="/" element={<TopPage />} />
      </Routes>
    </div>
  );
}

export default App;
