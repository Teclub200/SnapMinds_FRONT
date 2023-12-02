import { Route, Routes } from "react-router-dom";
import { TopPage } from "./components/pages/TopPage";
import { LoginPage } from "./components/pages/LoginPage";
import { CreateAccountPage } from "./components/pages/CreateAccountPage";
import { FindRecipePage } from "./components/pages/FindRecipePage";
import { RecipeDetailPage } from "./components/pages/RecipeDetailPage";
import { PostRecipePage } from "./components/pages/PostRecipePage";

import { TitleBar } from "./components/common/TitleBar";

function App() {
  return (
    <>
      <div className="App">
        <TitleBar />
        <Routes>
          <Route path="/" element={<TopPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/create-account" element={<CreateAccountPage />} />
          <Route path="/find" element={<FindRecipePage />} />
          <Route path="/recipe-list" element={<FindRecipePage />} />
          <Route path="/recipe-detail" element={<RecipeDetailPage />} />
          <Route path="/post" element={<PostRecipePage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
