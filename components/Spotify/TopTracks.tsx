import { getTopTracks } from '@/lib/spotify';
import Track from './Track';
import { ITracksAPIResponse, ISpotifyArtist } from './types';

async function fetchTopTracks(): Promise<ITracksAPIResponse[] | null> {
  try {
    const items = await getTopTracks();

    const tracks = items.map((track) => ({
      title: track.name,
      artist: track.artists.map((artist: ISpotifyArtist) => artist.name).join(', '),
      songUrl: track.external_urls.spotify,
      albumArt: track.album.images[0].url,
    }));

    // @ts-ignore ⚠️
    return tracks;
  } catch (e) {
    if (e instanceof Error) {
      console.error(e.message);
    }
  }
  return null;
}

export default async function TopTracks() {
  const topTracks = await fetchTopTracks();

  if (!topTracks) {
    return null;
  }

  return (
    <div className="pt-10">
      <h1 className="mb-2 text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
        My <span className="text-green-700 dark:text-green-500">Spotify</span> Top Streamed Songs
      </h1>
      <p className="mb-10 font-medium">
        <span className="font-semibold">{topTracks[0].title}</span> is the most streamed song of
        mine in last 4 weeks. Here's my top tracks on Spotify updated daily.
      </p>
      {topTracks.map((track, index) => (
        <Track ranking={index + 1} key={track.songUrl} track={track} />
      ))}
    </div>
  );
}
