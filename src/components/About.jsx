import React from "react";


const About = ()=>{
     const abtImage = "src/assets/images/hero.JPG";
     const info = [
          {text:'Years Experience', count:'04'},
          {text:'Completed Projects', count:'14'},
          {text:'Company works', count:'02'}
     ]
     return <section id="about" className="md:py-10  text-white">
      <div className="text-center mt-8">
       <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>

       </h3>
       <p className="text-gray-400 my-3 text-lg"> Let me introduce myself</p>

       <div className="w-full">
          <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12   max-w-6xl md:h-4/5 mx-auto justify-between">
               <div className=" text-gray-300 md:w-11/12 my-3 flex flex-col justify-center md:gap-5 gap-3">
                    <p className="md:text-justify text-justify-center leading-7 md:w-full w-11/12 mx-auto">
                    Experienced Software Engineer with hands-on experience in mobile app development using flutter,
                    web development using React, Node.js, MongoDB, Express.js, Django, as well as experienced Python developer. 
                    Adept at problem-solving and able to identify and resolve issues quickly.
                     Skilled in working with cross-functional teams to deliver successful projects.</p>
                   
                    <div className=" flex md:flex-row flex-row items-center md:py-3 md:gap-8 gap-4">
                        {
                         info?.map((info)=>(
                              <div key={info.text}>
                                   <h3 className="md:text-3xl text-2xl font-semibold text-white">
                                        {info.count}
                                        <span className="text-cyan-600">+</span>{" "}

                                   </h3>
                                   <span className="md:text-base text-xs">{info.text}</span>
                              </div>
                         ))
                        }
                       
                    </div>
                    <br />
                    <br />
                    <div className="md:w-1/4">
                    <a href="./src/assets/MyCv@Best.pdf" download>
                    <button className="btn-primary" >Download cv</button>
                    </a>
                    </div>
                   
               </div>
               <div className="flex-1 flex justify-center items-center md:h-full">
                    <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12  max-w-sm ">
                         <img src={abtImage}  alt="" className="w-full object-cover h-full gb-cyan-600 rounded-xl" />
                    </div>
               </div>
               
          </div>

          </div>
      </div>

     </section>;
};

export default About;