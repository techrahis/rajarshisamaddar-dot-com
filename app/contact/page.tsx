'use client';
import MainLayout from '@/layouts/MainLayout';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';

// export const metadata = {
//   title: 'Contact - Rajarshi Samaddar',
//   description: 'Contact - Rajarshi Samaddar',
// };

export default function Page() {
  const [FullName, setFullName] = useState('');
  const [Email, setEmail] = useState('');
  const [Subject, setSubject] = useState('');
  const [Message, setMessage] = useState('');
  const [copy, setCopy] = useState(false);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [captcha, setCaptcha] = useState(0);

  useEffect(() => {
    setNum1(Math.round(Math.random() * 100));
    setNum2(Math.round(Math.random() * 100));
  }, []);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data = {
      name: FullName,
      email: Email,
      subject: Subject,
      message: Message,
      receipt: copy,
    };
    if (num1 + num2 === captcha) {
      if (FullName && Email && Subject && Message) {
        fetch('https://api.rajarshisamaddar.com/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'rs-web',
          },
          body: JSON.stringify(data),
        })
          .then((response) => {
            if (response.status === 200) {
              toast.success('Message sent successfully!');
              setFullName('');
              setEmail('');
              setSubject('');
              setMessage('');
              setNum1(Math.round(Math.random() * 100));
              setNum2(Math.round(Math.random() * 100));
              setCaptcha(0);
            } else {
              toast.error('Fill the email correctly!');
            }
          })
          .catch((error) => {
            toast.error('Please try again!');
          });
      } else toast.warn('All the fields are mandatory!');
    } else {
      toast.error('Fill the captcha correctly!');
      setNum1(Math.round(Math.random() * 100));
      setNum2(Math.round(Math.random() * 100));
      setCaptcha(0);
    }
  };

  return (
    <MainLayout>
      <div className="space-y-2 pt-6 pb-6 md:space-y-5 ">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          Contact
        </h1>
        <p className="text-xl font-medium leading-7 text-gray-500 dark:text-gray-400">
          Is there something on your mind you'd like to talk about? Whether it's related to work or
          just a casual conversation, I am here and ready to listen. Please don't hesitate to reach
          out to me at any time. 🙋‍♂️.
        </p>

        <input
          aria-label="name"
          type="text"
          value={FullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Full name"
          className="block w-80 rounded-md border-0 bg-gray-200 bg-opacity-50 px-4 py-3 text-gray-900 placeholder:font-medium focus:border-sky-500 focus:ring-sky-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
          required
        />

        <input
          aria-label="email"
          type="email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          className="peer block w-80 rounded-md border-0 bg-gray-200 bg-opacity-50 px-4 py-3 text-gray-900 placeholder:font-medium focus:border-sky-500 focus:ring-sky-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
          // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          required
        />
        {/* <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
          Please enter a valid email address
        </span> */}

        <input
          aria-label="subject"
          type="text"
          value={Subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Subject"
          className="peer block w-80 rounded-md border-0 bg-gray-200 bg-opacity-50 px-4 py-3 text-gray-900 placeholder:font-medium focus:border-sky-500 focus:ring-sky-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
          required
        />

        <textarea
          name="Message"
          typeof="text"
          value={Message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          className="block w-80 rounded-md border-0 bg-gray-200 bg-opacity-50 px-4 py-3 text-gray-900 placeholder:font-medium focus:border-sky-500 focus:ring-sky-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
          placeholder="Message"
          required
        />

        <div className="flex w-80 items-center justify-between">
          <label
            htmlFor="checked-checkbox"
            className="mr-2 font-sarina text-lg font-medium text-gray-500 dark:text-gray-400"
          >
            {num1} + {num2}
          </label>
          <input
            type="number"
            value={captcha}
            onChange={(e) => setCaptcha(e.target.valueAsNumber)}
            className="block w-44 rounded-md border-0 bg-gray-200 bg-opacity-50 px-4 py-3 text-gray-900 placeholder:font-medium focus:border-sky-500 focus:ring-sky-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
          />
        </div>

        <div className="flex items-center">
          <input
            id="checked-checkbox"
            type="checkbox"
            onChange={(e) => setCopy(!copy)}
            className="h-4 w-4 rounded border-gray-200 bg-gray-200 text-sky-500 focus:border-gray-200 focus:ring-0  dark:border-gray-900 dark:bg-gray-800 dark:text-sky-500 dark:focus:border-gray-900"
          />
          <label
            htmlFor="checked-checkbox"
            className="ml-2 text-lg font-medium text-gray-500 dark:text-gray-400"
          >
            Send me a copy of this message.
          </label>
        </div>

        <button onClick={handleSubmit} className="w-80 rounded-md bg-sky-500 py-2 px-10 text-white">
          Send
        </button>
      </div>
    </MainLayout>
  );
}
