import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination, Autoplay } from 'swiper';
import serverSide from "../assets/images/server_side.jpeg";
import react from "../assets/images/react.jpeg";
import software from "../assets/images/softare_developement.jpeg";
import github from "../assets/images/git_and_github.jpeg";
import django from "../assets/images/web_djano_coru.jpeg";

const Certificates = () => {
     


     const projects=[
          {
               img:serverSide,
               name:" Server-side Development with NodeJS, Express and MongoDB",
               github_link:"https://www.coursera.org/account/accomplishments/verify/C8AY68E43J9S"
          },
          {
               img:react,
               name:" Front-End Web Development with React",
               github_link:"https://www.coursera.org/account/accomplishments/verify/PZF9KHMS62XW"
          },
          {
            img:software,
            name:" Software Development Processes and Methodologies",
            github_link:"https://www.coursera.org/account/accomplishments/verify/KH8RVYDDDZTX"
       },
       {
            img:github,
            name:" Introduction to Git and GitHub",
            github_link:"https://www.coursera.org/account/accomplishments/verify/9NFUBZ6GXAP2"
       },
       {
        img:django,
        name:"Web Application Technologies and Django",
        github_link:"https://www.coursera.org/account/accomplishments/verify/J6PW8U89MS3L"
   }
     ];
  return (
    <section id="certificates" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Certificates</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome Certificates </p>
      </div>
      <br />
      <div className="  flex md:max-w-text-6xl md:ml-24 ml-4 mx-auto items-center justify center relative">
        <div className=" md:w-4/5 w-full h-1/2">
          <Swiper
            slidesPerView={1.2}
            spaceBetween={40}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
            }}
            loop={true}
            autoplay={{
              delay: 5000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {
               projects.map((project,i)=>(
               <SwiperSlide key={i}>
              <div className="h-fit w-fit p-4 bg-slate-700 rounded-xl">
               
                <img src={project.img} alt="" className="rounded-lg" style={{height:'300px',width:'300px'}}
 />
                <h3 className="md:text-xl my-4">
                    {project.name}
                  </h3>
                <div className="flex gap-3">
                  <a className="text-cyan-600 g-gray-800 px-2 py-1 inline-block" href={project.github_link} target='_blank'>
                    Preview
                  </a>
                </div>
              </div>
            </SwiperSlide>
               ))
            }
           
          </Swiper>
        </div>
       
      </div>
    </section>
  );
};

export default Certificates;
