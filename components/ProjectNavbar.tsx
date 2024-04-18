// Importing necessary modules and types from React and the application
import React, { FunctionComponent } from "react";
import { Category } from "@/app/type"; // Importing Category type

// Functional Component 'NavItem' utilizing FunctionComponent type
export const NavItem: FunctionComponent<{
  value: Category | "all"; // Props: Represents a category or 'all'
  handlerFilterCategory: Function; // Props: Handles category filtering
  active: string; // Props: Indicates the active category
}> = ({ value, handlerFilterCategory, active }) => {
  // Dynamically setting CSS classes based on active state
  let className = "capitalize cursor-pointer hover:text-green";
  if (active === value) className += " text-green";

  return (
    // List item representing a category filter option
    <li className={className} onClick={() => handlerFilterCategory(value)}>
      {value}
    </li>
  );
};

// Functional Component 'ProjectNavbar' utilizing FunctionComponent type
const ProjectNavbar: FunctionComponent<{
  handlerFilterCategory: Function; // Props: Handles category filtering
  active: string; // Props: Indicates the active category
}> = (props) => {
  return (
    // Container for project category filters
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      {/* Rendering individual category filter items */}
      <NavItem value="all" {...props} /> {/* 'All' category */}
      <NavItem value="react" {...props} /> {/* 'React' category */}
      <NavItem value="mongo" {...props} /> {/* 'Mongo' category */}
      <NavItem value="django" {...props} /> {/* 'Django' category */}
      <NavItem value="node" {...props} /> {/* 'Node' category */}
    </div>
  );
};

export default ProjectNavbar; // Exporting the ProjectNavbar component
