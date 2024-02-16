import React from "react";
import Button from "../Components/Button";
import Rectangle76 from "../Asset/Rectangle76.png";
import arrow_left_circle from "../Asset/arrow_left_circle.svg";
import arrow_right_circle from "../Asset/arrow_right_circle.svg";

const Video = () => {
  return (
    <div class="flex flex-col justify-center mt-[270px] items-center">
      <Button>View More Products</Button>
      <div class="mt-[300px] ">
        <h2>What our users say</h2>
        <div>
          <video poster="" src={Rectangle76}></video>
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
