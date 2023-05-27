import React from "react";
import TechStack from "./Techstack";

import {
     SiFlutter,
     SiMysql,
     SiMongodb,
     SiDart,
     SiTailwindcss,
     SiPython,
     SiJavascript,
     SiReact,
     SiHtml5,
     SiCss3,
     SiBootstrap,
     SiDjango,
   } from "react-icons/si";
const Skill = ()=>{
     const flutterimage = "src/assets/images/flutter_logo.png";
     const skill = [
          {logo:{SiFlutter},level:"HTML",count:86},
          {logo:'logo-css3',level:"CCS",count:87},
          {logo:'logo-react',level:"REACTJS",count:80},
          {logo:'logo-nodejs',level:"NODEJS",count:80},
          {logo:'logo-python',level:"PYTHON",count:96},
          {logo:'logo-nodejs',level:"NODEJS",count:86},
          {logo:'logo-angular',level:"ANGULAR",count:86},
          {logo:'logo-github',level:"GIT",count:100},
          {logo:'logo-javascript',level:"JAVASCRIPT",count:86},
          {logo:{flutterimage},level:"Flutter",count:96}
     ];

     return <section id="skills" className="py-10 bg-gray-800 relative">
          <div className="mt-8 text-gray-100 text-center">
                <h3 className="text-4xl font-semibold">
               My <span className="text-cyan-600">Skills</span>
                </h3>
                <p className="text-gray-400 mt-3 text-lg">This are technologies I have been working with.</p>
                <TechStack/>
          </div>
     </section> ;
};

export default Skill;