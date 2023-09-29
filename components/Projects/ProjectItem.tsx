'use client';
import OgImage from './OgImage';
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';
import { HiExternalLink } from 'react-icons/hi';
import { Project } from './types';
import { Modal } from '@mui/material';
import Image from 'next/image';
import React from 'react';

export default function ProjectItem({ data }: { data: Project }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div className="mt-[30%] flex max-w-2xl flex-col items-center gap-8 rounded-lg bg-gray-200 bg-opacity-50 p-5 text-gray-900 transition-all dark:bg-gray-800 dark:text-gray-100 sm:mt-8 sm:flex-row sm:p-10">
        <OgImage src={data.src} alt={data.title} handleOpen={handleOpen} />

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Image
            title={data.title}
            alt={data.title}
            src={`/static/images/project/${data.src}`}
            width={1200}
            height={630}
            // placeholder="blur"
            blurDataURL={data.src}
            quality={100}
            className="backdrop-blur-xl transition-all duration-300 lg:group-hover:scale-110"
            // style={{
            //   width: '100%',
            //   height: 'auto',
            //   objectFit: 'cover',
            // }}
          />
        </Modal>

        <div className="flex flex-col justify-start gap-3">
          <h1 className="prose max-w-none text-xl font-medium dark:prose-dark">{data.title}</h1>
          <p className="prose max-w-none text-sm font-medium dark:prose-dark">{data.description}</p>

          <div className="flex flex-wrap items-center gap-1">
            {data.keywords.map((tool, key) => {
              return (
                <span
                  key={key}
                  className="prose max-w-none rounded bg-gray-300 bg-opacity-50 px-2 py-1 text-xs font-medium dark:bg-gray-700 dark:prose-dark"
                >
                  {tool}
                </span>
              );
            })}
          </div>

          <div className="mt-auto flex w-fit items-center gap-4 p-2">
            <Link
              href={data.github}
              title="Source Code on GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black dark:hover:text-white"
            >
              <BsGithub className="h-6 w-6 transition-all hover:scale-110 active:scale-90" />
            </Link>

            {data.url && (
              <Link
                href={data.url}
                title="Live Preview"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-black dark:hover:text-white"
              >
                <HiExternalLink className="h-6 w-6 transition-all hover:scale-110 active:scale-90" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
