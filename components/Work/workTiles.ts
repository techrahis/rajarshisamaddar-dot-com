export type WorkTile = {
  title: string;
  description: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
};

export const workTiles: WorkTile[] = [
  {
    description: `Here are things`,
    title: `I've worked on`,
    image: {
      src: '/static/images/fashion-cube.png',
      width: 600,
      height: 770,
    },
  },
  {
    description: 'I fixed',
    title: 'Lexical Playground',
    image: {
      src: '/static/images/lexical.jpeg',
      width: 600,
      height: 554,
    },
  },
  {
    description: `I maintained`,
    title: 'HelpWave',
    image: {
      src: '/static/images/helpwave.jpeg',
      width: 600,
      height: 717,
    },
  },
  {
    description: `I built`,
    title: 'Workflowish',
    image: {
      src: '/static/images/workflowish.jpg',
      width: 600,
      height: 717,
    },
  },
];
