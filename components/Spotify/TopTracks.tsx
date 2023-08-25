'use client';
import Track from './Track';
import fetcher from '../../lib/fetcher';
import useSWR from 'swr';

export default function TopTracks() {
  const { data: topTracks } = useSWR(
    'https://api.rajarshisamaddar.com/spotify/top-tracks',
    fetcher,
    {
      refreshInterval: 30000,
    }
  );

  if (!topTracks) {
    return (
      <div className="pt-10">
        <h1 className="mb-2 text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
          My <span className="text-green-700 dark:text-green-500">Spotify</span> Top Streamed Songs
        </h1>
        <p className="mb-10 font-medium">
          <span className="font-semibold">Loading from the fastest API please wait...</span>
        </p>
      </div>
    );
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
      {topTracks.map((track: any, index: any) => (
        <Track ranking={index + 1} key={track.songUrl} track={track} />
      ))}
    </div>
  );
}
