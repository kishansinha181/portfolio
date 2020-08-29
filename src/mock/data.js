import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Kishan Sinha', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Hello World', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello World ! My name is',
  name: 'Kishan',
  subtitle: 'I like building stuff with Code !',
  cta: 'Know more ',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne: 'I am a Full Stack Web Developer/ Competitive Coding Enthusiast.',
  paragraphTwo:
    'I am passionate about coding and building scalable projects, creating effective solutions and learning everyday to grow in the IT field.',
  paragraphThree: 'Feel free to contact me via email at any time',
  resume: 'https://drive.google.com/file/d/1vJSQjrK4NhYfHBQ2jTsVG17GfJEZVFzF/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'smartmirror.png',
    title: 'Smart Mirror',
    info:
      'I along with a few teammates created a Smart Mirror using Raspberry Pi and IoT. It is a futuristic looking Mirror which you can use in your house.',
    info2:
      ' Added various functionalities like Screencast Youtube, Live Headlines, Calendar, Reddit, Google Voice Assisstant. Used Python, Javascipt and Shell Scripting to add features.',
    url: 'https://sites.google.com/view/smartmirrorteam98/home',
    repo: 'https://github.com/kishansinha181/MagicMirror', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ieee.png',
    title: 'Website for IEEE Students Chapter',
    info:
      'Created Webiste using HTML, CSS, Javascript, Jekyll. Prepared the Basic Framework of the website.',

    info2:
      'Collaborated with Senior students in adding functionalities like Location API and Payment Gateway.',
    url: 'http://ieeedsc.iiitd.edu.in/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'arduino.png',
    title: 'Pong Game - Arduino',
    info:
      'Implemented the famous Ping Pong game using Arduino and Processing Language: The game could be played with the gesture of hands and movements.',
    info2: 'The game comes in Single Player as well as Multiplayer Mode.',
    url: 'https://youtu.be/roFd1ed_6tg',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me? Great!',
  btn: 'Lets build together !',
  email: 'kishan19428@iiitd.ac.in',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/kishansinha181',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/kishan-sinha-18102000',
    },
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/KishanS82708056',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/kishan.sinha18/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
