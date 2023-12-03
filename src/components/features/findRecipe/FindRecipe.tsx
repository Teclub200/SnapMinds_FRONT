import { Typography, Box } from "@mui/material";
import { Input, Tabs, TabList, tabClasses, Tab, TabPanel } from "@mui/joy";
import { FindFromGenre } from "./FindFromGenre";
import { FindFromPickUp } from "./FindFromPickUp";

export const FindRecipe = () => {
  return (
    <div>
      <Box
        sx={{
          flexGrow: 1,
          marginTop: "20px",
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
          さがす
        </Typography>
        <Input variant="soft" placeholder="例：桜、夕陽、正月" />
        <Tabs
          aria-label="tabs"
          defaultValue={0}
          sx={{ bgcolor: "transparent", marginTop: "20px" }}
        >
          <TabList
            disableUnderline
            sx={{
              p: 0.5,
              gap: 0.5,
              borderRadius: "xl",
              bgcolor: "background.level1",
              [`& .${tabClasses.root}[aria-selected="true"]`]: {
                boxShadow: "sm",
                bgcolor: "background.surface",
              },
            }}
          >
            <Tab disableIndicator>ピックアップ</Tab>
            <Tab disableIndicator>ジャンル</Tab>
          </TabList>
          <TabPanel value={0}>
            <FindFromPickUp />
          </TabPanel>
          <TabPanel value={1}>
            <FindFromGenre />
          </TabPanel>
        </Tabs>
      </Box>
    </div>
  );
};
