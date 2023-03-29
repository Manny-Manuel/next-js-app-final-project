const musicArtists = [
  {
    id: 1,
    music_id: 1,
    artist_id: 24,
  },

  {
    id: 2,
    music_id: 2,
    artist_id: 25,
  },

  {
    id: 3,
    music_id: 3,
    artist_id: 26,
  },

  {
    id: 4,
    music_id: 4,
    artist_id: 27,
  },

  {
    id: 5,
    music_id: 5,
    artist_id: 28,
  },

  {
    id: 6,
    music_id: 6,
    artist_id: 28,
  },

  {
    id: 7,
    music_id: 7,
    artist_id: 30,
  },

  {
    id: 8,
    music_id: 8,
    artist_id: 31,
  },

  {
    id: 9,
    music_id: 9,
    artist_id: 32,
  },

  {
    id: 10,
    music_id: 10,
    artist_id: 33,
  },

  {
    id: 11,
    music_id: 11,
    artist_id: 34,
  },

  {
    id: 12,
    music_id: 12,
    artist_id: 35,
  },

  {
    id: 13,
    music_id: 13,
    artist_id: 36,
  },

  {
    id: 14,
    music_id: 14,
    artist_id: 37,
  },

  {
    id: 15,
    music_id: 15,
    artist_id: 38,
  },

  {
    id: 16,
    music_id: 16,
    artist_id: 39,
  },

  {
    id: 17,
    music_id: 17,
    artist_id: 40,
  },

  {
    id: 18,
    music_id: 18,
    artist_id: 41,
  },

  {
    id: 19,
    music_id: 19,
    artist_id: 42,
  },

  {
    id: 20,
    music_id: 20,
    artist_id: 43,
  },

  {
    id: 21,
    music_id: 21,
    artist_id: 44,
  },

  {
    id: 22,
    music_id: 22,
    artist_id: 45,
  },

  {
    id: 23,
    music_id: 23,
    artist_id: 46,
  },
];

export async function up(sql) {
  await sql`
  INSERT INTO music_artists ${sql(musicArtists, 'music_id', 'artist_id')}
  `;
}

export async function down(sql) {
  for (const musicArtist of musicArtists) {
    await sql`
      DELETE FROM
      music_artists
      WHERE
        id = ${musicArtist.id}

`;
  }
}
