import {
  FaBootstrap,
  FaCss3Alt,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaReact,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiMui, SiReactrouter } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { VscVscodeInsiders } from "react-icons/vsc";

/**nav items */
const navItems = [
  {
    text: "Hime",
    href: "#home",
    aos: "fade-down",
    aosEasing: "linear",
    aosDuration: "1000",
  },
  {
    text: "About",
    href: "#about",
    aos: "fade-down",
    aosEasing: "linear",
    aosDuration: "1500",
  },
  {
    text: "Skills",
    href: "#skills",
    aos: "fade-down",
    aosEasing: "linear",
    aosDuration: "2000",
  },
  {
    text: "Projects",
    href: "#projects",
    aos: "fade-down",
    aosEasing: "linear",
    aosDuration: "2000",
  },
  {
    text: "Contact",
    href: "#contact",
    aos: "fade-down",
    aosEasing: "linear",
    aosDuration: "2500",
  },
];
/**skills */
const MySkills = [
  {
    name: "HTML",
    level: 95,
    category: "Languages & Markup & Styling",
    icon: <FaHtml5 />,
  },
  {
    name: "CSS",
    level: 95,
    category: "Languages & Markup & Styling",
    icon: <FaCss3Alt />,
  },
  {
    name: "JavaScript",
    level: 87,
    category: "Languages & Markup & Styling",
    icon: <IoLogoJavascript />,
  },

  /**Frameworks/Libraries */

  {
    name: "React.js",
    level: 85,
    category: "Frameworks/Libraries",
    icon: <FaReact />,
  },
  {
    name: "Next.js",
    level: 70,
    category: "Frameworks/Libraries",
    icon: <RiNextjsFill />,
  },
  {
    name: "Redux Toolkit",
    level: 85,
    category: "Frameworks/Libraries",
    icon: <TbBrandRedux />,
  },
  {
    name: "React Router",
    level: 85,
    category: "Frameworks/Libraries",
    icon: <SiReactrouter />,
  },
  {
    name: "Tailwind CSS",
    level: 95,
    category: "Frameworks/Libraries",
    icon: <RiTailwindCssFill />,
  },
  {
    name: "Bootstrap",
    level: 85,
    category: "Frameworks/Libraries",
    icon: <FaBootstrap />,
  },
  { name: "MUI", level: 75, category: "Frameworks/Libraries", icon: <SiMui /> },

  /**Tools */
  { name: "Git", level: 90, category: "Tools", icon: <FaGitAlt /> },
  { name: "GitHub", level: 90, category: "Tools", icon: <FaGithub /> },
  { name: "Vscode", level: 95, category: "Tools", icon: <VscVscodeInsiders /> },
  { name: "Figma", level: 70, category: "Tools", icon: <FaFigma /> },
];
/**Category */
const Categorys = [
  "all",
  "Languages & Markup & Styling",
  "Frameworks/Libraries",
  "Tools",
];
/**My Projects */
const MyProjects = [
  {
    id: 1,
    title: "E-commerce app",
    description:
      "e-commerce website as part of a team of 7 members during the Web Masters training program. The website features interactive user interfaces and a practical user experience, built using React.js and TailwindCSS.",
    image: "project1.png",
    tags: ["Reat JS", "Tailwind CSS"],
    demoUrl: "https://basket-ecommerce.netlify.app/",
    githubUrl: "https://github.com/shyl1/e-commerce.git",
  },
  {
    id: 2,
    title: "Restaurant app",
    description:
      " restaurant website with interactive user interfaces and a practical user experience.",
    image: "/project2.png",
    tags: ["Next JS", "Tailwind CSS"],
    demoUrl: "https://hagoga.netlify.app/",
    githubUrl: "https://github.com/Ahmedrashwan0/Hagoga.git",
  },
  {
    id: 3,
    title: "Movies app",
    description:
      "movie website with interactive user interfaces and a practical user experience The website was built using React.js and TailwindCSS.",
    image: "/project3.png",
    tags: ["React JS", "MUI"],
    demoUrl: "https://movies-app000.netlify.app/",
    githubUrl: "https://github.com/Ahmedrashwan0/movies-app.git",
  },
  {
    id: 4,
    title: "Crud Operations",
    description:
      "CRUD OPerations website as part of a team of 5 members during the Web Masters training program. The website features interactive user interfaces and a practical user experience, built using React.js and TailwindCSS.",
    image: "/project4.png",
    tags: ["React JS", "Tailwind CSS"],
    demoUrl: "https://crud-seven-wheat.vercel.app/",
    githubUrl: "https://github.com/Ftmamhmod/Crud-Operations.git",
  },
];

export { navItems, MySkills, Categorys, MyProjects };
