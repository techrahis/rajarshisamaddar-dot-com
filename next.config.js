const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
});

const { withContentlayer } = require('next-contentlayer');

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/
module.exports = withPWA(
  withContentlayer({
    reactStrictMode: true,
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    eslint: {
      dirs: ['app', 'components', 'lib', 'layouts', 'scripts'],
    },
    // typescript: {
    //   // !! WARN !!
    //   ignoreBuildErrors: true,
    // },
    experimental: {
      appDir: true,
    },
    swcMinify: true,
    images: {
      domains: [
        'ucarecdn.com',
        'cdn.buymeacoffee.com',
        'res.cloudinary.com',
        'imgur.com',
        'i.imgur.com',
        'cutt.ly',
        'activity-graph.herokuapp.com',
        'i.scdn.co', // images from spotify
        'images.unsplash.com',
        'm.media-amazon.com', // for imdb images
        'cdn.sanity.io', // sanity images
        'www.themoviedb.org',
      ],
    },
  })
);
