import React, { useState, useEffect } from "react";

const Navbar = ()=>{
     const [sticky,setSticky] = useState(false);
     const [open,setOpen] = useState(false);

     const menuLinks = [
     {name:"HOME",link:'#home'},
     {name:"ABOUT",link:"#about"},
     {name:"SKILLS",link:"#skills"},
     {name:"Tools",link:"#tools"},
     {name:"PROJECTS",link:"#projects"},
     {name:"CERTIFICATES",link:"#certificates"},
     {name:"CONTACT",link:"#contact"},
     ]

     useEffect(()=>{
          window.addEventListener('scroll',()=>{
               document.querySelector('nav')
               window.scrollY > 0 ? setSticky(true):setSticky(false);
          })
     },[])

     return (
     
     <nav className={`fixed w-full left-0 top-0 z-[999] ${sticky ? "bg-white/60 text-gray-900":"text-white"}`}>
          <div className="flex items-center justify-between">
               <div className="max-9 px-7">
                    <h4 className="text-4xl uppercase font-bold">
                     A<span className="text-cyan-600">bine</span>t 
                    </h4>
               </div>
               {/* <div className={` ${sticky ? "md:bg-white/0 bg-white": "bg-white"} text-cyan-900 md:block hidden px-7 py-2 font-medium  rounded-bl-full`}> */}
               <div className={` text-cyan-600 md:block hidden px-7 py-2 font-medium  rounded-bl-full`}>
                    <ul className="flex items-center gap-1 py-2 text-lg">
                         {
                              menuLinks?.map((menu,i)=>(
                              <li onClick={()=>setOpen(false)} key={i} className="px-6 hover:text-cyan-600" >
                              
                                   <a href={menu?.link}>{menu?.name}</a>
                              </li>
                              ))
                         }
                    </ul>
                
               </div>
              
               <div onClick={()=>setOpen(!open)} className={`z-[999] ${open ? "text-gray-900":"text-gray-100"} text-3xl cursor-pointer md:hidden m-5`}>
               {open ?<ion-icon name="close-outline"></ion-icon>:<ion-icon name="menu-outline"></ion-icon>}
               </div>

               <div className={`md:hidden text-gray-900 absolute w-full h-screen  px-7 py-2 font-medium bg-cyan-600 top-0 ${open? "right-0":"right-[-100%]"} `}>
                    <ul className="flex flex-col justify-center items-center h-full gap-10 py-2">
                    {
                              menuLinks?.map((menu,i)=>(
                              <li onClick={()=>{setOpen(!open)}} key={i} className="px-6 hover:text-white" >
                                   <a href={menu?.link}>{menu?.name}</a>
                              </li>
                              ))
                         }
                        
                    </ul>
                   
                     
                     
               </div>
          </div>
     </nav>
     );
};

export default Navbar;