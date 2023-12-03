import { useState } from "react";

import { Box, Typography, Stack } from "@mui/material";
import { Input, Alert } from "@mui/joy";
import { MyGradationButton } from "../../common/MyGradationButton";

export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [errorText, setErrorText] = useState<string>("");
  const [errorTextShow, setErrorTextShow] = useState<boolean>(false);

  const inputValidation = () => {
    if (email == "" || password == "") {
      setErrorText("入力されていない項目があります。");
      setErrorTextShow(true);
    } else {
      setErrorTextShow(false);
      window.location.href = "/find";
    }
  };

  const goToTopPage = () => {
    window.location.href = "/";
  };

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
            おかえりなさい
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
              <Input
                variant="soft"
                placeholder="メールアドレス"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                variant="soft"
                placeholder="パスワード"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {errorTextShow && (
                <Alert color="danger" variant="outlined">
                  {errorText}
                </Alert>
              )}
            </Stack>
            <Stack direction="column" spacing={2} sx={{ padding: "20px" }}>
              <MyGradationButton
                variant="primary"
                buttonText="ログイン"
                onClickFunc={() => inputValidation()}
              />
              <MyGradationButton
                variant="secondary"
                buttonText="戻る"
                onClickFunc={() => goToTopPage()}
              />
            </Stack>
          </Box>
        </Box>
      </Box>
    </div>
  );
};
