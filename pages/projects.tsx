import React, { useState } from "react";
import { projects as projectData } from "../src/app/data";
import ProjectCard from "../components/ProjectCard";

const projects = () => {
  const [projects, setProjects] = useState(projectData);

  return (
    <div className="px-5 py-2 overflow-y-scroll" style={{ height: "65vh" }}>
      <div className="relative grid grid-cols-12 gap-4 my-3">
        {projects.map((project) => (
          <div className="col-span-12 p-2 bg-gray-200 sm:col-span-6 lg:col-span-4">
            <ProjectCard project={project} key={project.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default projects;
