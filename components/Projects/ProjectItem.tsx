import OgImage from './OgImage';
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';
import { MdOutlineLink } from 'react-icons/md';

export default function ProjectItem({ title, url, image }: any) {
  return (
    <>
      <div className="mt-[30%] flex max-w-2xl flex-col items-center gap-8 rounded-lg bg-zinc-50 p-5 shadow-md transition-all dark:bg-zinc-800 sm:mt-8 sm:flex-row sm:p-10">
        <OgImage src={image} alt={title} />

        <div className="flex flex-col justify-start gap-3">
          <h1 className="font-bold text-neutral-900 dark:text-neutral-200">{title}</h1>
          <p className="line-clamp-5 text-sm text-gray-400 dark:text-neutral-400">
            Demo description Nostrud laborum culpa Lorem veniam eiusmod magna ullamco tempor ullamco
            aute. Sint do reprehenderit excepteur fugiat ad velit minim cupidatat nisi labore
            consequat aliqua anim. Veniam eu amet ullamco nulla nostrud ipsum labore consequat.
            Excepteur laborum ut est aute reprehenderit pariatur consequat consequat labore tempor
            id. Ad occaecat eu in est tempor excepteur incididunt.
          </p>

          <div className="flex flex-wrap items-center gap-1">
            <span className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-500 dark:bg-zinc-900">
              hgjgh
            </span>
          </div>

          <div className="mt-auto flex w-fit items-center gap-4 p-2">
            <Link
              href={url}
              title="Source Code on GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black dark:hover:text-white"
            >
              <BsGithub className="h-6 w-6 transition-all hover:scale-110 active:scale-90" />
            </Link>

            {url && (
              <Link
                href={url}
                title="Live Preview"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-black dark:hover:text-white"
              >
                <MdOutlineLink className="h-6 w-6 transition-all hover:scale-110 active:scale-90" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
