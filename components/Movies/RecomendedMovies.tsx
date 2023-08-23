import React from 'react';
import MovieCard from './MovieCard';
import { movies } from './constant';

function RecomendedMovies() {
  return (
    <>
      <div className="movieScroll mx-auto max-w-3xl px-4 sm:px-9 xl:max-w-5xl xl:px-0">
        <div className="mt-10">
          <h1 className="mb-10 text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
            Recent watched <span className="text-[#B00710] dark:text-[#E50914]">Movies </span>&
            <span className="text-[#0086B4] dark:text-[#00A8E1]"> TV </span>
            Series
          </h1>
          <div className="horizontal-scrollbar flex items-center gap-2 overflow-x-scroll py-5 md:gap-4">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default RecomendedMovies;
