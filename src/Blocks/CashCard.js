import React from "react";
import Group1 from "../Asset/Group1.png"
import Button from "../Components/Button";

const CashCard =()=>{
    return(
        <div className="flex flex-col w-[100%] items-center bg-[#FFF9E5] sm:bg-[#fff] justify-center">
          <div className="flex flex-col items-center sm:m-10 justify-center">
            <h3 className="w-[13rem] sm:w-[655px]  mt-3 text-Helvetica text-[#5C715E] sm:text-3xl font-bold leading-6 text-center">
              Digital Financial Services for <span className="text-[#D8A600]">Farmers.</span>
            </h3>
            <p className="text-[#5C715E] w-80 sm:w-[600px] sm:m-2 font-2xl text-center m-2 font-Helvetica text-sm font-normal leading-5">
              Over 38 million smallholder farmers in Nigeria lack access to
              finance to increase their agricultural production.{" "}
            </p>
         </div>
          <div className="flex flex-col-reverse bg-[#FFF9E5] rounded-[20px] w-[90%] justify-center items-center sm:flex sm:flex-row sm:justify-between">
          <div className="w-[100%] m-3 sm:w-[45%] ">
            <img className=" h-[590px] sm:w-[100%] sm:mt-32 mt-3" alt='phone'  src={Group1} />
          </div>
            <div className="flex flex-col items-center sm:items-start sm:justify-start justify-center  w-[100%] gap-2 sm:flex sm:w-[45%] sm:mb-[500px] ">
              <h3 className="hidden text-[#F8B800] text-Helvetica sm:text-3xl font-bold leading-normal sm:block">Cash Card</h3>
              <p className="hidden sm:block text-[#344335] text-xl font-normal sm:w-[502px]  leading-normal ">
                CashCard enables smallholder farmers in rural Nigeria to   
                digital payments and build their financial identity.
              </p> 
              <Button className="w-[137px] border-[#D8A600] text-md mt-2 rounded-lg text-[#D8A600]">Learn More</Button>
            </div>
          </div>
        </div>


    );
}
export default CashCard;