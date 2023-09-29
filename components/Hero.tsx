'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactElement, useContext, useEffect, useRef } from 'react';
import { HiOutlineArrowNarrowDown } from 'react-icons/hi';
import { ScrollContext } from './Providers/ScrollProvider';
import { renderCanvas } from './renderCanvas';
import { FiDownload, FiExternalLink } from 'react-icons/fi';
import { opacityVariant, popUp } from '@/components/FramerMotion/FramerMotionVariants';

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
        initial="hidden"
        whileInView="visible"
        className="relative z-10 flex h-[calc(100vh-81px)] items-center md:h-[calc(100vh-116px)]"
        animate={{
          transform: `translateY(${progress * 20}vh)`,
        }}
        transition={{ type: 'spring', stiffness: 50 }}
      >
        <div className="mx-auto w-screen max-w-3xl px-4 sm:px-9 xl:max-w-5xl xl:px-0">
          <div className="-mt-20">
            <div
              ref={ref}
              className="flex cursor-default flex-col items-center justify-center space-y-14 text-center"
            >
              <div>
                <motion.h1
                  variants={opacityVariant}
                  className="font-sarina text-5xl font-bold lg:text-6xl"
                >
                  Rajarshi Samaddar
                </motion.h1>
                <motion.p variants={opacityVariant} className="mt-2 text-xl font-extrabold">
                  Full-Stack Software Engineer
                </motion.p>
                <motion.p variants={opacityVariant} className="mt-3 text-lg font-extrabold">
                  I create tailored web solutions, excel in product development, and code in
                  multiple languages. My commitment is to deliver excellence, ensuring seamless user
                  experiences for clients.
                </motion.p>
              </div>
              <motion.div variants={popUp} className="flex">
                <Link
                  href="https://api.rajarshisamaddar.com/get-resume"
                  className="flex max-w-xs select-none items-center justify-center gap-2 rounded-l-md border border-primary-500 px-5 py-2 outline-none transition-transform  active:scale-95"
                >
                  <FiDownload className="text-primary-500" />
                  <p className="font-medium text-primary-500 ">Resume</p>
                </Link>
                <Link
                  href="/portfolio"
                  className="flex max-w-xs select-none items-center justify-center gap-2 rounded-r-md border border-l-0 border-t-primary-500 border-r-primary-500 border-b-primary-500 px-5 py-2 outline-none transition-transform  active:scale-95"
                >
                  <FiExternalLink className="text-primary-500" />
                  <p className="font-medium text-primary-500 ">Portfolio</p>
                </Link>
              </motion.div>
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 transform md:bottom-8">
              <motion.div
                variants={opacityVariant}
                role="presentation"
                className="flex animate-bounce cursor-pointer flex-col items-center justify-center"
                onClick={() => {
                  const intro = document.querySelector('#intro');

                  intro?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <HiOutlineArrowNarrowDown size={20} />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
      <canvas className="bg-skin-base pointer-events-none absolute inset-0" id="canvas"></canvas>
    </div>
  );
}
