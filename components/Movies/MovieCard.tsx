import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { MovieType } from './types';

export default function MovieCard({ movie }: { movie: MovieType }) {
  return (
    <Link href={movie.url} target="_blank" rel="noopener noreferrer">
      <div className="group relative rounded-3xl p-3 shadow-md transition-[opacity,transform] duration-500 dark:bg-zinc-800 dark:text-gray-100">
        <div className="relative -mt-7 h-64 w-44 overflow-hidden rounded-2xl shadow-lg">
          <Image
            className="rounded-2xl object-cover transition-transform lg:group-hover:scale-105"
            src={movie.image}
            alt={movie.name}
            width={600}
            height={720}
            style={{
              height: '100%',
            }}
            loading="lazy"
          />
        </div>

        <div className="mt-2 mb-1 flex flex-col gap-2">
          <MovieWatchedStatus isWatched={movie.watched} rating={movie.rating} />
          <p className="-z-1 text-sm font-medium ">{movie.name}</p>
        </div>
      </div>
    </Link>
  );
}

/* This Component displays the current status of a movie, which includes whether it is watched or being watched. */
function MovieWatchedStatus({ isWatched, rating }: { isWatched: boolean; rating?: number }) {
  return (
    <div className="flex items-center justify-between text-xs">
      {isWatched ? (
        <>
          <p className="rounded-full bg-green-400/40 px-4 py-0.5 text-green-800 dark:text-green-300">
            Watched
          </p>
          <div className="flex items-center gap-1 font-medium">
            <AiFillStar className="h-4 w-4" />
            <p>{rating}/10</p>
          </div>
        </>
      ) : (
        <p className="relative animate-pulse rounded-full bg-yellow-300/70 px-4 py-0.5 text-yellow-700 dark:bg-yellow-300">
          Watching
        </p>
      )}
    </div>
  );
}
