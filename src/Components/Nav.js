import React from "react";
import c2c_logo2 from "../Asset/c2c_logo2.png";
import Button from "./Button";

const Nav = () => {
  return (
    <div className="nav-bar">
      <div className="nav-logo">
        <a href="/">
          <img className="w-[104px] md:w-[207px] mr-[12rem] md:mr-[17rem]" src={c2c_logo2} alt="logo" />
        </a>
      </div>
      <div>
        <nav>
          <ul className="nav-button">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Agents</a>
            </li>
            <li>
              <a href="/">About</a>{" "}
            </li>
            <li>
              <a href="/">Blog</a>
            </li> 

          </ul>
         
        </nav>
        
      </div>
      <div>
         <a href="/" className="icon" onclick="myFunction()">
            <i class="fa fa-bars"></i>
          </a>
      </div>
      <div className="nav-btn">
        <Button className="w-[137px] border-[#2B8C34] text-md rounded-lg text-[#2B8C34]">
          Our Service
        </Button>
        <Button className="w-[137px] border-[#2B8C34] bg-[#2B8C34] text-md rounded-lg text-white ">
          Our Solutions
        </Button>
      </div>
    </div>
  );
};
export default Nav;
