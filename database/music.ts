import { cache } from 'react';
import { sql } from './connect';

type Music = {
  id: number;
  song_title: string | null;
  author: string | null;
  published_date: string;
  genre: string | null;
};

// get all the music
export const getMusic = cache(async (song_title: string) => {
  const [music] = await sql<Music[]>`
  SELECT
    *

  FROM
    music
  WHERE

    song_title = ${song_title}
`;
  return music;
});
