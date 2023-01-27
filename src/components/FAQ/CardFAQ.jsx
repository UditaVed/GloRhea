import React from "react";
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';

const CardFAQ = ({ Query, Quote, Analysis, BgQuoteColor,Img,Key }) => {
  var index =  Key;
 
  return (
    <motion.div
    variants={fadeIn('left', 'spring', index * 0.5, 0.75)}
      tabIndex={0}
      className="collapse collapse-arrow border  bg-[#f1f1f1] rounded-box text-black  "
    >
    <div className="flex gap-2 ">
    <div class="hidden sm:block w-[15%] p-4 rounded-3xl overflow-hidden  ">
            <img src={Img} alt="" className=" w-full h-full  rounded-3xl object-cover"/>
          </div>
    <div className="sm:w-[80%]  align-center flex items-centerOccaecat labore est proident elit eu proident.">
    <div className="collapse-title text-sm sm:text-xl font-medium items-center">
          {Query}
          <div className={` hidden sm:block  sm:text-sm italic font-semibold text-gray-900 dark:text-white ${BgQuoteColor} rounded-md w-fit px-2 py-2 mt-2`}>
            {Quote}
          </div>
        </div>
      </div>
      </div>
      <div className="collapse-content bg-white m-4 pt-2 rounded-lg text-black">
        <p> {Analysis}</p>
      </div>
    </motion.div>
  );
};

export default CardFAQ;
