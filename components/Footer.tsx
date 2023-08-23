import siteMetadata from '@/data/siteMetadata';
import Link from 'next/link';
import { Suspense } from 'react';
import { AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';
import SectionContainer from './SectionContainer';
import NowPlaying from './Spotify/NowPlaying';

export default function Footer() {
  return (
    <SectionContainer>
      <footer>
        <div className="mb-0 mt-20 flex flex-col justify-start space-y-8 space-x-0 border-t-2 pt-4 pb-10 text-gray-500 dark:border-zinc-800 dark:text-gray-400">
          <Suspense fallback="loading...">
            <NowPlaying />
          </Suspense>
          <div className="flex flex-col items-center space-y-2 sm:flex-row sm:justify-between sm:text-base">
            <ul className="flex space-x-2 text-lg">
              <li>{`© ${new Date().getFullYear()}`}</li>
              <li>{` • `}</li>
              <li>
                <Link className="font-semibold" href="/">
                  {siteMetadata.title}
                </Link>
              </li>
            </ul>
            <ul className="flex cursor-pointer items-center space-x-5">
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
        </div>
      </footer>
    </SectionContainer>
  );
}
