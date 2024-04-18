// Importing necessary modules and types from React and application
import React from "react";
import { IService } from "../src/app/type"; // Importing IService type
import { FunctionComponent } from "react";

// Functional Component 'ServiceCard' utilizing FunctionComponent type
const ServiceCard: FunctionComponent<{ service: IService }> = ({
  service: { Icon, about, title }, // Destructuring service object into Icon, about, and title
}) => {
  return (
    // Container representing a service card
    <div className="p-2  flex items-center shadow-slate-400 space-x-4 rounded-lg">
      {/* Displaying service Icon */}
      <Icon className="w-12 h-12 text-green-500" />
      <div>
        {/* Service title and about information */}
        <h4 className="font-bold">{title}</h4>
        <p>{about}</p>
      </div>
    </div>
  );
};

export default ServiceCard; // Exporting the ServiceCard component
