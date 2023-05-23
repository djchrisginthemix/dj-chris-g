import laCardImage from '../assets/images/webp/portfolio/la-portfolio-card-image.webp'
import vivazCardImage from '../assets/images/webp/portfolio/vivaz-portfolio-card-image.webp'
import partnersCardImage from '../assets/images/webp/portfolio/partners-portfolio-card-image.webp'
import buggyCardImage from '../assets/images/webp/portfolio/buggy-portfolio-card-image.webp'
import vivazVideoSlide from '../assets/videos/vivaz-video-slide.mp4';
import partnersVideoSlide from '../assets/videos/partners-video-slide.mp4';
import buggyVideoSlide from '../assets/videos/buggy-video-slide.mp4';

export const projects = [
  {
    id: 1,
    image: buggyCardImage,
    title: 'Buggy Car Wash & Barking Bath',
    description: 'A blogging platform with user authentication and commenting features.',
    codepenLink: 'https://codepen.io/project3',
    liveDemoLink: 'https://buggycarwash.com/',
    video: buggyVideoSlide,
  },
  {
    id: 2,
    image: laCardImage,
    title: 'Laseraway - USA',
    description: 'A personal portfolio website showcasing skills and projects.',
    codepenLink: 'https://codepen.io/project2',
    liveDemoLink: 'https://laseraway.com/',
    video: vivazVideoSlide,
  },
  {
    id: 5,
    image: 'https://via.placeholder.com/800x600',
    title: 'LaserAway Prizes',
    description: 'A personal portfolio website showcasing skills and projects.',
    codepenLink: 'https://codepen.io/project2',
    liveDemoLink: 'https://get.laseraway.com/',
    video: vivazVideoSlide,
  },
  {
    id: 4,
    image: vivazCardImage,
    title: 'Vivaz Cantina - New Haven, CT',
    description: 'A fully functional e-commerce website with shopping cart functionality.',
    codepenLink: 'https://codepen.io/project1',
    liveDemoLink: 'https://vivaznewhaven.com/',
    video: vivazVideoSlide,
  },
  {
    id: 5,
    image: partnersCardImage,
    title: 'Partners Bar &amp; Nightclub',
    description: 'A blogging platform with user authentication and commenting features.',
    codepenLink: 'https://codepen.io/project3',
    liveDemoLink: 'https://partnersnewhaven.com/',
    video: partnersVideoSlide,
  },
];
