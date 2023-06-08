import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination, Autoplay } from 'swiper';

const Project = () => {
     const amharabank1 = "src/assets/images/amahara_bank4.jpg";
     const farmadvisor = "src/assets/images/farmport.png";
     const crimeReporter = "src/assets/images/crime_report.png";
     const virtualCard = "src/assets/images/virutal_card.jpg";
     const yeneHub = "src/assets/images/abi_post.png"

     const projects=[
          {
               img:amharabank1,
               name:" Amahara Bank Mobile Banking Application",
               github_link:"https://github.com/Temesgenzewude/Amhara-Bank-Mobile-Banking"
          },
           {
               img:crimeReporter,
               name:" Crime Reporter Mobile Application",
               github_link:"https://github.com/AAiT-3rdyear/crime-reporter"
          },
          {
               img:farmadvisor,
               name:" FarmAdvisor Mobile  Application",
               github_link:"https://github.com/Temesgenzewude/Farm_Advisor_Android"
          },
         
          {
               img:virtualCard,
               name:" Virtaul Gift Card Application",
               github_link:"https://github.com/Temesgenzewude/virtual-card-project"
          },
          {
            img :yeneHub,
            name:"YeneHub Social Media Fullstack Website",
            github_link:"https://github.com/abi26anamo/YeneHub"
          }
     ];
  return (
    <section id="projects" className="py-10 h-11/12 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Checkout my works right here</p>
      </div>
      <br />
      <div className="flex max-w-text-6xl md:ml-24 ml-4 mx-auto max-h-11/12 items-center justify-center relative">
  <div className="md:w-4/5 w-full h-11/12">
    <Swiper
      slidesPerView={1.2}
      spaceBetween={40}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
      }}
      loop={true}
      autoplay={{
        delay: 3000,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
    >
      {projects.map((project, i) => (
        <SwiperSlide key={i}>
          <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
            <img
              className=" w-full object-cover rounded-xl !important" 
              src={project.img}
              alt=""
              style={{height:'500px'}}
            />
            <h3 className="text-xl my-4">{project.name}</h3>
            <div className="flex gap-3">
              <a
                className="text-cyan-600 g-gray-800 px-2 py-1 inline-block"
                href={project.github_link}
                target="_blank"
              >
                Preview
              </a>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</div>

    </section>
  );
};

export default Project;
