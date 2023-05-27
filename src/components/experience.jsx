import React from "react";

const Expericence = ()=>{
    return  <div className="w-full grid md:grid-cols-5  items-center justify-center mt-12 gap-2 md:px-10 flex-wrap">
    {
       skill?.map((skill,i)=>(
            <div className="border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 md:p-10 p-6 rounded-xl">
       <div key={i} style={{
            background:`conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
       }} className="md:w-32 w-20  md:h-32 h-20  flex flex-col items-center justify-center group rounded-full">
            <div className="md:text-6xl text-3xl md:w-28 w-16  md:h-28 h-16 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600 ">
            <ion-icon name={skill.logo}></ion-icon>
            </div>
       </div>
       <p className="md:text-xl md:mt-6 mt-4">{skill.level}</p>
    </div>
       ))
    }
</div>
}

export default Expericence;