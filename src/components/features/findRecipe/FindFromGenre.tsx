import { Genre } from "../../types/genre";
import { Typography, Stack } from "@mui/material";
import { Card, CardOverflow, AspectRatio, CardContent } from "@mui/joy";

import { Link } from "react-router-dom";

export const FindFromGenre = () => {
  const sampleGenreList: Genre[] = [
    {
      id: 1,
      genre: "風景",
    },
    {
      id: 2,
      genre: "人物",
    },
    {
      id: 3,
      genre: "料理",
    },
    {
      id: 4,
      genre: "動物",
    },
    {
      id: 5,
      genre: "建物",
    },
    {
      id: 6,
      genre: "その他",
    },
  ];

  return (
    <div>
      <Stack direction="column" spacing={2}>
        {sampleGenreList.map((genre) => (
          <Link
            to={"/recipe-list"}
            state={{ genreId: genre.id }}
            style={{ borderStyle: "none" }}
          >
            <Card
              orientation="horizontal"
              sx={{
                width: "90%",
                margin: "auto",
                backgroundColor: "#ffffff",
                cursor: "pointer",
              }}
            >
              <CardOverflow>
                <AspectRatio ratio="1" sx={{ width: 90 }}>
                  <img
                    src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90"
                    srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
                    loading="lazy"
                    alt=""
                  />
                </AspectRatio>
              </CardOverflow>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {genre.genre}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        ))}
      </Stack>
    </div>
  );
};
