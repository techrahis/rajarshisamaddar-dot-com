import Projects from '@/components/Projects/Projects';
import MainLayout from '@/layouts/MainLayout';

export const metadata = {
  title: 'Portfolio - Rajarshi Samaddar',
  description: 'My Portfolio - Rajarshi Samaddar',
};

export default function Page() {
  return (
    <MainLayout>
      <div className="space-y-2 pt-6 pb-8 md:space-y-5 ">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          Portfolio
        </h1>
        <p className="text-xl leading-7 text-gray-500 dark:text-gray-400">
          I've been making various types of projects some of them were basics and some of them were
          complicated. So far I've made <b>14+</b> projects.
        </p>
      </div>

      <Projects />
    </MainLayout>
  );
}
