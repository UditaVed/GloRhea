import React, { useState,useEffect } from "react";
import Stories from "./components/Stories";
import data from "./components/data";
import { Navbar, Hero, FAQ } from "./components";
import "./App.css";
import Community from "./components/Community";
import Consult from "./components/Consult";
import Footer from "./components/Footer";
import { motion } from "framer-motion";
import {
  staggerContainer,
  textVariant2,
  textVariant,
} from "./utils/motion";
import { TypingText } from "./components/CustomTexts";


export default function App() {
  const [pageLoaded, setPageLoaded] = useState(false)
  const [totalImageLoaded, setTotalImageLoaded] = useState(0)

  const handleImageLoad = () => {
    setTotalImageLoaded((prev) => prev + 1);
  };
  const cards = data.map((item,index) => {
    return <Stories key={index} Key={index} img={item.coverImg} title={item.title} onLoad={handleImageLoad} />;
  });
  useEffect(()=>{
    if(totalImageLoaded==20){
      setPageLoaded(true);
      console.log("Page Loaded");
    }
  },[totalImageLoaded])
  const loadingOverlay = (
    <div className="h-screen w-screen fixed top-0 left-0 z-50 bg-white text-center text-black flex justify-center items-center">
      <div className="animate-pulse font-philosopher text-xl sm:text-2xl md:4xl lg:8xl">
        Preparing the page...
        <p className="animate-bounce"></p>
      </div>
    </div>
  );
 
  return (
    <div className=" font-philosopher ">
      <Navbar onLoad={handleImageLoad} />
      <Hero onLoad={handleImageLoad} />
      <FAQ  onLoad={handleImageLoad} />
      <div className="flex justify-center align-middle items-center  h-[20vh] w-full">
        <div className="  rounded-full sm:rounded-full w-fit text-center h-fit px-12 py-7 bg-[#9F8C91] text-white shadow-xl  ">
          {" "}
          <motion.h1
            variants={textVariant2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="text-xl italic sm:text-2xl md:text-2xl  "
          >
            " Channel Your thoughts with an expert "
          </motion.h1>
        </div>
      </div>

      <Consult onLoad={handleImageLoad} />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        id="Stories"
        className="flex justify-center items-center sm:gap-8 pt-2 gap-2 mt-10"
      >
        <div className="bg-[#E6C1AA] w-4 sm:h-16 h-12 rounded-xl"></div>

        <TypingText
          className="italic"
          title="Voices of Women"
          Class="sm:text-5xl py-12 text-3xl"
        />
      </motion.div>
      <motion.div  variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once:true,amount:0.2}}className="flex-wrap justify-center items-center gap-10 flex flex-col md:flex-row w-[80%] mx-auto">
        {cards}
      </motion.div>
      <motion.div
        variants={textVariant(0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        className="py-24"
      >
        <Community onLoad={handleImageLoad} />
      </motion.div>
      <Footer />
      {!pageLoaded && loadingOverlay}
    </div>
    
  );
}
