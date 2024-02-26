import React from "react";
import Button from "../Components/Button";
const  Blog =()=>{
    return(
        <div className="flex flex-col w-[80%] items-center justify-center sm:m-20">
          <div className="w-[100%] pl-5">
          <h2 className="text-[#344335] text-lg sm:text-2xl  leading-normal font-bold mb-3">Our Blogs</h2>
          </div>
          <div className="flex overflow-hidden w-[80%] sm:w-[100%] justify-between items-center m-7 ">
          
            <div className="sm:w-[32%] bg-[#FFF9E5] sm:pb-3">
              <div className="blog-card1"></div>
              <div className="p-3">
              <h3 className="text-[#2B8C34] text-Helvetica font-xl font-bold leading-7">
                Farm Inputs: The essential ingredient of successful farming
              </h3>
              <p className="text-[#8C9B8E] text-Helvetica font-normal leading-6 font-base">27th February 2023</p>
              </div>
              
            </div>
            <div className="hidden sm:m-[40px] sm:block w-[32%] bg-[#FFF9E5] pb-3">
              <div className="blog-card2"></div>
              <div className="p-3">
              <h3 className="text-[#2B8C34] text-Helvetica font-xl font-bold leading-7">Product Spotlight:<br></br> Beta Farmer Package</h3>
              <p className="text-[#8C9B8E] text-Helvetica font-normal leading-6 font-base">27th February 2023</p>
              </div>
            </div>
            <div className="hidden sm:block sm:w-[32%] sm:bg-[#FFF9E5] sm:pb-3" >
              <div className="blog-card3"></div>
              <div className="p-3">
              <h3 className="text-[#2B8C34] text-Helvetica font-xl font-bold leading-7" > 
                Product Spotlight: Importance of Mechanisation as a service.
              </h3>
              <p className="text-[#8C9B8E] text-Helvetica font-normal leading-6 font-base">27th February 2023</p>
              </div>
            </div>
            
          </div>
          <div className=" flex w-[100%] items-center justify-center my-14 "><Button className="border-[#2B8C34] text-md rounded-lg text-[#2B8C34] w-[170px]">Read More</Button></div>
          
        </div>
    )
}
export default Blog;