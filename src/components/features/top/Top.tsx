import { Box, Typography } from "@mui/material";

import CameraAltIcon from "@mui/icons-material/CameraAlt";

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
        </Box>
      </Box>
    </div>
  );
};
