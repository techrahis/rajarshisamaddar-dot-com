'use client';

import Pagination from '@/components/Pagination';
import PostCard from '@/components/PostCard';
import { CoreContent } from '@/lib/utils/contentlayer';
import type { Blog } from 'contentlayer/generated';
import { ComponentProps, useState, useRef, useEffect } from 'react';

interface Props {
  posts: CoreContent<Blog>[];
  title: string;
  initialDisplayPosts?: CoreContent<Blog>[];
  pagination?: ComponentProps<typeof Pagination>;
}

export default function ListLayout({ posts, title, initialDisplayPosts = [], pagination }: Props) {
  const [searchValue, setSearchValue] = useState('');
  const searchRef = useRef<HTMLInputElement>(null!);
  const filteredBlogPosts = posts.filter((post) => {
    const searchContent = post.title + post.summary + post.tags?.join(' ');
    return searchContent.toLowerCase().includes(searchValue.toLowerCase());
  });

  // If initialDisplayPosts exist, display it if no searchValue is specified.
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts;

  /**
   * Handles automatic search functionality when a specific keyboard shortcut is pressed.
   */
  function handleAutoSearch(e: any) {
    if (e.key === '/' && e.ctrlKey) {
      searchRef.current.focus();
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleAutoSearch);
    return () => document.removeEventListener('keydown', handleAutoSearch);
  }, []);

  return (
    <>
      <div className="space-y-2 rounded-lg pt-8 pb-3 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          {title}
        </h1>
        <p className="text-lg font-medium">
          I have been writing online since 2022, mostly about Web Development and IT. You can also
          find my code snippets to speed up your work flow.
        </p>
        <div className="relative max-w-full pb-4">
          <input
            ref={searchRef}
            aria-label="Search posts"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Press (CTRL + /) to search posts"
            className="block w-full rounded-md border-0 bg-gray-200 bg-opacity-50 px-4 py-3 text-gray-900 placeholder:font-medium focus:border-sky-500 focus:ring-sky-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
          />
          <svg
            className="absolute right-3 top-3 h-6 w-6 text-gray-400 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <PostCard posts={displayPosts} />
      </div>
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  );
}
