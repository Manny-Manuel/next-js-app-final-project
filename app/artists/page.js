import Image from 'next/image';
import Link from 'next/link';
import {
  getAllArtists,
  getArtist,
  getArtistsById,
} from '../../database/artists';

export default async function ArtistPage() {
  const allArtists = await getAllArtists();

  return (
    <main>
      <h1>AlL Starts</h1>
      <div>
        {allArtists.map((artists) => {
          return (
            <div key={`artists-${artists.id}`}>
              <h2>{artists.artist_name}</h2>

              <Image
                src={`/avatar-${artists.avatar}`}
                alt="Picture of the author"
                width="255"
                height="255"
              />
            </div>
          );
        })}
      </div>
    </main>
  );
}
