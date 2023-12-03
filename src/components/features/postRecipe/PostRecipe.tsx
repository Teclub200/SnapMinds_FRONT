import React, { useState } from "react";

import { Box, Typography } from "@mui/material";
import { Input } from "@mui/joy";
import { MyGradationButton } from "../../common/MyGradationButton";

interface FormData {
  title: string;
  description: string;
  process: string[];
  deviceUsed: string;
  genre: string;
  likeCount: number;
  createdAt: string;
  owner: string;
}

export const PostRecipe = () => {
  const [recipe, setRecipe] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // フォームの送信処理を実装する
    alert("送信データ：" + JSON.stringify(formData));
  };

  // 入力が変更されたときのハンドラー
  const handleInputChange = (e) => {
    // 入力フィールドの名前に基づいて、該当する状態を更新
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [formData, setFormData] = useState<FormData>({
    title: "サンプルタイトル",
    description: "サンプルの簡単な説明",
    process: ["手順１", "手順２"],
    deviceUsed: "iPhone14",
    genre: "sakura",
    likeCount: 0,
    createdAt: "2023-10-01",
    owner: "505050505050",
  });

  return (
    <div>
      <Box sx={{ width: "100%", marginTop: "20px" }}>
        <Box sx={{ flexGrow: 1, width: "80%", margin: "auto" }}>
          <Typography variant="h4" component="div" sx={{ fontWeight: "bold" }}>
            撮影レシピ投稿
          </Typography>
          <form onSubmit={handleSubmit}>
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              タイトル
            </Typography>
            <Input
              variant="soft"
              placeholder="タイトル"
              value={formData.title}
              onChange={(e) => handleInputChange(e)}
            />
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: "bold", marginTop: "10px" }}
            >
              作例の写真
            </Typography>
            <input type="file" />
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: "bold", marginTop: "10px" }}
            >
              簡単な説明
            </Typography>
            <Input
              variant="soft"
              placeholder="説明"
              value={formData.description}
              onChange={(e) => handleInputChange(e)}
            />
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: "bold", marginTop: "10px" }}
            >
              手順
            </Typography>
            <Input
              variant="soft"
              placeholder="手順1"
              value={formData.process[0]}
            />
            <Input
              variant="soft"
              placeholder="手順2"
              value={formData.process[1]}
            />
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: "bold", marginTop: "10px" }}
            >
              撮影デバイス
            </Typography>
            <Input
              variant="soft"
              placeholder="撮影デバイス"
              value={formData.deviceUsed}
              onChange={(e) => handleInputChange(e)}
            />
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: "bold", marginTop: "10px" }}
            >
              ジャンル
            </Typography>
            <Input
              variant="soft"
              placeholder="ジャンル"
              value={formData.genre}
              onChange={(e) => handleInputChange(e)}
              sx={{ marginBottom: "20px" }}
            />
            <MyGradationButton
              variant="primary"
              buttonText="投稿する"
              onClickFunc={() => alert("投稿しました！")}
            />
          </form>
        </Box>
      </Box>
    </div>
  );
};
