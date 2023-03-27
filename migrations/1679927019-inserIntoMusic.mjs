const music = [
  {
    id: 1,
    song_title: 'PAM',
    author: 'Tony Peralta',
    published_date: '2019.12.16',
    genre: 'Reguetoon',
  },

  {
    id: 2,
    song_title: 'Orgullo',
    author: 'Justin Quiles',
    published_date: '2019.12.12',
    genre: 'Reguetoon',
  },

  {
    id: 3,
    song_title: 'Esta Noche',
    author: 'Jhon Mathias ',
    published_date: '2019.16.12',
    genre: ' Reguetoon',
  },

  {
    id: 4,
    song_title: 'Si Ella Quisiera',
    author: 'Jhon Mathias',
    published_date: '2019.16.12',
    genre: 'Reguetoon',
  },

  {
    id: 5,
    song_title: 'Cladiadora',
    author: 'Justin Quiles',
    published_date: '2019.16.12',
    genre: 'Reguetoon',
  },

  {
    id: 6,
    song_title: 'Eres Mia',
    author: 'Romeo Santos',
    published_date: '2014.20.01',
    genre: 'Bachata',
  },

  {
    id: 7,
    song_title: 'La Diabla',
    author: 'Anthon Herrera',
    published_date: '2014.20.01',
    genre: 'Bachata',
  },

  {
    id: 8,
    song_title: 'Llevame Contigo',
    author: 'David Cada',
    published_date: '2014.20.01',
    genre: 'Bachata',
  },

  {
    id: 9,
    song_title: 'Propuesta Indecente',
    author: 'Christian Casa',
    published_date: '2014.20.01',
    genre: 'Bachata',
  },

  {
    id: 10,
    song_title: 'For The Night',
    author: 'Dawizzy',
    published_date: '2023.30.12',
    genre: 'Hip Hop',
  },

  {
    id: 11,
    song_title: 'Candy Shop',
    author: 'Jhonty Smith',
    published_date: '2015.3.03',
    genre: 'Hip Hop',
  },

  {
    id: 12,
    song_title: 'Dont Matter',
    author: 'Will Insbruck',
    published_date: '2010.14.05',
    genre: 'Hip Hop',
  },

  {
    id: 13,
    song_title: 'I Know What You Want',
    author: 'Daiton Wizzle',
    published_date: '2014.14.05',
    genre: 'Hip Hop',
  },

  {
    id: 14,
    song_title: 'Life Is Good',
    author: 'Onthy paul',
    published_date: '2022.12.05',
    genre: 'Hip Hop',
  },

  {
    id: 15,
    song_title: 'Que Hay De Malo',
    author: 'Omar Zendero',
    published_date: '1997.03.4',
    genre: 'Salsa',
  },

  {
    id: 16,
    song_title: 'Cuenta Conmigo',
    author: 'Omar Zendero',
    published_date: '1997.02.02',
    genre: ' Salsa ',
  },

  {
    id: 17,
    song_title: 'Que Hay De Malo',
    author: 'Omar Zendero',
    published_date: '01.10.1997',
    genre: 'Salsa',
  },

  {
    id: 18,
    song_title: 'Contra La Corriente',
    author: 'Anthon Herrera',
    published_date: '2000.30.01',
    genre: 'Salsa',
  },

  {
    id: 19,
    song_title: 'Flor Pálida',
    author: 'David Castero',
    published_date: '2020.02.11.',
    genre: 'Salsa',
  },

  {
    id: 20,
    song_title: 'Hasta Que Te Conoci',
    author: 'Hernesto Paulino',
    published_date: '2010.01.06.',
    genre: 'Salsa',
  },

  {
    id: 21,
    song_title: 'Qué Precio Tiene el Cielo',
    author: 'jhonny Bautista',
    published_date: '2013.13.12',
    genre: 'Salsa',
  },

  {
    id: 22,
    song_title: 'Te Amare',
    author: 'kynsy Sababda',
    published_date: '2000.02.05',
    genre: 'Salsa',
  },

  {
    id: 23,
    song_title: 'Valió la Pena',
    author: 'Ayala Hernandez',
    published_date: '2017.03.04.',
    genre: 'Salsa',
  },
];

export async function up(sql) {
  await sql`
  INSERT INTO music ${sql(
    music,
    'song_title',
    'author',
    'published_date',
    'genre',
  )}
  `;
}

export async function down(sql) {
  for (const musica of music) {
    await sql`
      DELETE FROM
      music
      WHERE
        id = ${musica.id}

`;
  }
}
