'use client';

import skills from './skillData';
import React from 'react';
import { motion } from 'framer-motion';
import { FadeContainer, popUp } from '@/components/FramerMotion/FramerMotionVariants';

export default function Skill() {
  return (
    <>
      <div className="movieScroll mx-auto max-w-3xl px-4 sm:px-9 xl:max-w-5xl xl:px-0">
        <div className="mt-10">
          <h1 className="mb-10 text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
            My Top Skills
          </h1>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={FadeContainer}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-4"
          >
            {skills.map((skill, index) => {
              const Icon = skill.Icon;
              return (
                <motion.div
                  variants={popUp}
                  key={index}
                  title={skill.name}
                  className="dark:bg-darkPrimary group flex origin-center transform items-center justify-center gap-4 rounded-sm border border-gray-300 p-4 hover:bg-zinc-50 dark:border-neutral-700 hover:dark:bg-zinc-800 sm:justify-start md:origin-top"
                >
                  <div className="pointer-events-none relative select-none transition group-hover:scale-110 sm:group-hover:scale-100">
                    {/* @ts-ignore */}
                    <Icon className="h-8 w-8" />
                  </div>
                  <p className="pointer-events-none hidden select-none text-sm font-semibold sm:inline-flex md:text-base">
                    {skill.name}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </>
  );
}
