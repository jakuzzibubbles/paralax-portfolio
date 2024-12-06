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
    intro:
      "The Travel App is a MERN stack application where users can securely log in, create, view, and manage travel stories with descriptions and images. Mongodb for data storage.",
    description:
      "🛠️ Learnings: \n\n- **State Management**: \nI initially struggled with effectively managing component state using React hooks like useState and useEffect. Asynchronous data fetching proved to be complex, particularly when handling user data and notes. However, through repeated attempts, I learned to leverage these hooks effectively, leading to improved UI responsiveness.\n\n- **API Integration with Axios**: \nIntegrating RESTful APIs using Axios provided key insights into handling HTTP requests and managing authentication headers. Configuring Axios instances streamlined request handling, and I gained valuable experience in managing errors, particularly related to authorization.\n\n- **Form Handling and Validation**: \nCreating a user-friendly UI for adding and editing notes/stories challenged my form management skills. Implementing proper validation logic ensured data integrity and a seamless user experience.\n\n- **Error Handling and Debugging**: \nAnother significant challenge was resolving a bug that resulted in duplicate requests. While this was frustrating, it ultimately improved the app's performance and underscored the importance of thorough testing. By refining the useEffect dependencies and gaining a deeper understanding of cleanup functions, I enhanced the app's efficiency and optimized network usage.\n\n- **UI Modals and Reusability**: \nImplementing reusable modals for adding and editing notes taught me the value of keeping the code modular and clean. This experience also strengthened my ability to handle complex component hierarchies within React.\n\n- **🗝️ Takeaways**: \nThis project demonstrates the importance of clear component structure and effective use of hooks. It taught me the value of careful debugging and API calls for functional applications. Moving forward, I plan to enhance my knowledge of cloud deployment and gain practical experience with CI/CD.",
    image: TravelApp,
    demo: "/assets/travel-app.mp4",
  },
  {
    id: "2",
    title: "Portfolio 1",
    intro:
      "Responsive design that provides an optimal viewing experience across various devices. By leveraging CSS frameworks and techniques like Flexbox and Grid.",
    description:
      "I focused on creating a responsive design that provides an optimal viewing experience across various devices. By leveraging CSS frameworks and techniques like Flexbox and Grid, I ensured that my website was not only visually appealing but also user-friendly.\n\nThe deployment process was another crucial phase of my learning. I chose Vercel for its seamless integration with frontend frameworks like React. Setting up the project on Vercel was straightforward, allowing me to deploy my site with just a few clicks.\n\nThroughout this process, I learned valuable lessons about problem-solving and debugging, especially when faced with issues related to responsive behavior. I also gained insights into best practices for web development, including version control with Git and effective deployment strategies.\n\n💡In conclusion, my journey in building and deploying a responsive website using React and Vite has been instrumental in advancing my skills in web development. This experience has provided a solid foundation for understanding application life cycles, which is critical for implementing effective CI/CD practices.\n\n### Version 1.1\n\nIn version 1.1 of this portfolio project, the focus is on enhancing the interactivity and functionality of the website. The key improvements include:\n\n1. **Social Media Integration**: ✅\n   - Adding functional links to social media icons, allowing users to directly connect with relevant platforms.\n\n2. **Contact Form Implementation**: ✅\n   - Connecting the contact form to a backend or database to allow form submissions.\n   - Ensuring form validation for proper data input and user experience.\n\n3. **UI/UX Enhancements**: ✅\n   - Refining the design and layout for a better user interface, improving scrolling effects and responsiveness across devices.\n\n4. **Backend Integration**: ✅\n   - Setting up a basic backend to handle form data (e.g., Node.js/Express or a serverless function).\n   - Possibly integrating with a database (e.g., MongoDB or another service) for storing form submissions.\n\n5. **Version Control & Deployment**: ✅\n   - Utilizing the staging branch for incremental updates and testing new features before pushing to production.\n   - Continuously deploying the staging branch via Vercel to preview and test functionalities before merging into the main branch.\n\n**Learning Objectives:**\n   - Practicing backend and database integration for form handling.\n   - Improving knowledge of deployment strategies and handling multiple environments (staging vs. production).",
    image: Portfolio,
    demo: "https://jakuzzibubbles-portfolio.vercel.app/",
  },
  {
    id: "3",
    title: "Business Website",
    intro:
      "My work included implementing strategic SEO optimization to boost the site's performance. As a result, the website ranked from the third page to the first page of Google search results within six months.",
      description: "I created a website for HP Brunner using IONOS, a platform similar to WordPress that offers pre-made templates for easy website building. My work involved analyzing competitors in the industry to identify gaps and opportunities for improvement. I then developed a new text strategy and optimized keywords based on user intent to improve the website's search engine ranking. Additionally, I focused on performance optimization to ensure fast load times and a seamless user experience. As a result, the site, which initially ranked on page 3 of Google search results, now ranks second on page 1, significantly improving visibility and traffic.",
    image: HpBrunner,
    demo: "https://www.hp-brunner.de/",
  },
  {
    id: "4",
    title: "Task Manager",
    intro:
      "This project is a simple notes application built using the MERN stack (MongoDB, Express, React, Node.js). It allows users to create, read, update, and delete notes while managing authentication.",
    description:
      "A note-taking application utilizing the MERN stack (MongoDB, Express, React, Node.js) that enables users to create, read, update, and delete notes, with authentication management.\n\n- Project Setup\n\n1. **Project Structure**:\n   - Create the project directory with `backend` and `frontend` folders.\n\n2. **Backend Setup**:\n   - Initialize Node.js project in the backend with `npm init -y`.\n   - Install dependencies: `express`, `mongoose`, `bcryptjs`, `jsonwebtoken`, `dotenv`, `cors`.\n   - Set up Express server and connect to MongoDB.\n   - Create API routes for user authentication and note management.\n\n3. **Frontend Setup**:\n   - Create the React app using Vite.\n   - Install dependencies: `axios`, `react-router-dom`, `react-icons`.\n   - Implement routing and UI components for note management and authentication.\n\n- Key Features\n- **Authentication**: User login and sign-up with JWT-based authentication.\n- **Dashboard**: Display and manage notes (create, edit, delete, pin).\n- **Note Management**: Add, edit, delete, and search notes with UI for creating new notes and editing existing ones.\n- **UI Elements**: Toast messages for notifications, icons for actions like pinning and deleting notes.\n\n- Dependencies\n\n- **Backend**:\n  - `express`, `mongoose`, `bcryptjs`, `jsonwebtoken`, `dotenv`, `cors`, `moment`.\n\n- **Frontend**:\n  - `axios`, `react-router-dom`, `react-icons`.",
    image: TaskManager,
    demo: "https://jakuzzibubbles.github.io/MERN-Notes/",
  },
  {
    id: "5",
    title: "Memory Game",
    intro:
      "React-based memory card game where players must click each food item only once. The game features randomized item order, score tracking, and a styled UI with a dynamic grid and modal popups.",
    description:
      'Component Structure:\n\nGameBoard:\n   - Main component managing game logic and displaying items.\n\nHeader:\n   - Displays the current and high scores.\n   - Reused useState for state management across components.\n\nGame Logic:\n   - Used useState to track:\n     - Clicked items (clickedCards).\n     - Game-over state (gameOver).\n     - Success state (allItemsClicked).\n     - Shuffled items after each valid click for randomness.\n\nUI Design:\n   - Arranged items in a grid layout with CSS-in-JS styling.\n   - Used a background image for the game board.\n   - Added modals for Game Over and Success messages.\n\nInteractivity:\n   - Attached click handlers to each item to detect interactions.\n   - Dynamically displayed modals based on the game\'s state.\n\nStyling:\n   - Inline styles for layout and responsiveness.\n   - Background image, grid alignment, and modal design for a polished look.\n\nDynamic Modals:\n   - Conditional rendering for "Game Over" or "Success" based on state changes.',
    image: MemoryGame,
    demo: "https://the-odin-project-mu.vercel.app/",
  },
  {
    id: "6",
    title: "Product Launch",
    intro:
      "Introduce a new product to the German confectionery market. I facilitated strategic meetings between key decision-makers, ensuring smooth collaboration.",
    description:
      "I worked as a freelancer on a project aimed at identifying potential distributors for a company's products in the German market. \n\n **Client Feedback**: 'Linh has worked as a freelancer on a project whose objective was to assemble a potential list of clients in Germany and arrange a meeting between the CEO of the client and the CEO of our company. Her list assembly was quick, efficient and was done with great expertise. Her understanding of the company's needs was outstanding. After the list assembly, she has made a good screening of the companies according to their interest in our product, and the meetings that were arranged were with the right people and with real potential clients for future closing of contracts. All in all, Linh has arranged in a relatively short time profound meetings. Working with her has saved the company time and money compared to other alternatives.'",
    image: Mooosh,
    demo: "https://tri-d-aix.com/sweet-stories/naschwatte/",
  },
];

export { skills, projects, personalDetails };
