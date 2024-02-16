import React from "react";
import c2c_logo2 from "../Asset/c2c_logo2.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="foot">
        <div className="footer1">
          
          <img src={c2c_logo2} alt="" />
          
          <h3>Crop2Cash- Grow it, Cash it.</h3>
          <p>Get Started now</p>
          <div></div>
        </div>
        <div className="footer2">
          <div className="div1">
            <h3>Company</h3>
            <p>About</p>
            <p>Contact</p>
            <p>Blog</p>
            <p>FAQs</p>
          </div>
          <div className="div2">
            <h3>Products</h3>
            <p>Features</p>
            <p>Pricing</p>
            <p>How it works</p>
          </div>
          <div className="div3">
            <h3>Legal</h3>
            <p>Terms</p>
            <p>Privacy</p>
          </div>
        </div>
      </div>
      <div class="justify-center align-center">
        <p>Copyright © 2023 - All Rights Reserved - Crop2Cash </p>
      </div>
    </div>
  );
};
export default Footer;