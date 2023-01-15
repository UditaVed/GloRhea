import React from "react";
import {motion} from "framer-motion"
import { fadeIn ,staggerContainer} from "../utils/motion";

const Hero = () => {
  return (
    <motion.div
    variants={staggerContainer}
  initial="hidden"
  whileInView="show"
  viewport={{once:true,amount:0.25}}
    id="Home" className="hero min-h-[100vh] pt-[10vh] justift-center gap-16 sm:items-start">
      <div className="hero-content bg-none flex-col lg:flex-row items-start p-0  ">
      <div className="h-full w-full">
      <motion.img variants={fadeIn('right', 'spring', 1 , 2)} src="Rhea.svg" className="md:-ml-10 pt-10 rounded-lg h-[80%] w-[80%] " />
      </div>  
      <motion.div variants={fadeIn('down', 'spring', 1 , 2)} className="w-[80%] sm:w-[50%] h-full mx-auto ">
        <img src="heroAbout.svg" className="hidden  object-cover lg:block"/>
        <div className="block lg:hidden text-sm p-4 w-[100%] sm:text-xl sm:p-20 font-bold text-[#A5836F] bg-white border shadow-md italic  ">
        Abortion is a deeply personal decision, and one that is not made
        lightly. Women deserve compassion and support, not judgment and
        stigma.
        </div>
        
      </motion.div>
        </div>
        </motion.div>
        );
      };
      
      export default Hero;
      
      