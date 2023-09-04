'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedDiv from '../FramerMotion/AnimatedDiv';
import { certificates } from './data';
import { popUpFromBottomForText } from '../FramerMotion/FramerMotionVariants';

function Certificates() {
  return (
    <div className="flex flex-col gap-3 pt-10">
      {certificates.map((cer) => {
        return (
          <AnimatedDiv
            className="flex flex-col gap-2 rounded-lg bg-white p-3 shadow dark:bg-zinc-800 md:flex-row md:items-center md:justify-between md:gap-4"
            variants={popUpFromBottomForText}
            key={cer.id}
          >
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center">
                <Image
                  width={40}
                  height={40}
                  src={cer.orgLogo}
                  alt={cer.orgName}
                  quality={50}
                  placeholder="blur"
                  blurDataURL={cer.orgLogo}
                  style={{
                    objectFit: 'contain',
                  }}
                />
              </div>
              <div className="flex flex-col ">
                <Link
                  href={cer.url}
                  target="_blank"
                  className="text-xl font-bold leading-8 tracking-tight text-primary-500 duration-300 hover:text-primary-400"
                >
                  {cer.title}
                </Link>
                <p className="text-sm text-gray-900 dark:text-gray-100">
                  {cer.orgName} &#x2022; {cer.issuedDate}
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-500"></p>
          </AnimatedDiv>
        );
      })}
    </div>
  );
}

export default Certificates;
