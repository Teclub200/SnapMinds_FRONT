import { useState } from "react";

import { Box, Typography, Stack } from "@mui/material";
import { Input } from "@mui/joy";
import { MyGradationButton } from "../../common/MyGradationButton";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export const CreateAccount = () => {
  const [page, setPage] = useState<number>(1);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [authCode, setAuthCode] = useState<string>("");

  const goToTopPage = () => {
    window.location.href = "/";
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    setPage(page - 1);
  };

  const testDisp = () => {
    alert(
      "email: " +
        email +
        "\n" +
        "password: " +
        password +
        "\n" +
        "userName: " +
        userName +
        "\n" +
        "authCode: " +
        authCode
    );
  };

  if (page === 1) {
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
                <Input
                  variant="soft"
                  placeholder="ユーザー名"
                  onChange={(e) => setUserName(e.target.value)}
                />
              </Stack>
              <Stack direction="column" spacing={2} sx={{ padding: "20px" }}>
                <MyGradationButton
                  variant="primary"
                  buttonText="次へ"
                  onClickFunc={() => nextPage()}
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
  } else if (page === 2) {
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
              メールを確認
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
              <Typography variant="h5" component="div" sx={{ padding: "20px" }}>
                届いたメールに記載されている認証コードを入力してください。
              </Typography>
              <Stack direction="column" spacing={2} sx={{ padding: "20px" }}>
                <Input
                  variant="soft"
                  placeholder="認証コード"
                  onChange={(e) => setAuthCode(e.target.value)}
                />
              </Stack>
              <Stack direction="column" spacing={2} sx={{ padding: "20px" }}>
                <MyGradationButton
                  variant="primary"
                  buttonText="登録する"
                  onClickFunc={() => nextPage()}
                />
                <MyGradationButton
                  variant="secondary"
                  buttonText="戻る"
                  onClickFunc={() => prevPage()}
                />
              </Stack>
            </Box>
          </Box>
        </Box>
      </div>
    );
  } else if (page === 3) {
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
              登録完了
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
              <Typography variant="h5" component="div" sx={{ padding: "20px" }}>
                登録が完了しました。
              </Typography>
              <Box sx={{ flexGrow: 1, marginTop: "10%" }}>
                <Typography variant="h1">
                  <CheckCircleOutlineIcon sx={{ fontSize: 100 }} />
                </Typography>
              </Box>
              <Stack direction="column" spacing={2} sx={{ padding: "20px" }}>
                <MyGradationButton
                  variant="primary"
                  buttonText="始める"
                  onClickFunc={() => testDisp()}
                />
              </Stack>
            </Box>
          </Box>
        </Box>
      </div>
    );
  }
};
