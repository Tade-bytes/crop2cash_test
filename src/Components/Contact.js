import React from "react";
import Button from "./Button";
const Contact =()=>{
    return(
        <div className="flex justify-between w-[100%] bg-[#FFF9E5] p-20">
          <div className=" w-[50%] pl-[122px] pt-20 ">
            <h3 className="text-[#344335] font-Helvetica text-3xl font-bold leading-normal">
              Let’s <span className="text-[#D8A600]">Talk</span> Business
            </h3>
            <p className="text-[#344335] mt-2 w-[434px] font-Helvetica text-[24px] font-normal leading-6">
              Your request will immediately go to the sales department. One of
              the managers will answer you in order to discuss details. It takes
              up to half an hour during working hours.
            </p>
          </div>
          <div className="w-[50%] flex flex-col gap-3"> 
             <div className="text-[#313531] font-Helvetica text-sm font-bold leading-5 mt-2">
              <p>Company Name</p>
              <input className="w-[80%] h-[60px] rounded-lg bg-[#D6D3CA]"></input>
            </div>
            <div className="text-[#313531] font-Helvetica text-sm font-bold leading-5 mt-2">
              <p>Full Name</p>
              <input className="w-[80%] h-[60px] rounded-lg bg-[#D6D3CA]"></input>
            </div>
            <div className="text-[#313531] font-Helvetica text-sm font-bold leading-5 mt-2">
              <p>Email Address</p>
              <input className="w-[80%] h-[60px] rounded-lg bg-[#D6D3CA]"></input>
            </div>
            <div className="text-[#313531] font-Helvetica text-sm font-bold leading-5 mt-2">
              <p>Phone Number</p>
              <input className="w-[80%] h-[60px] rounded-lg bg-[#D6D3CA]"></input>
            </div>
            <div className="text-[#313531] font-Helvetica text-sm font-bold leading-5 mt-2">
              <p>How can we help you?</p>
              <input className="w-[80%] h-[60px] rounded-lg bg-[#D6D3CA]"></input>
            </div>
            <div>
             <Button className="w-[80%] rounded-lg my-2 bg-[#D8A600] text-[#FFFFFF]">Send</Button>
            </div> 
           </div>
         </div>

    )
}
export default Contact;