import siteMetadata from '@/data/siteMetadata';
import Link from 'next/link';
import { Suspense } from 'react';
import { AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';
import SectionContainer from './SectionContainer';
import NowPlaying from './Spotify/NowPlaying';
import { BsDot } from 'react-icons/bs';

export default function Footer() {
  return (
    <SectionContainer>
      <footer>
        <div className="mb-0 mt-20 flex flex-col justify-start space-y-8 space-x-0 border-t-2 pt-6 pb-20 text-gray-500 dark:border-zinc-800 dark:text-gray-400">
          <Suspense fallback="loading...">
            <NowPlaying />
          </Suspense>

          <section className="grid grid-cols-4 gap-10 font-medium text-gray-600 dark:text-gray-400">
            <div className="flex flex-col gap-4 capitalize">
              <Link className="hover:text-black dark:hover:text-white" href="/">
                <ul>Home</ul>
              </Link>
              <Link className="hover:text-black dark:hover:text-white" href="/blog">
                <ul>Blog</ul>
              </Link>
              <Link className="hover:text-black dark:hover:text-white" href="/about">
                <ul>About</ul>
              </Link>
              <Link className="hover:text-black dark:hover:text-white" href="/projects">
                <ul>Projects</ul>
              </Link>
              <Link className="hover:text-black dark:hover:text-white" href="/certificates">
                <ul>Certificates</ul>
              </Link>
            </div>
            <div className="flex flex-col gap-4 capitalize">
              <Link className="hover:text-black dark:hover:text-white" href="/dmca">
                <ul>DMCA</ul>
              </Link>
              <Link className="hover:text-black dark:hover:text-white" href="/shop">
                <ul>Shop</ul>
              </Link>
              <Link className="hover:text-black dark:hover:text-white" href="/utilities">
                <ul>Utilities</ul>
              </Link>
              <Link className="hover:text-black dark:hover:text-white" href="/dashboard">
                <ul>Dashboard</ul>
              </Link>
              <Link className="hover:text-black dark:hover:text-white" href="/privacy-policy">
                <ul>Privacy Policy</ul>
              </Link>
            </div>
            <div className="flex flex-col gap-4 capitalize">
              <Link
                className="hover:text-black dark:hover:text-white"
                target="_blank"
                href="https://tailwindcss.com/"
              >
                <ul>Tailwind CSS</ul>
              </Link>
              <Link
                className="hover:text-black dark:hover:text-white"
                target="_blank"
                href="https://react.dev/"
              >
                <ul>React.js</ul>
              </Link>
              <Link
                className="hover:text-black dark:hover:text-white"
                target="_blank"
                href="https://nextjs.org/"
              >
                <ul>Next.js</ul>
              </Link>
              <Link
                className="hover:text-black dark:hover:text-white"
                target="_blank"
                href="https://www.djangoproject.com/"
              >
                <ul>Django</ul>
              </Link>
              <Link
                className="hover:text-black dark:hover:text-white"
                target="_blank"
                href="https://expressjs.com/"
              >
                <ul>Express.js</ul>
              </Link>
            </div>
            <div className="flex flex-col gap-4 capitalize">
              <Link
                className="hover:text-black dark:hover:text-white"
                target="_blank"
                href="https://aws.amazon.com/"
              >
                <ul>AWS</ul>
              </Link>
              <Link
                className="hover:text-black dark:hover:text-white"
                target="_blank"
                href="https://vercel.com/"
              >
                <ul>Vercel</ul>
              </Link>
              <Link
                className="hover:text-black dark:hover:text-white"
                target="_blank"
                href="https://appwrite.io/"
              >
                <ul>Appwrite</ul>
              </Link>
              <Link
                className="hover:text-black dark:hover:text-white"
                target="_blank"
                href="https://firebase.google.com/"
              >
                <ul>Firebase</ul>
              </Link>
              <Link
                className="hover:text-black dark:hover:text-white"
                target="_blank"
                href="https://www.postgresql.org/"
              >
                <ul>PostgeSQL</ul>
              </Link>
            </div>
          </section>

          <div className="flex flex-col items-center space-y-2 sm:flex-row sm:justify-between sm:text-base">
            <ul className="flex space-x-2 text-lg text-gray-600 dark:text-gray-400">
              <li>{` © ${new Date().getFullYear()}`}</li>
              <li>{` • `}</li>
              <li>
                <Link className="font-medium hover:text-primary-500" href="/">
                  Rajarshi Samaddar
                </Link>
              </li>
            </ul>
            <ul className="flex cursor-pointer items-center space-x-5 text-gray-600 dark:text-gray-400">
              <li>
                <a
                  href={`mailto:${siteMetadata.email}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="linkedin"
                >
                  <AiFillMail className="sm:text-lg" />
                </a>
              </li>
              <li>
                <a
                  href={siteMetadata.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="linkedin"
                >
                  <AiFillLinkedin className="sm:text-lg" />
                </a>
              </li>
              <li>
                <a href={siteMetadata.github} target="_blank" rel="noreferrer" aria-label="github">
                  <FaGithub className="sm:text-lg" />
                </a>
              </li>
              <li>
                <a
                  href={siteMetadata.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="twitter"
                >
                  <SiLeetcode className="sm:text-lg" />
                </a>
              </li>
              <li>
                <a
                  href={siteMetadata.geeksforgeeks}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="twitter"
                >
                  <SiGeeksforgeeks className="sm:text-lg" />
                </a>
              </li>
            </ul>
          </div>
          <div className="relative flex items-center justify-center px-4 text-center font-medium">
            <div className="flex items-center gap-1">
              <BsDot className="-ml-2 h-7 w-7 animate-ping text-green-500" />
              <p className="text-gray-600 dark:text-gray-400">
                Powered by <span className="font-medium">Next.js </span> and{' '}
                <span className="font-medium">Vercel</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </SectionContainer>
  );
}
