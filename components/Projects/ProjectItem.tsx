import { ProjectModal } from './types';

interface ProjectProps {
  index: number;
  title: string;
  url: string;
  role: string;
  setModal: (modal: ProjectModal) => void;
}

export default function ProjectItem({ index, title, url, role, setModal }: ProjectProps) {
  return (
    <>
      <a
        href={url}
        target="_blank"
        onMouseEnter={() => {
          setModal({ active: true, index });
        }}
        onMouseLeave={() => {
          setModal({ active: false, index });
        }}
        className="border-b"
        rel="noreferrer"
      >
        <div className="group flex w-full items-center justify-between pt-8">
          <h2 className="text-2xl transition-all group-hover:-translate-x-3 group-hover:scale-110 sm:text-6xl">
            {title}
          </h2>
          <p className="text-sm font-light transition-all group-hover:translate-x-3 group-hover:scale-110 sm:text-lg">
            {role}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-1 border-b pt-4 pb-8">
          <span className="rounded border border-gray-200 px-2 py-1 text-xs text-gray-500 shadow-md dark:border-gray-800 dark:bg-zinc-800 dark:text-gray-100">
            Next.js
          </span>
        </div>
      </a>
    </>
  );
}
