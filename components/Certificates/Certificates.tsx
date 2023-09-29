'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedDiv from '../FramerMotion/AnimatedDiv';
import { certificates } from './data';
import { popUpFromBottomForText } from '../FramerMotion/FramerMotionVariants';

function Certificates() {
  return (
    <div className="flex flex-col gap-3 pt-5">
      {certificates.map((cer) => {
        return (
          <AnimatedDiv
            className="flex flex-col gap-2 rounded-lg bg-gray-200 bg-opacity-50 p-3 text-gray-900 dark:bg-gray-800 dark:text-gray-100 md:flex-row md:items-center md:justify-between md:gap-4"
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
                  className="animate- font-medium text-gray-900 dark:text-gray-100 md:text-lg"
                >
                  {cer.title}
                </Link>
                <p className="prose max-w-none text-sm font-medium dark:prose-dark">
                  {cer.orgName} &#x2022; {cer.issuedDate}
                </p>
              </div>
            </div>
          </AnimatedDiv>
        );
      })}
    </div>
  );
}

export default Certificates;
