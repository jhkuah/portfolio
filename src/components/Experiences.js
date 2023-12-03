import { BriefcaseIcon } from "@heroicons/react/solid";
import React from "react";
import { experiences } from "../data";

export default function Experiences() {
  return (
    <section id="experiences">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <BriefcaseIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Past Experience
          </h1>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {experiences.map((experience) => (
            <div key={experience} className="p-2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center flex-wrap">
                <h1 className="title-font text-lg font-medium text-white mb-2 w-full">
                  {experience.title}
                </h1>
                <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-2 w-100">
                  {experience.tenure}
                </h2>
                <h1 className="title-font text-md font-medium text-white mb-3 w-full">
                  {experience.position}
                </h1>
                {experience.descriptions.map((description) => (
                  <div className="w-full">
                    <li>{description}</li>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
