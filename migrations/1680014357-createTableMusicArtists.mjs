export async function up(sql) {
  await sql`

  CREATE TABLE music_artists(
    id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    music_id integer REFERENCES music (id) ON DELETE CASCADE,
    artist_id integer REFERENCES artists (id)
  )`;
}

export async function down(sql) {
  await sql`
  DROP TABLE music_artists
  `;
}
