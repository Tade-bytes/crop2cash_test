import React from "react";
import Button from "./Button";
const Contact =()=>{
    return(
        <div className="flex flex-col justify-center sm:items-evenly sm:flex-row sm:justify-evenly w-[100%] bg-[#FFF9E5]">
          <div className=" w-[100%] flex flex-col text-center sm:ml-20 sm:pl-[130px] sm:w-[50%] sm:text-start sm:pt-20 ">
            <h3 className="text-[#344335] text-xl font-Helvetica sm:text-3xl font-bold leading-normal">
              Let’s <span className="text-[#D8A600]">Talk</span> Business
            </h3>
            <p className="text-[#344335] text-sm  mt-2 w-[100%] sm:w-[70%] font-Helvetica sm:text-2xl font-normal leading-6">
              Your request will immediately go to the sales department. One of
              the managers will answer you in order to discuss details. It takes
              up to half an hour during working hours.
            </p>
          </div>
          <div className="w-[100%] sm:w-[50%] sm:pr-[139px] p-2 flex flex-col gap-3"> 
             <div className="text-[#313531] sm:w-[90%] sm:text-base font-Helvetica text-sm font-bold leading-5 mt-2">
              <p>Company Name</p>
              <input className="w-[100%] h-[60px] rounded-lg bg-[#D6D3CA]"></input>
            </div>
            <div className="text-[#313531] sm:w-[90%] sm:text-base font-Helvetica text-sm  font-bold leading-5 mt-2">
              <p>Full Name</p>
              <input className="w-[100%] h-[60px] rounded-lg bg-[#D6D3CA]"></input>
            </div>
            <div className="text-[#313531] sm:w-[90%] sm:text-base font-Helvetica text-sm font-bold leading-5 mt-2">
              <p>Email Address</p>
              <input className="w-[100%] h-[60px] rounded-lg bg-[#D6D3CA]"></input>
            </div>
            <div className="text-[#313531] sm:w-[90%] sm:text-base font-Helvetica text-sm font-bold leading-5 mt-2">
              <p>Phone Number</p>
              <input className="w-[100%] h-[60px] rounded-lg bg-[#D6D3CA]"></input>
            </div>
            <div className="text-[#313531] sm:text-base sm:w-[90%] font-Helvetica text-sm font-bold leading-5 mt-2">
              <p>How can we help you?</p>
              <input className="w-[100%]  h-[240px] rounded-lg bg-[#D6D3CA]"></input>
            </div>
            <div className="sm:w-[90%]">
             <Button className="w-[100%] sm:text-base   p-2 rounded-lg my-2 bg-[#D8A600] text-[#FFFFFF]">Send</Button>
            </div> 
           </div>
         </div>

    )
}
export default Contact;