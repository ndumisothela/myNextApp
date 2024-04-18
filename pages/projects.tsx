// Importing necessary modules, components, and images
import React from "react";
import dex from "../public/dex.jpg";
import hang from "../public/hang.jpg";
import Image from "next/image";
import todo from "../public/todo.jpg";

// Functional component representing a section showcasing projects
const Projects = () => {
  return (
    <div className="overflow-y">
      {/* First project */}
      <div className="flex-col grid-cols-2 mx-3 my-1 rounded-lg text-black p-2 border-2">
        {/* Image related to the project */}
        <Image className="w-auto h-20" src={dex} alt="" />
        {/* Project title */}
        <h2 className="font-bold">Pokeman</h2>
        {/* Project description */}
        <p className="my-1">This program is created with React.js</p>
        {/* Link to view the site */}
        <a
          className="bg-blue-500 rounded-lg my-1 p-2 mx-2"
          href="https://pokeman-dex.netlify.app/"
          target="_blank"
        >
          View site
        </a>
        {/* Link to GitHub repository */}
        <a
          className="bg-yellow-500 p-2 my-1 rounded-lg"
          href="https://github.com/ndumisothela/pokedex"
          target="_blank"
        >
          Github
        </a>
      </div>

      {/* Second project */}
      <div className="flex-col mx-3 my-1 rounded-lg text-black p-2 border-2">
        {/* Image related to the project */}
        <Image className="w-auto h-20" src={hang} alt="" />
        {/* Project title */}
        <h2 className="font-bold">Hangman-Game</h2>
        {/* Project description */}
        <p className="my-1">
          The player guesses the letters needed to complete the mystery word.
        </p>
        {/* Link to view the site */}
        <a
          className="bg-blue-500 rounded-lg p-2 mx-2"
          href="https://quiz-game-hangman.netlify.app/"
          target="_blank"
        >
          View site
        </a>
        {/* Link to GitHub repository */}
        <a
          className="bg-yellow-500 p-2 my-1 rounded-lg"
          href="https://github.com/ndumisothela/hangman-game"
          target="_blank"
        >
          Github
        </a>
      </div>

      {/* Third project */}
      <div className="flex-col mx-3 my-1 w-auto h-50 space-x-4 rounded-lg text-black p-2 border-2">
        {/* Image related to the project */}
        <Image className="w-auto h-20" src={todo} alt="" />
        {/* Project title */}
        <h2 className="font-bold">To-Do List</h2>
        {/* Project description */}
        <p className="my-1">
          A to-do-list app created with React.js, Express, and MongoDB.
        </p>
        {/* Link to view the site */}
        <a
          className="bg-blue-500 rounded-lg p-2 mx-2"
          href="https://ndumiso-to-do-list-app.netlify.app"
          target="_blank"
        >
          View site
        </a>
        {/* Link to GitHub repository */}
        <a
          className="bg-yellow-500 p-2 rounded-lg"
          href="https://github.com/ndumisothela/to-do-list"
          target="_blank"
        >
          Github
        </a>
      </div>
    </div>
  );
};

export default Projects;
