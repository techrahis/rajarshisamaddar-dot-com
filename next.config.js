const { withContentlayer } = require('next-contentlayer');

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/
module.exports = withContentlayer({
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  eslint: {
    dirs: ['app', 'components', 'lib', 'layouts', 'scripts'],
  },
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
});