import Link from 'next/link';
import { SiSpotify } from 'react-icons/si';
import Image from 'next/image';
import { Artist, NowPlayingSong } from './types';
import { getNowPlaying } from '@/lib/spotify';

async function fetchNowPlaying(): Promise<NowPlayingSong | null> {
  try {
    const response = await getNowPlaying();

    if (response.status === 204 || response.status > 400) {
      return null;
    }

    const song = await response.json();
    const isPlaying = song.is_playing;
    const title = song.item.name;
    const artist = song.item.artists.map((artist: Artist) => artist.name).join(', ');
    const album = song.item.album.name;
    const albumImageUrl = song.item.album.images[0].url;
    const songUrl = song.item.external_urls.spotify;

    return {
      album,
      albumImageUrl,
      artist,
      isPlaying,
      songUrl,
      title,
    };
  } catch (e) {
    if (e instanceof Error) {
      console.error(e.message);
    }
  }

  return null;
}

export default async function NowPlaying() {
  const nowPlaying = await fetchNowPlaying();

  if (!nowPlaying?.isPlaying) {
    return (
      <div className="flex flex-row-reverse items-center justify-between gap-2 sm:flex-row sm:justify-start">
        <SiSpotify className="h-6 w-6" />
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
          <div className="font-semibold md:text-lg">Not Playing</div>
          <span className="hidden md:inline-flex">—</span>
          <p className="text-xs sm:text-sm">Spotify</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <h4 className="text-lg font-semibold dark:text-gray-300">Now Playing</h4>
      <Link
        href={nowPlaying.songUrl}
        className="flex items-center justify-between rounded-sm border border-gray-200 p-3 shadow-lg dark:border-gray-800 dark:bg-zinc-800 sm:p-4"
      >
        <div className="flex items-center gap-2 ">
          <div className="h-10 w-10">
            <Image
              alt={nowPlaying.title}
              src={nowPlaying.albumImageUrl}
              width={40}
              height={40}
              quality={50}
              placeholder="blur"
              blurDataURL={nowPlaying.albumImageUrl}
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
            <h3 className="animate- font-semibold text-black dark:text-white md:text-lg">
              {nowPlaying.title}
            </h3>
            <span className="hidden dark:text-gray-300 md:inline-flex">—</span>

            <p className="text-xs text-gray-600 dark:text-gray-400 sm:text-sm">
              {nowPlaying.artist}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <SiSpotify className="h-6 w-6 animate-[spin_2s_linear_infinite] text-green-700 dark:text-green-500" />
        </div>
      </Link>
    </div>
  );
}
