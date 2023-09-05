'use client';

import Tag from '@/components/Tag';
import { CoreContent } from '@/lib/utils/contentlayer';
import type { Blog } from 'contentlayer/generated';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BlogCardAnimation } from '@/components/FramerMotion/FramerMotionVariants';

export interface PostCardProps {
  posts: CoreContent<Blog>[];
  showTags?: boolean;
}

export default function PostCard({ posts, showTags = true }: PostCardProps) {
  return (
    <ul>
      {posts.map(({ slug, title, tags, summary }) => (
        <motion.li
          key={slug}
          className="py-0"
          variants={BlogCardAnimation}
          initial={'hidden'}
          whileInView={'visible'}
          viewport={{ once: true }}
        >
          <Link href={`/blog/${slug}`} aria-label={`Read "${title}"`} legacyBehavior>
            <article className="mt-6 cursor-pointer gap-3 space-y-2 bg-opacity-20 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
              <div className="space-y-3 xl:col-span-4">
                <span className="text-2xl font-bold leading-8 tracking-tight">
                  <Link href={`/blog/${slug}`}>
                    <span className="text-primary-500 duration-300 hover:text-primary-400">
                      {title}
                    </span>
                  </Link>
                </span>
                {showTags && tags && (
                  <div className="flex flex-wrap gap-3">
                    {tags.map((tag) => (
                      <Tag key={tag} text={tag} />
                    ))}
                  </div>
                )}
                <div className="prose max-w-none text-gray-900 dark:text-gray-100">{summary}</div>
              </div>
            </article>
          </Link>
        </motion.li>
      ))}
    </ul>
  );
}
