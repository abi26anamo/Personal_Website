import React from "react";
import Type from "./Type";

const Home = ()=>{
    const hero = "src/assets/images/hero.JPG";
  
    const social_media = [
        {logo:"logo-linkedin",link:"https://www.linkedin.com/in/abinet-anamo-668a40216"},
        {logo:"logo-instagram",link:"https://instagram.com/abinetanamo26?igshid=ZGUzMzM3NWJiOQ=="},
        {logo:"logo-facebook",link:"https://www.facebook.com/abinet.anamo"},
        {logo:"logo-twitter",link:"https://twitter.com/abianamo282"},
    ];
    return (
    <section
        id="home" 
        className="min-h-screen flex py-10 md:flex-row flex-col items-center ">
        <div className="flex-1  items-center justify-center h-full">
          <img src={hero} alt=""  className="md:w-11/12 h-full object-cover rounded-xl"/>
        </div>
        <div className="flex-1 ">
            <div className="md:text-left text-center">
                <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
                <span className="text-cyan-600 md:text-6xl text-5xl">
                    Hi there!
                </span>
                <br />
                I AM <span>ABINET ANAMO</span>
                </h1>
           
           <div className="md:text-4xl text-lg md:leading-normal leading-5 mt-4 font-bold text-cyan-600"><Type/></div>
           </div>
           <button  className="btn-primary mt-8"><a href="#contact">ContactMe</a></button>
           <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5 ">
            {
            social_media?.map((icon,i)=>(
                <div key={i} className="text-gray-600 hover:text-white cursor-pointer">
                    <a href={icon.link} target="_blank"><ion-icon name={icon.logo}></ion-icon></a>
                </div>
                ))
            }
           </div>
    </div>
    </section>
    );
};

export default Home;