import { Box, Typography, Stack } from "@mui/material";

import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { MyGradationButton } from "../../common/MyGradationButton";

export const Top = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1, backgroundColor: "#999999" }}>
        <Box
          sx={{
            width: "80%",
            height: "100vh",
            margin: "auto",
            paddingTop: "10%",
            textAlign: "center",
          }}
        >
          <CameraAltIcon
            sx={{
              fontSize: 100,
              color: "#FFFFFF",
              marginTop: "30px",
            }}
          />
          <Typography
            variant="h3"
            component="div"
            sx={{
              flexGrow: 1,
              color: "#FFFFFF",
              fontWeight: "bold",
              marginTop: "10%",
            }}
          >
            写真のスキルを学ぶ・共有する
          </Typography>
          <Box sx={{ flexGrow: 1, marginTop: "10%" }}>
            <Stack direction="column" spacing={2}>
              <MyGradationButton
                variant="primary"
                buttonText="ログイン"
                onClickFunc={() => alert("ボタンが押されました")}
              />
              <MyGradationButton
                variant="secondary"
                buttonText="新規登録"
                onClickFunc={() => alert("ボタンが押されました")}
              />
            </Stack>
          </Box>
        </Box>
      </Box>
    </div>
  );
};
