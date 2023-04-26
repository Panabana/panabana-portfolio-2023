import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { programmingSkills } from "../data";
import { ideSkills } from "../data";
import { techSkills } from "../data";
import { webSkills } from "../data";
import { frameworkSkills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-100 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4x1 text-3x1 font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
        </div>
        <div className="text-center mb-2">
          <p className="sm:text-4x1 text-3x1 title-font text-white">
            Programming Languages
          </p>
        </div>
        <div className="flex flex-wrap lg:w-5/6 pb-12 sm:mx-auto sm:mb-2 -mx-2 place-content-center">
          {programmingSkills.map((skill) => (
            <div key={skill} className="p-4 sm:w-1/4 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mb-2">
          <p className="sm:text-4x1 text-3x1 title-font text-white">
            IDEs
          </p>
        </div>
        <div className="flex flex-wrap lg:w-5/6 pb-12 sm:mx-auto sm:mb-2 -mx-2 place-content-center">
          {ideSkills.map((skill) => (
            <div key={skill} className="p-4 sm:w-1/4 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mb-2">
          <p className="sm:text-4x1 text-3x1 title-font text-white">
            Technologies
          </p>
        </div>
        <div className="flex flex-wrap lg:w-5/6 pb-12 sm:mx-auto sm:mb-2 -mx-2 place-content-center">
          {techSkills.map((skill) => (
            <div key={skill} className="p-4 sm:w-1/4 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mb-2">
          <p className="sm:text-4x1 text-3x1 title-font text-white">
            Web & Databases
          </p>
        </div>
        <div className="flex flex-wrap lg:w-5/6 pb-12 sm:mx-auto sm:mb-2 -mx-2 place-content-center">
          {webSkills.map((skill) => (
            <div key={skill} className="p-4 sm:w-1/4 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mb-2">
          <p className="sm:text-4x1 text-3x1 title-font text-white">
            Frameworks
          </p>
        </div>
        <div className="flex flex-wrap lg:w-5/6 pb-12 sm:mx-auto sm:mb-2 -mx-2 place-content-center">
          {frameworkSkills.map((skill) => (
            <div key={skill} className="p-4 sm:w-1/4 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}