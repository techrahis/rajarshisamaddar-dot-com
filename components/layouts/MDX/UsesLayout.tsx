import { ReactNode } from 'react';
interface Props {
  children: ReactNode;
}

export default function UsesLayout({ children }: Props) {
  return (
    <div className="pt-8">
      <div className="mb-8 flex flex-col space-y-2">
        <h1 className="text-3xl font-extrabold leading-9 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          What I Use
        </h1>
        <span className="text-gray-700 dark:text-gray-300">
          In case you are wondering what technologies and gadgets I use, Here's the list of what I'm
          currently using for coding on the daily basis. This list is always changing.
        </span>
        <span className="text-gray-700  dark:text-gray-300">
          Last update on
          <span className="font-semibold"> 22 August, 2023</span>
        </span>
      </div>
      <div className="prose max-w-none pb-8 text-justify text-sm dark:prose-dark md:text-lg xl:col-span-2">
        {children}
      </div>
    </div>
  );
}
