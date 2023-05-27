import React from "react";


const Hireme = ()=>{
     const hireMe = "src/assets/images/hero.JPG";
     return <section id="hireme" className="py-10 px-3 text-white">
        <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p>
        <div className=" flex-1 bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
          <div className="text-left md:w-1/2">
             <h2 className=" text-2xl font-semibold">
               Do you have any work from me?
               </h2>

             <p className="lg:text-left text-justify    mx-w-lg text-sm mt-4 text-gray-200 leading-6 md:w-11/12 object-cover">
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita rerum iste aliquam cumque harum commodi iure molestias provident? Officiis, minus. Voluptatem laboriosam alias officia sit distinctio vitae quo rem aliquid.
             </p>
            
             <button className="btn-primary mt-10">
               sayHello
             </button>
          </div>
        
          <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12  max-w-sm ">
               <img src={hireMe} alt="" className="w-full object-cover h-full gb-cyan-600 rounded-xl" />
          </div>
          

        </div>
        </div>
     </section>;
};

export default Hireme; 