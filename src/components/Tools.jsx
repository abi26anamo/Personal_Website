import React from "react";
import Toolstack from "./Toolstack";
import Github from "./CodeDay";

const Tools = ()=>{
    return (
        <section id="tools">
           <div className="mt-8 text-gray-100 text-center">
                <h3 className="text-4xl font-semibold">
               These <span className="text-cyan-600"> are Tools</span> I use on <span className="text-cyan-600">daily basis</span>
                </h3>
                <div className="mt-8">
                <Toolstack/>
                </div>
          </div>

          <div>
            <Github/>
          </div>
        </section>
    );
}

export default Tools;