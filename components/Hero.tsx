'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactElement, useContext, useEffect, useRef } from 'react';
import { HiOutlineArrowNarrowDown } from 'react-icons/hi';
import { ScrollContext } from './Providers/ScrollProvider';
import { renderCanvas } from './renderCanvas';
import { FiDownload } from 'react-icons/fi';

export default function Hero(): ReactElement {
  const ref = useRef<HTMLHeadingElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;
  const { current: elContainer } = ref;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  useEffect(() => {
    renderCanvas();
  }, []);

  return (
    <div>
      <h1 className="sr-only">
        Hello I'm Rajarshi Samaddar, I'm a software developer, and I love building things for the
        web.
      </h1>
      <motion.div
        className="relative z-10 flex h-[calc(100vh-81px)] items-center md:h-[calc(100vh-116px)]"
        animate={{
          transform: `translateY(${progress * 20}vh)`,
        }}
        transition={{ type: 'spring', stiffness: 50 }}
      >
        <div className="mx-auto w-screen max-w-3xl px-4 sm:px-9 xl:max-w-5xl xl:px-0">
          <div className="-mt-36">
            <div
              ref={ref}
              className="flex cursor-default flex-col items-center justify-center space-y-14 text-center"
            >
              <div>
                <h1 className="font-sarina text-5xl font-bold lg:text-6xl">Rajarshi Samaddar</h1>
                <p className="mt-2 font-medium">Full-Stack Software Developer & Technical Writer</p>
                <p className="mt-3 font-medium">
                  I am currently building things for the web while pursuing my Bachelor Degree in
                  Computer Science. I can code in Python, Java, JavaScript, etc.
                </p>
              </div>

              <Link
                href="/resume"
                className="mt-9 flex max-w-xs select-none items-center justify-center gap-2 rounded-md border border-gray-500 px-5 py-2 outline-none transition-transform  active:scale-95 dark:border-gray-400 "
              >
                <FiDownload />
                <p>Resume</p>
              </Link>
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 transform md:bottom-8">
              <div
                role="presentation"
                className="flex cursor-pointer flex-col items-center justify-center"
                onClick={() => {
                  const intro = document.querySelector('#intro');

                  intro?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <HiOutlineArrowNarrowDown size={20} />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <canvas className="bg-skin-base pointer-events-none absolute inset-0" id="canvas"></canvas>
    </div>
  );
}
