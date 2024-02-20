import React from "react";
import Button from "../Components/Button";
import Rectangle76 from "../Asset/Rectangle76.png";
import arrow_left_circle from "../Asset/arrow_left_circle.svg";
import arrow_right_circle from "../Asset/arrow_right_circle.svg";

const Video = () => {
  return (
    <div class="flex flex-col mt-2 sm:mt-[270px] w-[100%] ">
      
      <div class="mt-5 sm:mt-[300px] ">
        <h2 className="text-[#344335] font-Helvetica w-[50%]font-bold text-xl sm:text-4xl leading-normal mb-2 sm:mb-[45px]" >What our <span className="text-[#2B8C34]">users</span> say</h2>
        <div>
          <video  poster={Rectangle76} controls>
            <source src='https://youtu.be/25Pt1AZO9EM?si=BdXbEIstwRVoWFl1' type="video/mp4" />
          </video>
        </div>
        <div class=" my-10 justify-center items-center flex">
          <img alt="back" src={arrow_left_circle} />
          <img alt="next" src={arrow_right_circle} />
        </div>
      </div>
    </div>
  );
};
export default Video;
