import Link from '@/components/Link';
import SectionContainer from '@/components/SectionContainer';

// TODO: Comment out when https://github.com/vercel/next.js/issues/50566 is fixed.

// export const metadata = {
//   title: '404 - R S',
//   description: 'Not Found - R S',
// };

export default function FourZeroFour() {
  return (
    <SectionContainer>
      <div className="space-x-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:border-r-2 md:px-6 md:text-8xl md:leading-14">
          404
        </h1>
      </div>
      <div className="max-w-md">
        <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
          STAY CALM AND DON'T FREAK OUT!!
        </p>
        <p className="mb-8">
          Looks like you've found the doorway to the great nothing. You didn't break the internet,
          but I can't find what you are looking for. Please visit my Homepage to get where you need
          to go.
        </p>
        <Link href="/">Back to homepage</Link>
      </div>
    </SectionContainer>
  );
}
