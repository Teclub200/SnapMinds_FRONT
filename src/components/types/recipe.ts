export type Recipe = {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  process: string[];
  advice: string;
  genreId: number;
  likeCount: number;
  createdAt: string;
  deviceUsed: string;
  owner: number;
};
