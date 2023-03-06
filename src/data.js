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
import Project1 from './assets/img/projects/axia.png';
import Project2 from './assets/img/projects/HomeLand.png';
import Project3 from './assets/img/projects/JoBoard.png';


// testimonial images
import TestiImage1 from './assets/img/testimonials/testimonial-1.webp';
import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';

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
    image: Project3,
    name: 'JoBoard',
    category: 'Bootstrap | Dotnet',
    github: 'https://github.com/jihenmansour/JoBoard',
    description: 'JoBoard is a platform dedicated to helping job seekers find their dream job and employers find the right candidate for their open positions.'
  },
  {
    id: '2',
    image: Project2,
    name: 'HomeLand',
    category: 'ReactJs | PHP',
    github: 'https://github.com/jihenmansour/real_estate',
    description: 'HomeLand is a platform that I created where buyers  can search for homes and sellers can post their homes on the site.'
  },
  {
    id: '3',
    image: Project1,
    name: 'Axia board',
    category: 'ReactJs | Dotnet',
    github: 'https://github.com/jihenmansour/graduation_project',
    description: 'This was my graduation project, a platform for projects management. '
  }
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'UI/UX Design',
  },
  {
    name: 'web development',
  },
  {
    name: 'branding',
  },
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

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
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
    name: 'ReactJS',
  },
  {
    per: '90%',
    name: 'HTML',
  },
  {
    per: '90%',
    name: 'CSS',
  },
  {
    per: '70%',
    name: 'Dotnet',
  },
  {
    per: '80%',
    name: 'PHP',
  },
  {
    per: '60%',
    name: 'Angular',
  },
];

