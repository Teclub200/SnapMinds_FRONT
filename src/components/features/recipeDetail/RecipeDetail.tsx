import { Box, Typography, Grid } from "@mui/material";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const RecipeDetail = () => {
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
            ここにタイトルが入ります
          </Typography>
          <Typography variant="h6" component="div">
            <AccountCircleIcon fontSize="medium" />
            作成者
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              marginTop: "5px",
              padding: "10px",
              backgroundColor: "#cde7f7",
            }}
          >
            <Typography variant="h5" component="div">
              ここに簡単な説明が入ります。
            </Typography>
          </Box>
          <Typography
            variant="h4"
            component="div"
            sx={{ marginTop: "20px", fontWeight: "bold" }}
          >
            手順
          </Typography>
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
                1
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography variant="h5" component="div">
                手順の説明が入ります。手順の説明が入ります。手順の説明が入ります。手順の説明が入ります。手順の説明が入ります。手順の説明が入ります。手順の説明が入ります。
              </Typography>
            </Grid>
          </Grid>
          <Typography
            variant="h4"
            component="div"
            sx={{ marginTop: "20px", fontWeight: "bold" }}
          >
            アドバイス
          </Typography>
          <Typography variant="h5" component={"div"} sx={{ marginTop: "5px" }}>
            アドバイスの説明が入ります。アドバイスの説明が入ります。アドバイスの説明が入ります。アドバイスの説明が入ります。アドバイスの説明が入ります。アドバイスの説明が入ります。
          </Typography>
          <Typography
            variant="h4"
            component="div"
            sx={{ marginTop: "20px", fontWeight: "bold" }}
          >
            撮影デバイス
          </Typography>
          <Typography variant="h5" component={"div"} sx={{ marginTop: "5px" }}>
            撮影デバイス名が入ります。
          </Typography>
          <Typography
            variant="h4"
            component="div"
            sx={{ marginTop: "20px", fontWeight: "bold" }}
          >
            撮影日時
          </Typography>
          <Typography variant="h5" component={"div"} sx={{ marginTop: "5px" }}>
            撮影日時が入ります。
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
            ジャンルが入ります。
          </Typography>
        </Box>
      </Box>
    </div>
  );
};
