import React from "react";
import cari from '../Asset/cari.svg';
import labana from '../Asset/labana.svg';
import wenovation from '../Asset/wenovation.svg';
import giz from '../Asset/giz.svg';
import image from '../Asset/image.png';
import lead from '../Asset/lead.png';
import google from '../Asset/google.png';
import katspull from '../Asset/katspull.png';
import bain from '../Asset/bain.png';
import catalyst from '../Asset/catalyst.png';

const About_footer =()=>{
    return(
        <div className="about-footer">
         <div className="about-footer1">
          <div className="wenovation"></div>
          <div className="cari"></div>
          <div className="labana"></div>
          <div className="giz"></div>
          <div className="image"></div> 
        </div>
        <div className="about-footer2">
        <div className="lead"></div>
          <div className="google"></div>
          <div className="katspull"></div>
          <div className="bain"></div>
          <div className="catalyst"></div>

        </div>
        </div>
        

    )
}
export default About_footer;