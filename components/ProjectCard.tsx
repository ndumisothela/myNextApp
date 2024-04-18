// Importing necessary modules and components
import React from "react";
import { FunctionComponent, useState } from "react";
import { IProject } from "@/app/type"; // Importing the project interface
import Image from "next/image";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";

// Functional Component 'ProjectCard' utilizing FunctionComponent type
const ProjectCard: FunctionComponent<{ project: IProject }> = ({
  project: {
    name,
    description,
    image_path,
    deployed_url,
    github_url,
    category,
    key_techs,
  },
}) => {
  // State to manage displaying project details
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div>
      {/* Image displayed as a clickable element */}
      <Image
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetail(true)}
        layout="responsive"
        height="150"
        width="300"
      />
      <p className="my-2 text-center">{name}</p>

      {/* Conditional rendering of detailed project information */}
      {showDetail && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
          <div>
            {/* Detailed image view */}
            <Image
              src={image_path}
              alt={name}
              className="cursor-pointer"
              onClick={() => setShowDetail(true)}
              layout="responsive"
              height="150"
              width="300"
            />
            {/* Buttons for GitHub and Deployed Project links */}
            <div className="flex justify-center my-4 space-x-3">
              <a
                href={github_url}
                className="flex items-center px-4 py-2 space-x-3 bg-gray-200 text-lg dark:bg-dark-200"
              >
                <AiFillGithub />
                <span>Github</span>
              </a>
              <a
                href={deployed_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillProject /> <span>Project</span>
              </a>
            </div>
          </div>
          <div>
            {/* Detailed project information */}
            <h2 className="mb-3 text-xl font-medium md:text-2xl">{name}</h2>
            <h3 className="mb-3 font-medium">{description}</h3>

            {/* Displaying key technologies used */}
            <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
              {key_techs.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounde-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Button to close the detailed view */}
          <button
            onClick={() => setShowDetail(false)}
            className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
