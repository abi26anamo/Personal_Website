import React from "react";

const Contact = ()=>{
     const contact_info =[
          {
               logo:'mail',text:"abianamo282@gmail.com"
          },
          {
               logo:'logo-whatsapp',text:"+251926284282"
          },
          {
               logo:'location',text:"Addis Ababa, Ethiopia"
          },
     ]
     return <section id="contact" className="py-10 md:px-40 text-white text-center">
          <div className="text-center mt-8 ">
         <h3 className="md:text-4xl text-2xl font-semibold">
          Contact <span className=" text-cyan-600">Me</span>

         </h3>
         <p className=" text-gray-400 mt-3 md:text-lg text-sm"> Get in touch with Me</p>
          <div className=" mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg max-auto">
               <form action="https://getform.io/f/45736af4-5938-4147-beba-afda10715bcf" method="POST" className="flex flex-col flex-1 gap-5">
                    <input type="text" name="text" placeholder="Your Name" />
                    <input type="Email" name="email" placeholder="Your Email Address"/>
                    <textarea placeholder="Your Message" name="textarea" rows={10}></textarea>
                    <button name="button" className="btn-primary w-fit">Send Messages</button>
               </form>
               <div className="flex flex-col gap-7">
                   {
                    contact_info.map((contact,i)=>(
                         <div key={i} className="flex gap-4 w-fit  items-center">
                         <div className=" sm:right-8 right-4 z-[999] cursor-pointer text-white
                          md:text-3xl text-xl bg-cyan-600 md:w-10 w-8 md:h-10 h-8 flex items-center justify-center rounded-full">
                          <ion-icon name={contact.logo}></ion-icon>
                       </div>
                           <p className="text-base">{contact.text}</p>
                         </div>
                    ))
                   }
               </div>

          </div>
          </div>

     </section> ;
};

export default Contact;