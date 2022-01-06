export const skills = [
  { name: 'html', image: 'html.jpg', id: '1' },
  { name: 'css', image: 'css.jpg', id: '2' },
  { name: 'javascript', image: 'javascript.jpg', id: '3' },
  { name: 'react', image: 'react.jpg', id: '4' },
  { name: 'next js', image: 'next.jpg', id: '5' },
  { name: 'tailwind css', image: 'tailwind.jpg', id: '6' },
  { name: 'node js', image: 'node.jpg', id: '7' },
  { name: 'express js', image: 'express.jpg', id: '8' },
  { name: 'graph ql', image: 'graphql.jpg', id: '9' },
  { name: 'mongo db', image: 'mongodb.jpg', id: '10' },
  { name: 'figma', image: 'figma.jpg', id: '11' },
];

export const projects = [
  {
    id: '1',
    name: 'Natours',
    summary:
      'travel around world, make new adventures and amazing memories with natours',
    description:
      'Developed backend using node.js,express.js and JWT for user authentication. Used MongoDB , mongoose for database. Developed frontend using html , css, react.js with react hooks Used stripe for payments ',
    link: 'https://natours-mern-app.herokuapp.com/',
    color: 'to-green-300',
    logoImage: 'natours-logoImage.png',
    image: 'natours-image.png',
  },
  {
    id: '2',
    name: 'cutsclothing',
    summary:
      'cuts designed for the most ambitios people and for everyday wear,confidence you can wear',
    description:
      'I built this application based on cutsclothing site for training purpose, Developed backend using node.js,express.js and JWT for user authentication. Used MongoDB , mongoose for database. Developed frontend using html , css, react.js with react hooks Used stripe for payments',
    link: 'https://cuts-clone-mern.herokuapp.com/',
    color: 'to-white',
    logoImage: 'cutsclothing-logoImage.png',
    image: 'cutsclothing-image.png',
  },
  {
    id: '3',
    name: 'spotify-clone',
    summary: 'listen to your favorite music and songs in one place',
    description:
      'I built this application with spotify api,you can log in to your spotify account and see your songs and libraries,if you have a premium spotify account you can play and pause songs but your should open your account while using this clone',
    link: 'https://spotify-next-express.herokuapp.com/',
    color: 'to-emerald-600',
    logoImage: 'spotify-logoImage.png',
    image: 'spotify-image.png',
  },
];
