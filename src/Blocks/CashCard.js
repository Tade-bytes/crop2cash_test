import React from "react";
import Group1 from "../Asset/Group1.png"
import Button from "../Components/Button";

const CashCard =()=>{
    return(
        <div className="agent">
          <div className="agent-hero">
            <h3>
              Digital Financial Services for <span>Farmers.</span>
            </h3>
            <p>
              Over 38 million smallholder farmers in Nigeria lack access to
              finance to increase their agricultural production.{" "}
            </p>
         </div>
          <div className="agent-frame">
          <div className="agent-phone">
            <img alt='phone' src={Group1} />
          </div>
            <div className="agent-frame1">
              <h3>Cash Card</h3>
              <p>
                CashCard enables smallholder farmers in rural Nigeria to receive
                digital payments and build their financial identity.
              </p>
              <Button className="w-[137px] border-[#D8A600] text-md mt-7 rounded-lg text-[#D8A600]">Learn More</Button>
            </div>
          </div>
        </div>


    );
}
export default CashCard;