const musicArtists = [
  {
    id: 1,
    music_id: 1,
    artist_id: 1,
  },

  {
    id: 2,
    music_id: 2,
    artist_id: 2,
  },

  {
    id: 3,
    music_id: 3,
    artist_id: 3,
  },

  {
    id: 4,
    music_id: 4,
    artist_id: 4,
  },

  {
    id: 5,
    music_id: 5,
    artist_id: 5,
  },

  {
    id: 6,
    music_id: 6,
    artist_id: 6,
  },

  {
    id: 7,
    music_id: 7,
    artist_id: 7,
  },

  {
    id: 8,
    music_id: 8,
    artist_id: 8,
  },

  {
    id: 9,
    music_id: 9,
    artist_id: 9,
  },

  {
    id: 10,
    music_id: 10,
    artist_id: 10,
  },

  {
    id: 11,
    music_id: 11,
    artist_id: 11,
  },

  {
    id: 12,
    music_id: 12,
    artist_id: 12,
  },

  {
    id: 13,
    music_id: 13,
    artist_id: 13,
  },

  {
    id: 14,
    music_id: 14,
    artist_id: 14,
  },

  {
    id: 15,
    music_id: 15,
    artist_id: 15,
  },

  {
    id: 16,
    music_id: 16,
    artist_id: 16,
  },

  {
    id: 17,
    music_id: 17,
    artist_id: 17,
  },

  {
    id: 18,
    music_id: 18,
    artist_id: 18,
  },

  {
    id: 19,
    music_id: 19,
    artist_id: 19,
  },

  {
    id: 20,
    music_id: 20,
    artist_id: 20,
  },

  {
    id: 21,
    music_id: 21,
    artist_id: 21,
  },

  {
    id: 22,
    music_id: 22,
    artist_id: 22,
  },

  {
    id: 23,
    music_id: 23,
    artist_id: 23,
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
