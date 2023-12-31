import { Box, Typography, Grid } from "@mui/material";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Recipe } from "../../types/recipe";

export const RecipeDetail = () => {
  const recipeData: Recipe = {
    id: 1,
    title: "ここにタイトルが入ります",
    thumbnail: "https://picsum.photos/200",
    description: "ここに簡単な説明が入ります。",
    process: [
      "ここに手順1が入ります。ここに手順1が入ります。ここに手順1が入ります。",
      "ここに手順2が入ります。ここに手順2が入ります。ここに手順2が入ります。",
      "ここに手順3が入ります。ここに手順3が入ります。ここに手順3が入ります。",
      "ここに手順4が入ります。ここに手順3が入ります。ここに手順3が入ります。",
    ],
    advice: "ここにアドバイスが入ります。",
    genreId: 1,
    likeCount: 99,
    createdAt: "2021-10-01",
    deviceUsed: "ここに撮影デバイス名が入ります。",
    owner: 1,
  };

  const genreName: string = "春"; //仮で入れています。
  const userName: string = "ユーザー名"; //仮で入れています。

  return (
    <div>
      <Box sx={{ flexGrow: 1, marginTop: "20px" }}>
        <div
          style={{
            textAlign: "center",
            width: "100%",
            height: "300px",
            margin: "auto",
            backgroundColor: "#999999",
          }}
        ></div>
        <Box
          sx={{
            width: "80%",
            margin: "auto",
            paddingTop: "15px",
          }}
        >
          <Typography variant="h4" component="div" sx={{ fontWeight: "bold" }}>
            {recipeData.title}
          </Typography>
          <Grid container spacing={2} sx={{ marginTop: "5px" }}>
            <Grid item xs={9}>
              <Typography variant="h6" component="div">
                <AccountCircleIcon sx={{ verticalAlign: "-5px" }} />
                {userName}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="h6" component="div">
                <FavoriteBorderIcon sx={{ verticalAlign: "-5px" }} />
                {recipeData.likeCount}
              </Typography>
            </Grid>
          </Grid>
          <Box
            sx={{
              flexGrow: 1,
              marginTop: "5px",
              padding: "10px",
              backgroundColor: "#cde7f7",
            }}
          >
            <Typography variant="h5" component="div">
              {recipeData.description}
            </Typography>
          </Box>
          <Typography
            variant="h4"
            component="div"
            sx={{ marginTop: "20px", fontWeight: "bold" }}
          >
            手順
          </Typography>
          {recipeData.process.map((process, index) => (
            <Grid container spacing={2} sx={{ marginTop: "5px" }}>
              <Grid item xs={3}>
                <Typography
                  variant="h3"
                  component="div"
                  sx={{
                    color: "#FFFFFF",
                    fontWeight: "bold",
                    textAlign: "center",
                    backgroundColor: "#62bee3",
                    width: "70px",
                    height: "50px",
                  }}
                >
                  {index + 1}
                </Typography>
              </Grid>
              <Grid item xs={9}>
                <Typography variant="h5" component="div">
                  {process}
                </Typography>
              </Grid>
            </Grid>
          ))}
          <Typography
            variant="h4"
            component="div"
            sx={{ marginTop: "20px", fontWeight: "bold" }}
          >
            アドバイス
          </Typography>
          <Typography variant="h5" component={"div"} sx={{ marginTop: "5px" }}>
            {recipeData.advice}
          </Typography>
          <Typography
            variant="h4"
            component="div"
            sx={{ marginTop: "20px", fontWeight: "bold" }}
          >
            撮影デバイス
          </Typography>
          <Typography variant="h5" component={"div"} sx={{ marginTop: "5px" }}>
            {recipeData.deviceUsed}
          </Typography>
          <Typography
            variant="h4"
            component="div"
            sx={{ marginTop: "20px", fontWeight: "bold" }}
          >
            撮影日時
          </Typography>
          <Typography variant="h5" component={"div"} sx={{ marginTop: "5px" }}>
            {recipeData.createdAt}
          </Typography>
          <Typography
            variant="h4"
            component="div"
            sx={{ marginTop: "20px", fontWeight: "bold" }}
          >
            ジャンル
          </Typography>
          <Typography
            variant="h5"
            component={"div"}
            sx={{ marginTop: "5px", marginBottom: "30px" }}
          >
            {genreName}
          </Typography>
        </Box>
      </Box>
    </div>
  );
};
