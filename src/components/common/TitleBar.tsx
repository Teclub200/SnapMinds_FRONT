import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import Badge from "@mui/material/Badge";
import { Avatar } from "@mui/material";

import NotificationsIcon from "@mui/icons-material/Notifications";

export const TitleBar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography
              variant="h4"
              component="div"
              sx={{ flexGrow: 1, textAlign: "center", cursor: "pointer" }}
              onClick={() => {
                window.location.href = "/";
              }}
            >
              Snap Minds
            </Typography>
            <Badge
              badgeContent={0}
              color="secondary"
              sx={{ marginRight: "20px" }}
            >
              <NotificationsIcon fontSize="large" />
            </Badge>
            <Avatar src="/broken-image.jpg" />
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
