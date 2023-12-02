import { Box, Typography, Stack } from "@mui/material";
import { Input } from "@mui/joy";
import { MyGradationButton } from "../../common/MyGradationButton";

export const CreateAccount = () => {
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
          <Typography
            variant="h3"
            component="div"
            sx={{ flexGrow: 1, color: "#ffffff" }}
          >
            ようこそ
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              marginTop: "10%",
              width: "90%",
              marginLeft: "auto",
              marginRight: "auto",
              height: "auto",
              background: "rgba(255, 255, 255, 0.5)",
              borderRadius: "30px",
            }}
          >
            <Stack direction="column" spacing={2} sx={{ padding: "20px" }}>
              <Input variant="soft" placeholder="メールアドレス" />
              <Input variant="soft" placeholder="パスワード" type="password" />
              <Input variant="soft" placeholder="ユーザー名" />
            </Stack>
            <Stack direction="column" spacing={2} sx={{ padding: "20px" }}>
              <MyGradationButton
                variant="primary"
                buttonText="次へ"
                onClickFunc={() => alert("ボタンが押されました")}
              />
              <MyGradationButton
                variant="secondary"
                buttonText="戻る"
                onClickFunc={() => alert("ボタンが押されました")}
              />
            </Stack>
          </Box>
        </Box>
      </Box>
    </div>
  );
};
