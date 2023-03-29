export const artists = [
  {
    id: 1,
    artist_name: 'Justin Quiles',
    avatar: 'Justin_Quiles01-225x225.jpeg',
    mp3: 'Justin Quiles - PAM.mp3',
  },

  {
    id: 2,
    artist_name: 'Justin Quiles',
    avatar: 'Justin_Quiles02-225x225.jpeg',
    mp3: 'Justin Quiles - Orgullo.mp3',
  },

  {
    id: 3,
    artist_name: 'Justin Quiles',
    avatar: 'Justin_Quiles02-225x225.jpeg',
    mp3: 'Justin Quiles - Esta Noche.mp3',
  },

  {
    id: 4,
    artist_name: 'Justin Quiles',
    avatar: 'Justin_Quiles01-225x225.jpeg',
    mp3: 'Justin Quiles - Si Ella Quisiera.mp3',
  },

  {
    id: 5,
    artist_name: 'Justin Quiles',
    avatar: 'Justin_Quiles02-225x225.jpeg',
    mp3: 'Justin Quiles - Cladiadora.mp3',
  },

  {
    id: 6,
    artist_name: 'Romeo Santos',
    avatar: 'Romeo_Santos01-225x225.jpeg',
    mp3: 'Romeo Santos - Eres Mía.mp3',
  },

  {
    id: 7,
    artist_name: 'Romeo Santos',
    avatar: 'Romeo_Santos02-225x225.jpeg',
    mp3: 'Romeo Santos - La Diabla.mp3',
  },

  {
    id: 8,
    artist_name: 'Romeo Santos',
    avatar: 'Romeo_Santos03-225x225.jpeg',
    mp3: 'Romeo Santos - Llévame Contigo.mp3',
  },

  {
    id: 9,
    artist_name: 'Romeo Santos',
    avatar: 'Romeo_Santos01-225x225.jpeg',
    mp3: 'Romeo Santos - Propuesta Indecente.mp3',
  },

  {
    id: 10,
    artist_name: 'Pop Smoke ft Lil Baby',
    avatar: 'Pop_Smoke-225x225.jpeg',
    mp3: 'Pop Smoke - For The Night ft. Lil Baby, DaBaby .mp3',
  },

  {
    id: 11,
    artist_name: '50 Cent ft.Olivia',
    avatar: '50Cent_225x225.jpeg',
    mp3: '50 Cent ft. Olivia Candy Shop.mp3',
  },

  {
    id: 12,
    artist_name: 'Akon',
    avatar: 'Akon-225x225.jpeg',
    mp3: "Akon - Don't Matter.mp3",
  },

  {
    id: 13,
    artist_name: 'Busta Rhymes, Mariah Carey ft. Flipmode Squad',
    avatar: 'Busta_rhyme_Mariah_Carey-225x225.jpeg',
    mp3: 'Busta Rhymes, Mariah Carey ft. Flipmode Squad.mp3',
  },

  {
    id: 14,
    artist_name: 'Future ft. Drake ',
    avatar: 'Future ft Drake-225x225.jpeg',
    mp3: 'Future - Life Is Good ft. Drake',
  },

  {
    id: 15,
    artist_name: 'Jerry Rivera',
    avatar: 'Jerry_Rivera01-225x225.jpeg',
    mp3: 'Jerry Rivera - Amores Como el Nuestro.mp3',
  },

  {
    id: 16,
    artist_name: 'Jerry Rivera',
    avatar: 'Jerry_Rivera02-225x225.jpeg',
    mp3: 'Jerry Rivera - Cuenta Conmigo.mp3',
  },

  {
    id: 17,
    artist_name: 'Jerry Rivera',
    avatar: 'Jerry_Rivera01-225x225.jpeg',
    mp3: 'Jerry Rivera - Que Hay De Malo.mp3',
  },

  {
    id: 18,
    artist_name: 'Marc Anthony ',
    avatar: 'Marc_Anthony01-225 × 225..jpeg',
    mp3: 'Marc Anthony - Contra La Corriente.mp3',
  },

  {
    id: 19,
    artist_name: 'Marc Anthony',
    avatar: 'Marc_Anthony02-225 × 225.jpeg',
    mp3: 'Marc Anthony - Flor Pálida.mp3',
  },

  {
    id: 20,
    artist_name: 'Marc_Antony',
    avatar: 'Marc_Antony03-225 × 225.jpeg',
    mp3: 'Marc Anthony - Hasta Que Te Conoci.mp3',
  },

  {
    id: 21,
    artist_name: 'Marc Anthony',
    avatar: 'Marc_Anthony02-225 × 225.jpeg',
    mp3: 'Marc Anthony - Qué Precio Tiene el Cielo.mp3',
  },

  {
    id: 22,
    artist_name: 'Marc Anthony ',
    avatar: 'Marc_Antony03-225 × 225.jpeg',
    mp3: 'Marc Anthony - Te Amare.mp3',
  },

  {
    id: 23,
    artist_name: 'Marc Anthony',
    avatar: 'Marc_Anthony01.jpeg',
    mp3: 'Marc Anthony - Valió la Pena.mp3',
  },
];

export async function up(sql) {
  await sql`
  INSERT INTO artists ${sql(artists, 'artist_name', 'avatar', 'mp3')}
  `;
}

export async function down(sql) {
  for (const artist of artists) {
    await sql`
      DELETE FROM
      artists
      WHERE
        id = ${artist.id}

`;
  }
}
