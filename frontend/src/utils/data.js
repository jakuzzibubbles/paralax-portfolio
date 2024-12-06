import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaGlobe,
  FaCloud,
  FaProjectDiagram,
} from "react-icons/fa";
import {
  SiJavascript,
  SiReact,
  SiMongodb,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiGit,
} from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { GiSprint } from "react-icons/gi";
import TravelApp from "/assets/travel-app.png";
import Portfolio from "/assets/portfolio1.png";
import MemoryGame from "/assets/memory-card.png";
import TaskManager from "/assets/edit-note.png";
import HpBrunner from "/assets/hp-brunner.png";
import Mooosh from "/assets/mooosh.png";


const personalDetails = {
  name: "Linh Nguyen",
  jobTitle:
    "Officially Project Manager | Cloud Rookie |  Software Developer because it is fun ",
  location: "Berlin, Germany",
  links: [
    {
      id: "1",
      name: "GitHub",
      url: "https://github.com/jakuzzibubbles/",
      icon: FaGithub,
    },
    {
      id: "2",
      name: "LinkedIn",
      url: "https://linkedin.com/in/jakuzzi263/",
      icon: FaLinkedin,
    },
    {
      id: "3",
      name: "Email",
      url: "mailto:jakuzzi263@icloud.com",
      icon: FaEnvelope,
    },
  ],
};

const skills = [
  {
    id: "1",
    icon: FaProjectDiagram,
    title: "Digital Project Management",
    comment:
      "Guiding projects to success while keeping the team engaged and motivated.",
  },
  {
    id: "2",
    title: "JavaScript",
    icon: SiJavascript,
    comment:
      "Mastering JavaScript—transforming ideas into interactive, dynamic features!",
  },
  {
    id: "3",
    title: "React",
    icon: SiReact,
    comment:
      "Building interactive UIs that keep users engaged—like a good book!",
  },
  {
    id: "4",
    title: "NodeJs",
    icon: IoLogoNodejs,
    comment:
      "Creating efficient backends that handle requests with ease and speed!",
  },
  {
    id: "5",
    title: "Express",
    icon: SiExpress,
    comment:
      "Building powerful web servers that deliver smooth, real-time experiences!",
  },
  {
    id: "6",
    title: "MongoDB",
    icon: SiMongodb,
    comment:
      "Managing data like a pro—keeping everything organized, even when it wants to party!",
  },
  {
    id: "7",
    title: "HTML5",
    icon: SiHtml5,
    comment: "Building the web, one semantic tag at a time!",
  },
  {
    id: "8",
    title: "CSS3",
    icon: SiCss3,
    comment: "Styling the web with precision—making every pixel count!",
  },
  {
    id: "9",
    title: "Tailwind CSS",
    icon: SiTailwindcss,
    comment: "Building UI components with ease—Tailwind is my CSS superhero!",
  },
  {
    id: "10",
    title: "Git & GitHub",
    icon: SiGit,
    comment:
      "Version control made simple—keeping code organized and collaborative!",
  },
  {
    id: "11",
    icon: FaCloud,
    title: "Cloud Computing",
    comment: "Transforming clouds into seamless solutions—no rainy days here!",
  },

  {
    id: "12",
    icon: GiSprint,
    title: "Agile Methodologies & Scrum",
    comment:
      "Embracing agility like a pro—quick on my feet and faster with coffee!",
  },
  
];

const projects = [
  {
    id: "1",
    title: "Full Stack App",
    description:
      "The Travel App is a MERN stack platform where users can securely log in, create, view, and manage travel stories with descriptions and images. It features:\n\n- **State Management**: Leveraging React hooks like `useState` and `useEffect` for seamless UI responsiveness. Mastery of asynchronous data fetching to handle user data and notes effectively.\n- **API Integration**: RESTful API handling with Axios, including custom Axios instances for streamlined request management, authentication headers, and robust error handling.\n- **Form Handling and Validation**: Designing user-friendly forms for creating and editing stories with proper validation logic, ensuring data integrity and smooth user interactions.\n- **Error Handling and Debugging**: Resolving bugs such as duplicate requests through refined `useEffect` dependencies and cleanup functions, optimizing app performance and network usage.\n- **UI Modals and Reusability**: Building reusable modals for adding and editing notes, maintaining a clean and modular codebase while effectively managing complex component hierarchies.\n\nThis project underscores the significance of clear component structure, effective debugging, and practical API handling. Moving forward, the goal is to enhance cloud deployment knowledge and gain hands-on experience with CI/CD pipelines.",
    image: TravelApp,
    demo: "/assets/travel-app.mp4",
    code: "https://github.com/jakuzzibubbles/TravelStory-App",
  },
  {
    id: "2",
    title: "Portfolio 1",
    description:
      "I focused on creating a responsive design that provides an optimal viewing experience across various devices. By leveraging CSS frameworks and techniques like Flexbox and Grid, I made sure that my website was not only visually appealing but also user-friendly.",
    image: Portfolio,
    demo: "https://jakuzzibubbles-portfolio.vercel.app/",
    code: "https://github.com/jakuzzibubbles/portfolio-react",
  },
  {
    id: "3",
    title: "Business Website",
    description:
      "I developed a website with a focus on improving its online visibility. My work included implementing strategic SEO optimization to boost the site's performance. As a result, the website advanced from the third page to the first page of Google search results within six months.",
    image: HpBrunner,
    demo: "https://www.hp-brunner.de/",
    code: "https://www.ionos.de/websites/homepage-baukasten",
  },
  {
    id: "4",
    title: "Task Manager",
    description:
      "This project is a simple notes application built using the MERN stack (MongoDB, Express, React, Node.js). It allows users to create, read, update, and delete notes while managing authentication.",
    image: TaskManager,
    demo: "https://jakuzzibubbles.github.io/MERN-Notes/",
    code: "https://github.com/jakuzzibubbles/MERN-Notes",
  },
  {
    id: "5",
    title: "Memory Game",
    description:
      "This is a React-based memory card game where players must click each food item only once. The game features randomized item order, score tracking, and a styled UI with a dynamic grid and modal popups.",
    image: MemoryGame,
    demo: "https://the-odin-project-mu.vercel.app/",
    code: "https://github.com/jakuzzibubbles/the-odin-project/tree/master/memory-card",
  },
  {
    id: "6",
    title: "Product Launch",
    description:
      "I executed a solo project to help an established Israeli sweets company introduce their latest product to the German confectionery market. I facilitated strategic meetings between key decision-makers, ensuring smooth collaboration. Since its launch, the product has won several prestigious awards.",
    image: Mooosh,
    demo: "https://tri-d-aix.com/sweet-stories/naschwatte/",
    code: "https://matokal.co.il/",
  },
];

export { skills, projects, personalDetails };
