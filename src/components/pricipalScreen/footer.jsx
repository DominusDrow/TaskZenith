import React from "react";
import { FaGithub, FaLinkedin, FaBriefcase } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex flex-col items-center">
        <p className="text-xl font-bold">TaskZenith</p>
        <div className="flex mt-4">
          <a
            href="https://github.com/DominusDrow"
            className="text-gray-400 hover:text-white mr-6"
          >
            <FaGithub className="inline-block mr-2" />
            Github
          </a>
          <a
            href="https://linkedin.com/in/dominusdrow"
            className="text-gray-400 hover:text-white mr-6"
          >
            <FaLinkedin className="inline-block mr-2" />
            LinkedIn
          </a>
          <a
            href="https://yourportfolio.com"
            className="text-gray-400 hover:text-white"
          >
            <FaBriefcase className="inline-block mr-2" />
            Portafolio
          </a>
        </div>
      </div>
    </footer>
  );
}


