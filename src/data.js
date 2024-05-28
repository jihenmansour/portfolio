//  icons
import {
  FiInstagram,
  FiGithub,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
  FiFacebook,
} from 'react-icons/fi';

// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

// projects images
import Project1 from './assets/img/projects/safe-harbor.png';
import Project2 from './assets/img/projects/JoBoard.png';
import Project3 from './assets/img/projects/courses-app.png';


// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'skills',
    href: 'services',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiGithub />,
    href: 'https://github.com/jihenmansour',
  },
  {
    icon: <FiFacebook />,
    href: 'https://www.facebook.com/profile.php?id=100010317708773',
  },
  {
    icon: <FiInstagram />,
    href: 'https://www.instagram.com/jiihen_mansour/',
  },

];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: '',
  },
  {
    img: UpworkBrandIcon,
    href: '',
  },
  {
    img: FiverBrandIcon,
    href: '',
  },
  {
    img: BehanceBrandIcon,
    href: '',
  },
  {
    img: DribbbleBrandIcon,
    href: '',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'Safe-Harbor',
    category: 'Next.js',
    github: 'https://github.com/jihenmansour/SafeHarbor',
    link: 'https://safe-harbor.vercel.app/',
    description: 'Safe-Harbor is a secure platform for easy money transfers and account management.'
  },
  {
    id: '2',
    image: Project2,
    name: 'JoBoard',
    category: 'Bootstrap | Dotnet',
    github: 'https://github.com/jihenmansour/joBoard',
    description: 'JoBoard is a platform dedicated to helping job seekers find their dream job and employers find the right candidate for their open positions.'
  },
  {
    id: '3',
    image: Project3,
    name: 'Coursaty',
    category: 'Bootstrap | Dotnet',
    github: 'https://github.com/jihenmansour/coursaty',
    description: 'This is a comprehensive platform providing a wide range of online courses with easy enrollment. '
  }
];


// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Web Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiSettings />,
    name: 'Web Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiPenTool />,
    name: 'Branding',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiTag />,
    name: 'SEO',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at jihenmn8@gmail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Sousse, Tunisia',
    description: 'Serving clients worldwide',
  },
];

// skills
export const skills = [
  {
    per: '80%',
    name: 'Next.js',
  },
  {
    per: '90%',
    name: 'ReactJS',
  },
  {
    per: '80%',
    name: 'Node.js',
  },
  {
    per: '70%',
    name: 'Dotnet',
  }
];

