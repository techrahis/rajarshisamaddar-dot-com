import Image from 'next/image';
import Link from 'next/dist/client/link';
import { Song } from './types';

interface TrackProps {
  ranking: number;
  track: Song;
}

export default function Track({ track, ranking }: TrackProps) {
  return (
    <Link href={track.songUrl ? track.songUrl : '/'} target="_blank">
      <div className="flex w-full max-w-5xl flex-row border border-gray-200 p-4 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-800">
        <div className="flex flex-col items-center">
          <div className="h-10">
            <p className="text-md w-8 font-bold text-gray-500 dark:text-gray-600">#{ranking}</p>
          </div>
        </div>

        <div className="flex flex-col items-baseline pl-3">
          {track.albumArt ? (
            <div className="h-10 w-10">
              <Image
                src={track.albumArt}
                width={50}
                height={50}
                alt={track.title}
                quality={50}
              ></Image>
            </div>
          ) : (
            <div className="h-10 w-10 animate-pulse bg-white"></div>
          )}
        </div>

        <div className="flex flex-col items-baseline pl-3">
          {track.title ? (
            <p
              className="w-60 truncate font-semibold text-gray-900 dark:text-gray-100 sm:w-96 md:w-full"
              rel="noopener noreferrer"
            >
              {track.title}
            </p>
          ) : (
            <div className="h-4 w-40 animate-pulse bg-white text-white dark:text-black">_</div>
          )}

          {track.artist ? (
            <p className="w-60 truncate text-gray-500 dark:text-gray-400 sm:w-96 md:w-full">
              {track.artist}
            </p>
          ) : (
            <div className="mt-2 h-4 w-20 animate-pulse bg-white"></div>
          )}
        </div>
      </div>
    </Link>
  );
}
