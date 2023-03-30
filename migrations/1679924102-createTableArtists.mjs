export async function up(sql) {
  await sql`
  CREATE TABLE  artists(
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  artist_name varchar(50) NOT NULL,
  avatar varchar(255) NOT NULL ,
  mp3 varchar(255) NOT NULL

)


  `;
}

export async function down(sql) {
  await sql`
  DROP TABLE artists
  `;
}
