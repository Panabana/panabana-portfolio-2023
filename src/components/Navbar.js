import { ArrowDownIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-x1">
            Alexander Bengtsson @Panabana
          </a>
        </div>
        <nav className="md:mr-auto md:ml-10 md:py-1 md:pl-4 md:border-1 md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <p className="mr-10">|</p>
          <a href="#projects" className="mr-10 hover:text-white">
            Projects
          </a>
          <p className="mr-10">|</p>
          <a href="#skills" className="mr-10 hover:text-white">
            Skills
          </a>
          <p className="mr-10">|</p>
          <a href="#work" className="mr-10 hover:text-white">
            Past Jobs
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:text-white rounded text-base mt-4 md:mt-0">
          CONTACT
          <ArrowDownIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}