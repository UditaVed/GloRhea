import { useState } from "react";
import reactLogo from "./assets/react.svg";
import React from "react";
import Stories from "./components/Stories";
import data from "./components/data";
import { Navbar, Hero, FAQ } from "./components";
import "./App.css";
import Community from "./components/Community";
import Consult from "./components/Consult";
import Footer from "./components/Footer";
import { motion } from "framer-motion";
import {
  slideIn,
  staggerContainer,
  textVariant2,
  textVariant,
} from "./utils/motion";
import { TypingText } from "./components/CustomTexts";

export default function App() {
  const cards = data.map((item,index) => {
    return <Stories key={index} Key={index} img={item.coverImg} title={item.title} />;
  });
  return (
    <div className=" font-philosopher ">
      <Navbar />
      <Hero />
      <FAQ />
      <div className="flex justify-center align-middle items-center  h-[20vh] w-full">
        <div className="  rounded-full sm:rounded-full w-[70vw] text-center h-fit py-7 bg-[#9F8C91] text-white shadow-xl  ">
          {" "}
          <motion.h1
            variants={textVariant2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="text-xl italic sm:text-5xl  "
          >
            " Channel Your thoughts with an expert "
          </motion.h1>
        </div>
      </div>

      <Consult />
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
        <Community />
      </motion.div>
      <Footer />
    </div>
  );
}
