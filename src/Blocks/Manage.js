import React from "react";
import Frame9 from "../Asset/Frame9.png";
import Button from "../Components/Button";

const Manages =()=>{
    return(
        <div className="man">
            <div className="manage">
            <h2>
              <span>Manage</span> your supply chain <span>digitally</span> with
              us.
            </h2>
            <p>
              We are digitalizing the value chain of food crops by building
              tools for agro-processors, easing activities like weighing,
              quality control, extension services among others.
            </p>
          </div>
          <div className="gather">
            <h2>Gather Store</h2>
            <p>
              Agro-processors can manage their supply relationships with farmers
              and other suppliers digitally. Suppliers don’t have to wait for
              days to get the payment for supplying an agro-processor, courtesy
              of an entirely digitised process.
            </p>
            <div  class="mt-14 border-solid-1px" > <Button>Learn More</Button></div>
            <div class="w-1/3 h-80 mt-24"><img alt="frame" src={Frame9}/></div>
             
          </div>

        </div>
        
    )
}
export default Manages;