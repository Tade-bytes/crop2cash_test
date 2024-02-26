import React from "react";
import Frame9 from "../Asset/Frame9.png";
import Button from "../Components/Button";

const Manages =()=>{
    return(
      <>
       <div className="flex flex-col pt-[60px] w-[100%] bg-[#E2FFDF] sm:bg-[#FFF] items-center justify-center sm:rounded-2xl">
            <div className="manage">
            <h2 className="text-[#554203] text-Helvetica font-bold text-4xl leading-normal">
              <span>Manage</span> your supply chain <span>digitally</span><span className="with" > with
              us.</span>
            </h2>
            <p>
              We are digitalizing the value chain of food crops by building
              tools for agro-processors, easing activities like weighing,
              quality control, extension services among others.
            </p>
          </div>
          <div className="gather">
            <h2 className="mt-4">Gather Store</h2>
            <p className="mt-4">
              Agro-processors can manage their supply relationships with farmers
              and other suppliers digitally. Suppliers don’t have to wait for
              days to get the payment for supplying an agro-processor, courtesy
              of an entirely digitised process.
            </p>
            <div className="m-7"> <Button className="border-[#2B8C34] text-2xl bg-white rounded-lg text-[#2B8C34]" >Learn More</Button></div>
            <div class="h-80 mt-24"><img alt="frame" src={Frame9}/></div>

            
             
          </div>
          

        </div>
        <Button className=" text-[#2B8C34] mt-[15rem] font-bold text-sm sm:text-2xl leading-5 border-none border-[#2B8C34]">View More Products</Button>
        
      </>
       
    )
}
export default Manages