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
    <div id={current} className="carousel-item relative w-full h-[95vh] ">
      <img src={BgImage} className="w-full" />
      <div className="absolute h-full w-full ">
      <div className="flex h-full items-center ">
        <div className="flex items-center justify-center w-full h-fit p-4 ">
          <div className="card card-side bg-base-100 shadow-xl w-[50%] h-[50%]">
            
              <img src={Image} width={100} height={100}  className=" mx-8" alt="Movie" />
         
            <div className=" text-[#9F8C91] p-4 ">
              <p>{About}</p>
              <div className="card-actions justify-start">
              <a href={Link}>
              <button className="btn bg-[#9F8C91] border-none px-10 my-4 rounded-4xl">
              Join Session
              </button>
              </a> 
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a  className={`bg-white rounded-full p-4 text-black ${prev}`}>
          ❮ ❮
        </a>
        <a  className={` bg-white rounded-full p-4 text-black ${next} `}>
          ❯ ❯
        </a>
      </div>
    </div>
  );
};

export default CardConsult;
