import React from "react";
import Rectangle76 from "../Asset/Rectangle76.png";
import arrow_left_circle from "../Asset/arrow_left_circle.svg";
import arrow_right_circle from "../Asset/arrow_right_circle.svg";
import play_circle from "../Asset/play_circle.svg"
import { useState } from "react";

const Video = () => {
  return (
    
    <div class="flex flex-col mt-2 w-[100%] sm:justify-center sm:items-center sm:mt-[270px] ">
      <div class="mt-5 w-[80%] ">
        <h2 className="text-[#344335] font-Helvetica w-[50%] font-bold text-xl sm:text-4xl leading-normal mb-2 sm:mb-6">
          What our <span className="text-[#2B8C34]">users</span> say
        </h2>
        {/* <div className="">
          <video poster={Rectangle76}>
            <source
              src="https://youtu.be/25Pt1AZO9EM?si=BdXbEIstwRVoWFl1"
              type="video/mp4"
            />
          </video>
          <img src={Rectangle76} alt=""/>
          <div className="absolute">
          <p >
            
            “I started using Crop2Cash in 2020 during the COVID-19 pandemic.
            Crop2cash was the only way I could find and pay for high quality
            fertilizer and inputs. I did all of it on my mobile phone.” TUNDE
            ILINIK
        
        </p>

          </div>
         
        </div> */}
        <div className="relative w-[100%] h-[90vh]">
          <img  className="absolute w-[100%]" src={Rectangle76} alt="video"/>
          <div>
            <p className="absolute text-[#FCFCFC] text-Helvetica w-[452px] text-xl font-normal leading-5 sm:my-[9rem] ml-3 ">“I started using Crop2Cash in 2020 during the COVID-19 pandemic.
            Crop2cash was the only way I could find and pay for high quality
            fertilizer and inputs. I did all of it on my mobile phone.” </p>
            <p className="absolute text-[#FCFCFC] text-Helvetica text-xl font-normal leading-5 mt-[18rem] ml-3 ">TUNDE ILINIK</p>
            <img  className="absolute left-[40%] sm:w-[200px] sm:mt-[8rem]" src={play_circle} alt="play"/>
          </div>
        </div>
        <div class=" my-2 justify-center items-center flex">
          <img alt="back" src={arrow_left_circle} />
          <img alt="next" src={arrow_right_circle} />
        </div>
      </div>
    </div>
  );
};
export default Video;
