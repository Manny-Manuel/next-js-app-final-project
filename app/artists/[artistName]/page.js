import Image from 'next/image';
import Link from 'next/link';
import {
  getAllArtists,
  getArtistsById,
  getSingleArtist,
} from '../../../database/artists';

export default async function singleArtistPage(props) {
  const singleArtist = await getSingleArtist();
  singleArtist.find((onlySingleArtist) => {
    return (
      onlySingleArtist.artist_name.tolowerCase() === props.params.artist_name
    );
  });

  return (
    <>
      <h1>{singleArtist.artist_name}</h1>
      <main>
        <Image
          src={`/images/${singleArtist.avatar}-${singleArtist.artist.id}`}
          alt={singleArtist.artist_name}
          width="255"
          height="255"
        />
        Check this out {singleArtist.mp3}
      </main>
    </>
  );
}
