// Importing necessary modules and components from React and Next.js
import React, { FunctionComponent } from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// Functional Component 'NavItem' utilizing FunctionComponent type
const NavItem: FunctionComponent<{
  activeItem: string;
  setActiveItem: Function;
  name: string;
  route: string;
}> = ({ activeItem, name, route, setActiveItem }) => {
  return (
    // Conditionally rendering Link based on activeItem state
    activeItem !== name ? (
      <Link href={route}>
        <span
          className="hover:text-green-500"
          onClick={() => setActiveItem(name)}
        >
          {name}
        </span>
      </Link>
    ) : null
  );
};

// Functional Component 'Navbar'
function Navbar() {
  // State to track the active item in the navigation
  const [activeItem, setActiveItem] = useState<string>("");

  // Hook to access Next.js router
  const { pathname } = useRouter();

  // Effect to set the activeItem based on the current path
  useEffect(() => {
    if (pathname === "/") setActiveItem("About");
    if (pathname === "/projects") setActiveItem("Projects");
    if (pathname === "/resume") setActiveItem("Resume");
  }, [pathname]);

  return (
    // Navbar structure
    <div className="flex justify-between mx-5 p-4 border-b-2">
      {/* Displaying the active item */}
      <span className="font-bold text-xl border-b-4 border-green-500 text-green-500 md:text-2xl">
        {activeItem}
      </span>
      {/* Navigation links */}
      <div className="text-red-400 text-lg space-x-3 flex">
        {/* NavItem components for different sections */}
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="About"
          route="/"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Projects"
          route="/projects"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Resume"
          route="/resume"
        />
      </div>
    </div>
  );
}

export default Navbar;
