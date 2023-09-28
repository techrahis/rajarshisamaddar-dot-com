import MainLayout from '@/layouts/MainLayout';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy - Rajarshi Samaddar',
  description: 'Privacy Policy - Rajarshi Samaddar',
};

export default function Page() {
  return (
    <MainLayout>
      <div className="space-y-2 pt-6 pb-6 md:space-y-5 ">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          Privacy Policy
        </h1>
        <p className="text-xl font-medium leading-7 text-gray-500 dark:text-gray-400">
          At{' '}
          <Link href="/">
            <b>www.rajarshisamaddar.com</b>
          </Link>
          , I value your privacy and take it seriously. I do not collect any personal information
          from users, including but not limited to names, email addresses, and other contact
          information.
        </p>
        <p className="text-xl font-medium leading-7 text-gray-500 dark:text-gray-400">
          I don't share any information collected through this website or newsletter with any third
          parties, except as required by law.
        </p>
        <p className="text-xl font-medium leading-7 text-gray-500 dark:text-gray-400">
          I reserve the right to update this Privacy Policy at any time, and will notify you of any
          changes by posting the updated policy.
        </p>
        <p className="text-xl font-medium leading-7 text-gray-500 dark:text-gray-400">
          If you have any questions or concerns about the Privacy Policy, please contact met at
          <Link href="mailto:hello@rajarshisaamddar.com">
            <b> hello@rajarshisaamddar.com</b>
          </Link>
          .
        </p>
      </div>
    </MainLayout>
  );
}
