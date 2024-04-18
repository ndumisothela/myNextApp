import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { IService, IProject } from "./type";
import { AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend developer",
    about:
      "I cant build a beautiful and scalable SPA using HTML, CSS and React.js",
  },
  {
    Icon: FaServer,
    title: "Backend Developer ",
    about:
      "handle database, server , api using Express.js, MongoDB & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Developer ",
    about:
      "I can develop robust REST api using mongoDB, Authentication with authentication jwt and firebase",
  },
  {
    Icon: MdDeveloperMode,
    title: "Problem solver  ",
    about:
      "I believe in continuous learning, I will stop at nothing until I find a solution",
  },
];

export const projects: IProject[] = [
  {
    name: "HANGMAN GAME",
    image_path: "@/public/hang.jpg",
    description:
      "Hangman game is a guessing game, the player guess the letters needed to complete the word",
    deployed_url: "https://quiz-game-hangman.netlify.app/",
    github_url: "https://github.com/ndumisothela/hangman-game",
    category: ["react"],
    key_techs: ["React", "Bootsrap"],
  },
  {
    name: "To Do List App",
    image_path: "../public/todo.jpg",
    description:
      "You can add your to do list , and edit and delete any entry , you cant also mark any complete task ",
    deployed_url: "https://ndumiso-to-do-list-app.netlify.app/",
    github_url: "https://github.com/ndumisothela/to-do-list",
    category: ["react"],
    key_techs: ["React", "Redux"],
  },
];
