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
        <p className="prose max-w-none text-xl font-medium dark:prose-dark">
          As a indie developer, I'm dedicated to transforming ideas into digital reality. This
          portfolio is a glimpse into my journey, showcasing my diverse skills in web development,
          design, and problem-solving. With a commitment to innovation and a knack for elegant
          solutions, I've collaborated on a range of projects. Explore my portfolio to see how I can
          bring your digital vision to life.
        </p>
      </div>

      <Projects />
    </MainLayout>
  );
}
