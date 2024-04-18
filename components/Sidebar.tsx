// Importing necessary modules, components, and icons
import React from "react";
import pro from "../public/pro.jpg"; // Importing profile picture
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai"; // Importing social media icons
import { MdAlternateEmail } from "react-icons/md"; // Importing email icon
import { GoLocation } from "react-icons/go"; // Importing location icon
import { GiTie } from "react-icons/gi"; // Importing tie icon
import Image from "next/image"; // Importing Next.js image component

function Sidebar() {
  return (
    <div>
      {/* Displaying the profile picture */}
      <Image
        className="w-32 h-32 rounded-full mx-auto"
        src={pro}
        alt="propic"
      />

      {/* Displaying name and role */}
      <h1 className="my-4 text-2xl font-medium tracking-wider font-kaushan">
        <span>NDUMISO</span> THELA
      </h1>

      {/* Displaying job title */}
      <p className="px-2 my-3 bg-gray-200 rounded-full">Web Developer</p>

      {/* Download Resume section */}
      <p className="px-2 my-3 bg-gray-200 rounded-full flex item-center justify-center">
        <GiTie className="w-6 h-6" />
        Download Resume
      </p>

      {/* Social media icons section */}
      <div className="flex justify-around w-9/12 md:w-full my-5 text-green-500 mx-auto">
        <a href="">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillYoutube className="w-8 h-8 cursor-pointer" />
        </a>
      </div>

      {/* Address section */}
      <div
        className="py-4 my-5 bg-gray-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        {/* Displaying location */}
        <div className="space-x-2 flex items-center justify-center">
          <GoLocation />
          <span>Germiston, South Africa</span>
        </div>

        {/* Displaying email */}
        <div className="space-x-2 flex items-center justify-center my-2">
          <MdAlternateEmail />
          <span>ndumisothela480@gmail.com</span>
        </div>

        {/* Displaying phone number */}
        <p>072 885 4482</p>
      </div>

      {/* Email Me button */}
      <div>
        <button
          className="bg-gradient-to-r from-green-400 to-blue-400 rounded-full py-2 px-2 my-2 w-8/12"
          onClick={() => window.open("mailto:ndumisothela480@gmail.com")}
        >
          Email Me
        </button>

        {/* Toggle Theme button (placeholder) */}
        <button className="bg-gradient-to-r from-green-400 to-blue-400 rounded-full py-2 px-2 my-2 w-8/12">
          Toggle Theme
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
