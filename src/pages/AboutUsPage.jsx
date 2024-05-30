import React from "react";
import Navbar from "../components/Navbar";
const AboutUsPage = () => {


 return (
   <div className="pt-[100px]">
     <Navbar />
     <div className="flex flex-col gap-6 pb-12">
       <div className="relative">
         <img
           className="h-[120px] object-cover w-full"
           src="/heros/burger-small.jpg" // Change this to your own image
         />
         <h1 className="text-4xl font-bold text-white absolute -translate-x-1/2 top-1/2 left-1/2 -translate-y-1/2">
           About Us
         </h1>
       </div>
     </div>
   </div>
 );
};


export default AboutUsPage;