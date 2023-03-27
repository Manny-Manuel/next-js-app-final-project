export async function up(sql) {
  await sql`
  CREATE TABLE  music(
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  song_title varchar(60) NOT NULL,
  author varchar(50) NOT NULL,
  published_date varchar NOT NULL,
  genre varchar(50) NOT NULL

)`;
}

export async function down(sql) {
  await sql`
DROP TABLE  music
`;
}
