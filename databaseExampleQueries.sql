/* This is an example Query Schema to design out Database and then push to Postresql  */


--CREATING TABLE

CREATE TABLE  artist(
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  artist_name varchar(50) NOT NULL,
  song_name varchar(50) NOT NULL,
  avatar  bytea,
  mp3 varchar(255) NOT NULL,

);

--INSERTING COLLECTION

INSERT INTO artist
(artist_name, song_name, avatar, mp3)
VALUES
('Justin Quiles', 'PAM', 'Justin_Quiles01-225x225.jpeg',  'Justin Quiles - PAM.mp3'),

('Justin Quiles', 'Orgullo', 'Justin_Quiles02-225x225.jpeg',  'Justin Quiles - Orgullo.mp3'),

('Justin Quiles', 'Esta Noche', 'Justin_Quiles02-225x225.jpeg', 'Justin Quiles - Esta Noche.mp3'),

('Justin Quiles', 'Si Ella Quisiera', 'Justin_Quiles01-225x225.jpeg', 'Justin Quiles - Si Ella Quisiera.mp3'),

('Justin Quiles', 'Cladiadora', 'Justin_Quiles02-225x225.jpeg',  'Justin Quiles - Cladiadora.mp3' ),

('Romeo Santos', 'La Diabla', 'Romeo_Santos02-225x225.jpeg',  'Romeo Santos - La Diabla.mp3' ),

('Romeo Santos', 'Llevame Contigo', 'Romeo_Santos03-225x225.jpeg',  'Romeo Santos - Llévame Contigo.mp3' ),

('Romeo Santos', 'Propuesta Indecente', 'Romeo_Santos01-225x225.jpeg', 'Romeo Santos - Propuesta Indecente.mp3'),

('Pop Smoke ft Lil Baby', 'For The Night', 'Pop_Smoke-225x225.jpeg',  'Pop Smoke - For The Night ft. Lil Baby, DaBaby .mp3'),

('50 Cent ft.Olivia', 'Candy Shop', '50Cent_225x225.jpeg', '50 Cent ft. Olivia Candy Shop.mp3'),

('Akon', 'Dont Matter', 'Akon-225x225.jpeg',  'Akon - Dont Matter.mp3' ),

('Busta Rhymes, Mariah Carey ft. Flipmode Squad', 'Busta_rhyme_Mariah_Carey-225x225.jpeg', 'I Know What You Want',  'Busta Rhymes, Mariah Carey ft. Flipmode Squad.mp3' ),

('Future ft. Drake ', 'Life Is Good', 'Future ft Drake-225x225.jpeg',  'Future - Life Is Good ft. Drake' )

('Jerry Rivera', 'Que Hay De Malo', 'Jerry_Rivera01-225x225.jpeg',  'Jerry Rivera - Amores Como el Nuestro.mp3' ),

('Jerry Rivera', 'Cuenta Conmigo', 'Jerry_Rivera02-225x225.jpeg', 'Jerry Rivera - Cuenta Conmigo.mp3' ),

('Jerry Rivera', 'Que Hay De Malo',  'Jerry_Rivera01-225x225.jpeg', 'Jerry Rivera - Que Hay De Malo.mp3' ),

('Marc Anthony', 'Contra La Corriente', 'Marc_Anthony01-225 × 225..jpeg', 'Marc Anthony - Contra La Corriente.mp3' ),

('Marc Anthony', 'Flor Pálida', 'Marc_Anthony02-225 × 225.jpeg',  'Marc Anthony - Flor Pálida.mp3' ),

('Marc Anthony', 'Hasta Que Te Conoci', 'Marc_Antony03-225 × 225.jpeg',  'Marc Anthony - Hasta Que Te Conoci.mp3' ),

('Marc Anthony', 'Qué Precio Tiene el Cielo', 'Marc_Anthony02-225 × 225.jpeg',  'Marc Anthony - Qué Precio Tiene el Cielo.mp3' ),

('Marc Anthony', 'Te Amare', 'Marc_Antony03-225 × 225.jpeg',  'Marc Anthony - Te Amare.mp3' )

('Marc Anthony', 'Valió la Pena', 'Marc_Anthony01-225 × 225.jpeg',  'Marc Anthony - Valió la Pena.mp3' ),



INSERT INTO music_artists
(music_id, artist_id)
VALUES

 (  1,
    1,
    1),


  ( 2,
    2,
    2),

  ( 3,
    3,
    3),

  ( 4,
    4,
    4),

  ( 5,
    5,
    5),

  ( 6,
    6,
    6),

  ( 7,
    7,
    7),

  ( 8,
    8,
    8),

  ( 9,
    9,
    9),

  ( 10,
    10,
    10),

  ( 11,
    11,
    11),

  ( 12,
    12,
    12),

  ( 13,
    13,
    13),

  ( 14,
    14,
    14),

  ( 15,
    15,
    15),

  ( 16,
    16,
    16),
,

  ( 17,
    17,
    17),

  ( 18,
    18,
    18),

  ( 19,
    19,
    19),

  ( 20,
    20,
    20),

  ( 21,
    21,
    21),

  ( 22,
    22,
    22),

  ( 23,
    23,
    23);
