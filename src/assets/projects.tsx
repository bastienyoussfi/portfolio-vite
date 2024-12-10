import { Project } from "../interfaces/project";
import {
  AlarmClockIcon,
  CircleUserRoundIcon,
  AtomIcon,
  TrophyIcon,
  SwordsIcon,
} from "lucide-react";

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Portfolio",
    description:
      "My personal portfolio with a retro aesthetic, built with React and Tailwind CSS. This portfolio showcases my projects, skills, and contact information, and is deployed on Netlify.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite JS"],
    icon: <CircleUserRoundIcon className="w-6 h-6 text-indigo-500" />,
    github: "https://github.com/bastienyoussfi/portfolioby",
    //link: "#",
    image: "/images/portfolio.webp",
  },
  {
    id: 2,
    title: "Physics Engine",
    description:
      "Scalable physics engine first made to simulate simple particles interaction using Verlet Integration method. This is the first step to create a game engine.",
    tags: ["C++", "OpenGL", "Verlet Integration"],
    icon: <AtomIcon className="w-6 h-6 text-indigo-500" />,
    github: "https://github.com/bastienyoussfi/physicsEngine",
    link: "https://github.com/bastienyoussfi/PhysicsEngine",
    image: "/images/physics-engine.jpg",
  },
  {
    id: 3,
    title: "Focus Timer",
    description:
      "A pomodoro timer web application to help you focus and be productive. This project was built with React and Tailwind CSS.",
    tags: ["React", "Tailwind CSS", "Pomodoro Technique"],
    icon: <AlarmClockIcon className="w-6 h-6 text-indigo-500" />,
    github: "https://github.com/bastienyoussfi/pomodoro-timer",
    link: "https://by-focus-flow.netlify.app/",
    image: "/images/focus-timer.jpeg",
  },
  {
    id: 4,
    title: "Fitness Tracker",
    description:
      "A fitness tracker web application to help you track your workouts and fitness progress. This project was built with React and Tailwind CSS.",
    tags: ["React", "Tailwind CSS", "Fitness Tracker"],
    icon: <TrophyIcon className="w-6 h-6 text-indigo-500" />,
    github: "https://github.com/bastienyoussfi/fitness-app",
    //link: "#",
    image: "/images/fitness-tracker.jpg",
  },
  {
    id: 5,
    title: "Chess App",
    description:
      "A chess web application to play chess online with friends. This project was built with React and Tailwind CSS for front-end and Node.js for back-end.",
    tags: ["React", "Tailwind CSS", "Chess", "Node.js"],
    icon: <SwordsIcon className="w-6 h-6 text-indigo-500" />,
    github: "https://github.com/bastienyoussfi/chess-app-react",
    //link: "#",
    image: "/images/chess-app.jpg",
  },
];
