import React from "react";
import Frame from '../Asset/Frame.png';

const About_hero =()=>{
    return(
        <div className="about-hero">
          <h4>
            We have served over <span>150,000 farmers</span>  across <span>13 states </span> in Nigeria and
            have processed <span>hundreds of thousands</span> of transactions.
          </h4>
          <img src={Frame}/>
          <p>Trusted By Organisations Making Impact</p>
        </div>

    )
}
export default About_hero;