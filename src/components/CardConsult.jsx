import React from "react";

const CardConsult = ({ About, Image, SlideNum, BgImage,Link }) => {
  var current = "slide" + SlideNum;
  if (SlideNum == 1) {
    var prev = "invisible";
    var next = "#slide" + 2;
  } else if (SlideNum == 2) {
    var prev = "#slide" + 1;
    var next = "#slide" + 3;
  } else {
    var prev = "#slide" + 2;
    var next = "invisible";
  }

  return (
    <div id={current} className="carousel-item relative w-full h-[100vh] md:h-[95vh] ">
      <img src={BgImage} className="w-full" />
      <div className="absolute h-full w-full ">
      <div className="flex h-full items-center justify-center ">
        <div className="flex  items-center justify-center w-full h-fit md:h-fit md:p-4 ">
          <div className="flex flex-col items-center justify-center pt-4 md:flex-row card card-side bg-white shadow-xl w-[80%] md:w-[50%] h-[50%]">
            
              <img src={Image} width={100} height={100}  className=" mx-8" alt="Movie" />
         
            <div className=" text-[#9F8C91] p-4 ">
              <p className=" ">{About}</p>
              <div className="card-actions justify-start">
              <a href={Link}>
              <button className="btn bg-[#9F8C91] text-white border-none px-10 sm:my-4 rounded-4xl">
              Join Session
              </button>
              </a> 
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 md:left-5 md:right-5 top-1/2">
        <a  className={`bg-white bg-opacity-5  rounded-full p-4 text-black ${prev}`}>
          ❮ ❮
        </a>
        <a  className={` bg-white bg-opacity-5 rounded-full p-4 text-black ${next} `}>
          ❯ ❯
        </a>
      </div>
    </div>
  );
};

export default CardConsult;
