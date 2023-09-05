'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { MovieType } from './types';
import { motion } from 'framer-motion';
import { fromLeftChildren } from '@/components/FramerMotion/FramerMotionVariants';

export default function MovieCard({ movie }: { movie: MovieType }) {
  return (
    <Link href={movie.url} target="_blank" rel="noopener noreferrer">
      <motion.div
        variants={fromLeftChildren}
        className="group relative rounded-3xl bg-gray-200 bg-opacity-50 p-3 transition-[opacity,transform] duration-500 dark:bg-gray-800 dark:text-gray-100"
      >
        {movie.image ? (
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
              quality={25}
            />
          </div>
        ) : (
          <div className="relative -mt-7 h-64 w-44 animate-pulse overflow-hidden rounded-2xl bg-gray-200 bg-opacity-50 shadow-lg dark:bg-gray-800"></div>
        )}

        <div className="mt-2 mb-1 flex flex-col gap-2">
          {movie.name ? (
            <MovieWatchedStatus isWatched={movie.status} rating={movie.rating} />
          ) : (
            <div className="flex items-center justify-between text-xs">
              <p className="relative h-3 w-12 animate-pulse rounded-full bg-yellow-300/70 px-4 py-0.5 text-yellow-700 dark:bg-yellow-300"></p>
            </div>
          )}
          {movie.name ? (
            <p className="-z-1 text-sm font-medium ">{movie.name}</p>
          ) : (
            <p className="-z-1 h-2 w-16 animate-pulse bg-slate-200 dark:bg-slate-400"></p>
          )}
        </div>
      </motion.div>
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
