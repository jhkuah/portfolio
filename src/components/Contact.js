import React from "react";
import { MailIcon, GlobeAltIcon, ChatAlt2Icon } from "@heroicons/react/solid";

const contactInfo = [
  {
    icon: MailIcon,
    text: "kjh_1997@hotmail.com",
    link: "mailto:kjh_1997@hotmail.com",
  },
  {
    icon: GlobeAltIcon,
    text: "LinkedIn",
    link: "https://www.linkedin.com/in/jhkuah/",
  },
  {
    icon: ChatAlt2Icon,
    text: "GitHub",
    link: "https://github.com/jhkuah",
  },
];

export default function Contact() {
  return (
    <section id="contact">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChatAlt2Icon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Connect with Me
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
            ipsa delectus eum quo voluptas aspernatur accusantium distinctio
            possimus est.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {contactInfo.map((info, index) => (
            <div key={index} className="p-2 sm:w-1/2 w-full">
              <a href={info.link} target="_blank" rel="noopener noreferrer">
                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                  <info.icon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                  <span className="title-font font-medium text-white">
                    {info.text}
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
