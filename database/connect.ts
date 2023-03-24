import { config } from 'dotenv-safe';
import postgres from 'postgres';

config();
export const sql = postgres();

/*
export default const artist = [

  {id: 1, artistName: "Justin Quiles", songName: "PAM", Avatar:"Justin_Quiles01-225x225.jpeg"  mp3: "Justin Quiles - PAM.mp3"},

  {id: 2, artistName: "Justin Quiles", songName: "Orgullo", Avatar:"Justin_Quiles02-225x225.jpeg" , mp3: "Justin Quiles - Orgullo.mp3" },

  {id: 3, artistName: "Justin Quiles", songName: "Esta Noche", Avatar:"Justin_Quiles02-225x225.jpeg" , mp3: "Justin Quiles - Esta Noche.mp3" },

  {id: 4, artistName: "Justin Quiles", songName: "Si Ella Quisiera, Avatar:"Justin_Quiles01-225x225.jpeg" , mp3: "Justin Quiles - Si Ella Quisiera.mp3" },

  {id: 5, artistName: "Justin Quiles", songName: "Cladiadora", Avatar:"Justin_Quiles02-225x225.jpeg" , mp3: "Justin Quiles - Cladiadora.mp3" },

  {id: 6, artistName: "Romeo Santos", songName: "Eres Mia ", Avatar:"Romeo_Santos01-225x225.jpeg" , mp3: "Romeo Santos - Eres Mía.mp3"},

  {id: 7, artistName: "Romeo Santos", songName: "La Diabla", Avatar:"Romeo_Santos02-225x225.jpeg" , mp3:"Romeo Santos - La Diabla.mp3" },

  {id: 8, artistName: "Romeo Santos", songName: "Llevame Contigo", Avatar:"Romeo_Santos03-225x225.jpeg" , mp3:"Romeo Santos - Llévame Contigo.mp3" },

  {id: 9, artistName: "Romeo Santos", songName: "Propuesta Indecente", Avatar:"Romeo_Santos01-225x225.jpeg" , mp3:"Romeo Santos - Propuesta Indecente.mp3" },

  {id: 10,artistName: "Pop Smoke ft Lil Baby", Avatar: "Pop_Smoke-225x225.jpeg", songName: "For The Night", mp3: "Pop Smoke - For The Night ft. Lil Baby, DaBaby .mp3" },

  {id: 11, artistName: "50 Cent ft.Olivia", songName: "Candy Shop", Avatar: "50Cent_225x225.jpeg", mp3: "50 Cent ft. Olivia Candy Shop.mp3"},

  {id: 12, artistName: "Akon", songName: "Don't Matter", Avatar: "Akon-225x225.jpeg" , mp3: "Akon - Don't Matter.mp3" },

  {id: 13, artistName: "Busta Rhymes, Mariah Carey ft. Flipmode Squad", avatar: "Busta_rhyme_Mariah_Carey-225x225.jpeg", songName: "I Know What You Want", mp3: "Busta Rhymes, Mariah Carey ft. Flipmode Squad.mp3" },

  {id: 14, artistName: "Future ft. Drake ", songName: "Life Is Good", Avatar: "Future ft Drake-225x225.jpeg", mp3: "Future - Life Is Good ft. Drake" },

  {id: 15, artistName: "Jerry Rivera", songName: "Amores Como el Nuestro", Avatar: "Jerry_Rivera01-225x225.jpeg", mp3: "Jerry Rivera - Amores Como el Nuestro.mp3" },

  {id: 16, artistName: "Jerry Rivera", songName: "Cuenta Conmigo", Avatar: "Jerry_Rivera02-225x225.jpeg", mp3: "Jerry Rivera - Cuenta Conmigo.mp3"},

  {id: 17, artistName: "Jerry Rivera", songName: "Que Hay De Malo", Avatar: "Jerry_Rivera01-225x225.jpeg", mp3:"Jerry Rivera - Que Hay De Malo.mp3" },

  {id: 18, artistName: "Marc Anthony ", songName: "Contra La Corriente", Avatar: "Marc_Anthony01-225 × 225..jpeg", mp3:"Marc Anthony - Contra La Corriente.mp3" },

  {id: 19, artistName:"Marc Anthony", songName:"Flor Pálida", Avatar:"Marc_Anthony02-225 × 225.jpeg", mp3:"Marc Anthony - Flor Pálida.mp3"},

  {id: 20,artistName: "", songName: "", Avatar: "Marc_Antony03-225 × 225.jpeg", mp3:"Marc Anthony - Hasta Que Te Conoci.mp3" },

  {id: 21, artistName: "Marc Anthony", songName: "Qué Precio Tiene el Cielo", Avatar: "Marc_Anthony02-225 × 225.jpeg", mp3: "Marc Anthony - Qué Precio Tiene el Cielo.mp3" },

  {id: 22, artistName: "Marc Anthony ", songName: "Te Amare", Avatar: "Marc_Antony03-225 × 225.jpeg", mp3: "Marc Anthony - Te Amare.mp3"},

  {id: 23, artistName: "Marc Anthony", songName: "Valió la Pena", Avatar: "Marc_Anthony01-225 × 225.jpeg", mp3:"Marc Anthony - Valió la Pena.mp3" },


]

*/
