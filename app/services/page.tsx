'use client';
import MainLayout from '@/layouts/MainLayout';
import { InlineWidget } from 'react-calendly';

export const metadata = {
  title: 'Services - Rajarshi Samaddar',
  description: 'My Services - Rajarshi Samaddar',
};

export default function Page() {
  return (
    <MainLayout>
      <div className="space-y-2 pt-6 pb-8 md:space-y-5 ">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          Services
        </h1>
        <p className="text-xl leading-7 text-gray-500 dark:text-gray-400">
          At Rajarshi Samaddar's Indie Development, I offer a comprehensive range of services to
          meet your digital needs. With a strong focus on web development and design, I'm here to
          help you create exceptional digital experiences that drive success. Explore my services
          below:
        </p>
        {/* web development */}
        <h2 className="text-2xl font-semibold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
          Web Development
        </h2>
        <p className="text-xl leading-7 text-gray-500 dark:text-gray-400">
          Transform your vision into a fully functional and responsive website. Whether you need a
          stunning portfolio site, an e-commerce platform, or a robust web application, I have the
          expertise to bring your ideas to life. My web development services include:
        </p>
        <ol className="text-xl leading-7 text-gray-500 dark:text-gray-400">
          <span className="font-semibold">Website Design: </span>Craft visually appealing and
          user-friendly websites tailored to your brand.
        </ol>
        <ol className="text-xl leading-7 text-gray-500 dark:text-gray-400">
          <span className="font-semibold">Front-end Development: </span>Create seamless and
          interactive user experiences with cutting-edge technologies.
        </ol>
        <ol className="text-xl leading-7 text-gray-500 dark:text-gray-400">
          <span className="font-semibold">Back-end Development: </span>Develop secure and scalable
          server-side solutions to power your web applications.
        </ol>
        {/* Custom Web Applications */}
        <h2 className="text-2xl font-semibold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
          Custom Web Applications
        </h2>
        <p className="text-xl leading-7 text-gray-500 dark:text-gray-400">
          Streamline your business processes and improve efficiency with custom web applications. I
          design and develop tailored solutions that address your unique challenges. My custom web
          application services include:
        </p>
        <ol className="text-xl leading-7 text-gray-500 dark:text-gray-400">
          <span className="font-semibold">Application Design: </span>Create intuitive and efficient
          user interfaces for your software.
        </ol>
        <ol className="text-xl leading-7 text-gray-500 dark:text-gray-400">
          <span className="font-semibold">Development: </span>Build custom web applications from the
          ground up, using the latest technologies.
        </ol>
        <ol className="text-xl leading-7 text-gray-500 dark:text-gray-400">
          <span className="font-semibold">Integration: </span>Seamlessly integrate your web
          applications with other systems and databases.
        </ol>
        {/* Website Maintenance */}
        <h2 className="text-2xl font-semibold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
          Website Maintenance
        </h2>
        <p className="text-xl leading-7 text-gray-500 dark:text-gray-400">
          Ensure your website remains secure, up-to-date, and fully functional. I offer ongoing
          maintenance services to keep your online presence running smoothly. My website maintenance
          services include:
        </p>
        <ol className="text-xl leading-7 text-gray-500 dark:text-gray-400">
          <span className="font-semibold">Security Updates: </span>Regularly update and patch your
          website to protect against vulnerabilities.
        </ol>
        <ol className="text-xl leading-7 text-gray-500 dark:text-gray-400">
          <span className="font-semibold">Content Updates: </span>Keep your website content fresh
          and engaging with regular updates.
        </ol>
        <ol className="text-xl leading-7 text-gray-500 dark:text-gray-400">
          <span className="font-semibold">Performance Optimization: </span>Improve site speed and
          performance for a better user experience.
        </ol>
        {/* Consultation and Collaboration */}
        <h2 className="text-2xl font-semibold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
          Consultation and Collaboration
        </h2>
        <p className="text-xl leading-7 text-gray-500 dark:text-gray-400">
          Looking for expert guidance on your digital project? I offer consultation and
          collaboration services to help you make informed decisions and achieve your goals. My
          consultation services include:
        </p>
        <ol className="text-xl leading-7 text-gray-500 dark:text-gray-400">
          <span className="font-semibold">Digital Strategy: </span>Develop a customized roadmap for
          your digital initiatives.
        </ol>
        <ol className="text-xl leading-7 text-gray-500 dark:text-gray-400">
          <span className="font-semibold">Project Planning: </span>Define project scope, timelines,
          and budgets.
        </ol>
        <ol className="text-xl leading-7 text-gray-500 dark:text-gray-400">
          <span className="font-semibold">Technical Advice: </span>Get expert insights and
          recommendations on digital technologies.
        </ol>
        {/* Call to action section */}
        <h2 className="text-2xl font-semibold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
          Let's Get Started
        </h2>
        <p className="text-xl leading-7 text-gray-500 dark:text-gray-400">
          Ready to take your digital presence to the next level? Book a consultation with me to
          discuss your project, goals, and how I can help you succeed. Use the calendar below to
          schedule a call at your convenience:
        </p>
        <p className="text-xl leading-7 text-gray-500 dark:text-gray-400">
          I'm excited to collaborate with you and turn your digital ideas into reality. Contact me
          today to get started!
        </p>
        {/* <!-- Calendly inline widget start --> */}
        <InlineWidget
          styles={{
            height: '900px',
          }}
          pageSettings={{
            backgroundColor: '000000',
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
            primaryColor: 'de1d8d',
            textColor: 'ffffff',
          }}
          url="https://calendly.com/rajarshi1401/consultation-call?hide_gdpr_banner=1"
        />
        {/* <!-- Calendly inline widget end --> */}
      </div>
    </MainLayout>
  );
}
