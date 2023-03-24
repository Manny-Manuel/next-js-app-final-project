'use client';

import { useEffect, useState } from 'react';

export default function AlbumPage() {
  const [isOnlineMusic, setIsOnlineMusic] = useState();
  const [isloading, setIsloading] = useState(false);

  useEffect(() => {
    setIsloading(true);
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'X-RapidAPI-Key': '1da2eb720bmsh264d6ba6daa5496p1bc82ajsncfe4e0a873fb',
        'X-RapidAPI-Host': 'musicapi13.p.rapidapi.com',
      },
    };

    async function getMusicPlatform() {
      await fetch(
        'https://musicapi13.p.rapidapi.com/search/introspection.sources.json',
        options,
      );
    }
    getMusicPlatform.then((response) => response.json());

    getMusicPlatform
      .catch((error) => {
        console.log(error);
      })

      .then((dataResources) => {
        const convertMusicData = [];
        for (const keys in dataResources) {
          convertMusicData.push({
            id: keys,
            propertySource1: dataResources[keys].key1,
            propertySource2: dataResources[keys].key2,
          });
        }

        setIsOnlineMusic(convertMusicData);
        setIsloading(false);
      });
  }, []);

  if (isloading) {
    return <p> Is loading... </p>;
  }

  return (
    <div>
      {isOnlineMusic.map((isOnlineMusicSource) => (
        <div key={`MusicSources ${isOnlineMusicSource.keys}`}>
          {isOnlineMusicSource.key1}-${isOnlineMusicSource.key2}
        </div>
      ))}
    </div>
  );
}
