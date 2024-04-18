// Importing necessary React components and icons
import React from "react";
import {
  SiJavascript,
  SiNextdotjs,
  SiTypescript,
  SiFirebase,
  SiBootstrap,
  SiExpress,
  SiWix,
} from "react-icons/si";
import { AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import {
  BiLogoCss3,
  BiLogoTailwindCss,
  BiLogoReact,
  BiLogoNodejs,
} from "react-icons/bi";
import { DiMongodb } from "react-icons/di";

// Functional component representing a resume section
const resume = () => {
  return (
    <div className="p-4 bg-gray-500 text-white">
      {/* Section for Career Objective */}
      <h2 className="font-bold text-gray-500 my-1 bg-white p-2 rounded">
        CAREER OBJECTIVE
      </h2>
      {/* Career Objective Description */}
      <p className="text-base p-1">
        I am a junior Web Developer, with a passion for coding and
        problem-solving.
      </p>

      {/* Section for Programming Languages and Technologies */}
      <div>
        <h3 className="font-bold text-gray-500 my-1 bg-white p-2 rounded">
          Programming Languages & Technologies
        </h3>
        {/* List of Programming Languages and Technologies */}

        {/* First set of technologies */}
        <div>
          <ul className="flex justify-around">
            <div>
              <li className="flex items-center ">
                <SiJavascript />
                <p>JavaScript</p>
              </li>
              <li className="flex items-center ">
                <AiFillHtml5 />
                HTML
              </li>
              <li className="flex items-center ">
                <BiLogoCss3 />
                CSS
              </li>
              <li className="flex items-center ">
                <SiBootstrap />
                Bootstrap
              </li>
              <li className="flex items-center ">
                <SiFirebase />
                Firbase
              </li>
              <li className="flex items-center ">
                <BiLogoReact />
                React.js
              </li>
              <li className="flex items-center ">
                <AiFillGithub />
                Github
              </li>
            </div>
            <div>
              <li className="flex items-center ">
                <BiLogoNodejs />
                Node.js
              </li>
              <li className="flex items-center ">
                <SiExpress />
                Express.js
              </li>
              <li className="flex items-center ">
                <DiMongodb />
                MongoDB
              </li>
              <li className="flex items-center ">
                <SiNextdotjs />
                Next.js
              </li>
              <li className="flex items-center ">
                <BiLogoTailwindCss />
                Tailwind.css
              </li>
              <li className="flex items-center ">
                <SiTypescript />
                TypeScript
              </li>
              <li className="flex items-center ">
                <SiWix />
                Wix
              </li>
            </div>
          </ul>
        </div>
      </div>

      {/* Section for Work History */}
      <div>
        <h2 className="font-bold text-gray-500 my-1 bg-white p-2 rounded">
          WORK HISTORY
        </h2>
        {/* Work Experience */}
        <h3>KEY ACCOUNT MANAGER - RAND MUTUAL ASSURANCE - 2021</h3>
        <p>
          {/* Work details */}
          {/* ... */}• Managing and building strong relationships with key
          clients and new clients • Source for new clients for RMA • Sell group
          funeral plans to companies, funeral parlours and churches • Selling
          corporate funeral plan • Selling corporate employee benefits •
          Diagnose and understand the client’s business problems and identify
          keys to success for client that we can solve. • On-board clients to
          RMA • Market and present the new RMA products to new clients and
          existing clients • Assist existing RMA clients with any challenges and
          provide solutions to strengthen the relationship • Up-sell and
          cross-sell the existing clients to new RMA products. • Monitored sales
          and feedback from customers. • Continually researched new business
          opportunities in the market. • Answered customer queries and concerns
          to the best of my ability.
        </p>
      </div>
    </div>
  );
};

export default resume;
