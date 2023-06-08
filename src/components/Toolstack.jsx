import React from "react";
import { DiMongodb } from "react-icons/di";


import {
  FaLinux,
  FaCode,
  FaServer,
  FaWindows,
  FaMobile,
  FaAndroid,
  FaGithub,
  FaDatabase,
  FaFigma,
  FaYoutube,
} from "react-icons/fa";
import { SiHeroku, SiPostman } from "react-icons/si";
import { FiCode } from "react-icons/fi";


function Toolstack() {
  return (
    <section id="tools">
    <div className="md:flex grid grid-cols-2 justify-between md:px-40 px-4  md:flex-wrap  md:gap-4 gap-4">
      <div className="border-2 border-cyan-600 relative md:min-w-[10rem] md:max-w-[16rem] bg-gray-900 md:p-10 p-6 rounded-xl">
            <div className="md:text-6xl text-xl md:w-28 w-14  md:h-28 h-14 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                <div className="tech-icons">
                           <FaWindows className="tech-iconsmd:text-8xl text-4xl"/>
                </div>
            </div>
            <p className="mt-2">Windows</p>

        </div>
        <div className="border-2 border-cyan-600 relative md:min-w-[10rem] md:max-w-[16rem] bg-gray-900 md:p-10 p-6 rounded-xl">
            <div className="md:text-6xl text-xl md:w-28 w-14  md:h-28 h-14 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                <div className="tech-icons">
                <FaLinux className="tech-icons md:text-8xl text-4xl" />
                </div>
            </div>
            <p className="mt-2">Linux</p>

        </div>
        <div className="border-2 border-cyan-600 relative md:min-w-[10rem] md:max-w-[16rem] bg-gray-900 md:p-10 p-6 rounded-xl">
            <div className="md:text-6xl text-xl md:w-28 w-14  md:h-28 h-14 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                <div className="tech-icons">
                <FaYoutube className="tech-icons md:text-8xl text-4xl" />
                </div>
            </div>
            <p className="mt-2">Youtube</p>

        </div>
        <div className="border-2 border-cyan-600 relative md:min-w-[10rem] md:max-w-[16rem] bg-gray-900 md:p-10 p-6 rounded-xl">
            <div className="md:text-6xl text-xl md:w-28 w-14  md:h-28 h-14 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                <div className="tech-icons">
                <FaAndroid className="tech-icons md:text-8xl text-4xl" />
                </div>
            </div>
            <p className="mt-2">Studio</p>

        </div>
        <div className="border-2 border-cyan-600 relative md:min-w-[10rem] md:max-w-[16rem] bg-gray-900 md:p-10 p-6 rounded-xl">
            <div className="md:text-6xl text-xl md:w-28 w-14  md:h-28 h-14 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                <div className="tech-icons">
                <FaCode className="tech-icons md:text-8xl text-4xl" />
                 </div>
            </div>
            <p className="mt-2">VsCode</p>

        </div>
        <div className="border-2 border-cyan-600 relative md:min-w-[10rem] md:max-w-[16rem] bg-gray-900 md:p-10 p-6 rounded-xl">
            <div className="md:text-6xl text-xl md:w-28 w-14  md:h-28 h-14 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                <div className="tech-icons">
                <FiCode className="tech-icons md:text-8xl text-4xl" />
                 </div>
            </div>
            <p className="mt-2">Leetcode</p>

        </div>
        <div className="border-2 border-cyan-600 relative md:min-w-[10rem] md:max-w-[16rem] bg-gray-900 md:p-10 p-6 rounded-xl">
            <div className="md:text-6xl text-xl md:w-28 w-14  md:h-28 h-14 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                <div className="tech-icons">
                <SiHeroku className="tech-icons md:text-8xl text-4xl"/>
                 </div>
            </div>
            <p className="mt-2">Heroku</p>

        </div>

        <div className="border-2 border-cyan-600 relative md:min-w-[10rem] md:max-w-[16rem] bg-gray-900 md:p-10 p-6 rounded-xl">
            <div className="md:text-6xl text-xl md:w-28 w-14  md:h-28 h-14 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                <div className="tech-icons ">
                <SiPostman className="md:text-8xl text-4xl"/>
                 </div>
            </div>
            <p className="mt-2">Postman</p>

        </div>
        <div className="border-2 border-cyan-600 relative md:min-w-[10rem] md:max-w-[16rem] bg-gray-900 md:p-10 p-6 rounded-xl">
            <div className="md:text-6xl text-xl md:w-28 w-14  md:h-28 h-14 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                <div className="tech-icons">
                <FaGithub className="tech-icons md:text-8xl text-4xl"/>
                 </div>
            </div>
            <p className="mt-2">Github</p>
        </div>
        
        </div>
        </section>
  );
}

export default Toolstack;
