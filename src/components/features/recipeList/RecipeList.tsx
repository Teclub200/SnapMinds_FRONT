import { useLocation } from "react-router-dom";

export const RecipeList = () => {
  const location = useLocation();
  const { genreId } = location.state;
  return (
    <div>
      <h1>RecipeList</h1>
      <p>genreId: {genreId}</p>
    </div>
  );
};
