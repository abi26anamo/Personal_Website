import React from "react";
import TechStack from "./Techstack";

const Skill = ()=>{

     return <section id="skills" className="py-10 bg-gray-800 relative">
          <div className="mt-8 text-gray-100 text-center">
                <h3 className="text-4xl font-semibold">
               My <span className="text-cyan-600">Skills</span>
                </h3>
                <p className="text-gray-400 mt-3 text-lg">These are technologies I have been working with.</p>
                <TechStack/>
          </div>
          
     </section> ;
};

export default Skill;