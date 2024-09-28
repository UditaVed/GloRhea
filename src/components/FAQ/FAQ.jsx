import React from "react";
import CardFAQ from "./CardFAQ";
import FAQdata from "../FAQdata.js";
import {motion} from "framer-motion"
import { TypingText } from "../CustomTexts";
import { slideIn,staggerContainer,textVariant } from "../../utils/motion";
const FAQ = () => {
  return (
    <motion.div 
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{once:true,amount:0.25}}

    id="FAQ" className="gap-1 flex flex-col p-4 sm:p-12  bg-[#E5E2DE] items-center ">
      <div className="flex justify-center align-middle gap-4  h-[20vh] w-full">
        <div className=" sm:border-x-[0.5rem] rounded-full sm:rounded-full  border-[#E6C1AA] w-fit text-center  h-fit py-7 px-4  bg-[#E6C1AA] text-white shadow-xl  ">
          {" "}
      
           <TypingText title="We have answers to your queries"/>
          
        </div>
      </div>
      <div className="gap-4 flex flex-col p-2 md:p-12 sm:w-[80%] justify-center">
        {FAQdata.map(({ Query, Quotes, Analysis }, index) => {
          var color = [
            { colors: "bg-[#F9BF96]" },
            { colors: "bg-[#B7CEFE]" },
            { colors: "bg-[#F0B7DC]" },
            { colors: "bg-[#E7CAB2]" },
          ];
          let bgQuoteColor = color[index % 4].colors;
          let image = "faq/faq0" + ((index % 4) + 1) + ".svg";
          console.log(image);
          return (
            <CardFAQ
            Key={index}
              key={index}
              Query={Query}
              Quote={Quotes}
              Analysis={Analysis}
              BgQuoteColor={bgQuoteColor}
              Img={image}
            />
          );
        })}
      </div>
    </motion.div>
  );
};

export default FAQ;
