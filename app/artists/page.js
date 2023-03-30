import Image from 'next/image';
import Link from 'next/link';
import {
  getAllArtists,
  getArtist,
  getArtistsById,
} from '../../database/artists';

export default async function ArtistPage() {
  const allArtists = await getAllArtists();
  console.log(allArtists);
  return (
    <div className="container">
      <thead>
        <tr>
          <th> List of all Artists </th>
        </tr>
      </thead>
      <table>
        <tbody>
          <tr>
            {allArtists.map((artists) => {
              return (
                <td key={`artists${artists.id}`}>
                  {artists.artist_name}
                  <Image
                    src={`/${artists.avatar}`}
                    alt="Picture of the author"
                    width="500"
                    height="500"
                  />
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
