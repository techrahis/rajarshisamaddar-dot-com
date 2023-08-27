import MainLayout from '@/layouts/MainLayout';
import Certificates from '@/components/Certificates/Certificates';

export const metadata = {
  title: 'Certificates - Rajarshi Samaddar',
  description: 'Certificates - Rajarshi Samaddar',
};

export default function Page() {
  return (
    <MainLayout>
      <div className="space-y-2 pt-6 pb-6 md:space-y-5 ">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          Certificates
        </h1>
        <p className="text-xl font-medium leading-7 text-gray-500 dark:text-gray-400">
          I've participated in many contests, courses and test and get certified in many skills. You
          can find the certificates below.
        </p>
        <Certificates />
      </div>
    </MainLayout>
  );
}
