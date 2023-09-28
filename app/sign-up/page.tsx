import MainLayout from '@/layouts/MainLayout';

export const metadata = {
  title: 'Sign Up - Rajarshi Samaddar',
  description: 'Sign Up - Rajarshi Samaddar',
};

export default function Page() {
  return (
    <MainLayout>
      <div className="space-y-2 pt-6 pb-6 md:space-y-5 ">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          Sign Up
        </h1>
        <p className="text-xl font-medium leading-7 text-gray-500 dark:text-gray-400">
          Welcome to my platform! Join our community by filling out this simple sign up form and
          unlock a world of possibilities.
        </p>
        <section className="container flex max-w-sm flex-1 flex-col">
          <input
            className="border-grey-light mb-4 block w-full rounded border p-3"
            placeholder="Full Name"
          />
          <input
            className="border-grey-light mb-4 block w-full rounded border p-3"
            placeholder="Email"
          />
          <input
            className="border-grey-light mb-4 block w-full rounded border p-3"
            placeholder="Password"
          />
          <input
            className="border-grey-light mb-4 block w-full rounded border p-3"
            placeholder="Confirm Password"
          />
          <button className="bg-green-700 text-white">Create Account</button>
        </section>
      </div>
    </MainLayout>
  );
}
