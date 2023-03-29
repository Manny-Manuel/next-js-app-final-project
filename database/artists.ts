import { cache } from 'react';
import { sql } from './connect';

type Artists = {
  id: number;
  artist_name: string | null;
  avatar: string | null;
  mp3: string;
};

// get all the artists
export const getArtist = cache(async (artist_name: string) => {
  const [artists] = await sql<Artists[]>`
    SELECT
      *

    FROM
      artists
    WHERE

      artist_name = ${artist_name}
  `;
  return artists;
});

type AllArtists = {
  id: number;
  artist_name: string | null;
  avatar: string | null;
  mp3: string;
};

// get all the artists
export const getAllArtists = cache(async () => {
  const allArtists = await sql<AllArtists[]>`
    SELECT
      *

    FROM
      artists

  `;
  return allArtists;
});

type SingleArtistsById = {
  id: number;
};

// get all the artists
export const getArtistsById = cache(async (artist_id: number) => {
  const [artistsById] = await sql<SingleArtistsById[]>`
    SELECT
      *

    FROM
    artist

    WHERE
    artist_id = ${artist_id}

  `;
  return artistsById;
});
