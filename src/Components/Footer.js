import React from "react";
import c2c_logo2 from "../Asset/c2c_logo2.png";
import Social from "../Asset/Social.svg"

const Footer = () => {
  return (
    <div className="bg-[#2B8C34] w-[100%] p-2 flex flex-col">
      <div className="flex flex-col sm:flex-row sm:justify-between">
        <div className="w-[363px] mt-20 mx-2 p-3">
          
          <img src={c2c_logo2} alt="" />
          
          <h3 className="my-2 text-[#FCFCFC] font-normal leading-normal font-Helvetica">Crop2Cash- Grow it, Cash it.</h3>
          <p className=" text-[#D1B912] font-normal leading-normal text-2xl font-Helvetica">Get Started now</p>
          <div className="mt-2 w-[115.123p] h-[22px]"> <img src={Social}/></div>
        </div>
        <div className="flex flex-col sm:flex-row mt-2 sm:mt-[87px] justify-evenly w-[50%] gap-1">
          <div className="text-[#FCFCFC]">
            <h3 className="text-2xl font-Helvetica font-normal leading-normal ">Company</h3>
            <p  className="text-[#D3D3D3] font-Helvetica font-sm">About</p>
            <p  className="text-[#D3D3D3] font-Helvetica font-sm">Contact</p>
            <p  className="text-[#D3D3D3] font-Helvetica font-sm">Blog</p>
            <p  className="text-[#D3D3D3] font-Helvetica font-sm">FAQs</p>
          </div>
          <div className="text-[#FCFCFC] font-Helvetica font-normal leading-normal">
            <h3 className="text-2xl font-Helvetica font-normal leading-normal ">Products</h3>
            <p className="text-[#D3D3D3] font-Helvetica font-sm">Features</p>
            <p  className="text-[#D3D3D3] font-Helvetica font-sm">Pricing</p>
            <p  className="text-[#D3D3D3] font-Helvetica font-sm">How it works</p>
          </div>
          <div className="text-[#FCFCFC] font-Helvetica font-normal leading-normal">
            <h3 className="text-2xl font-Helvetica font-bold leading-normal">Legal</h3>
            <p  className="text-[#D3D3D3] font-Helvetica font-sm">Terms</p>
            <p  className="text-[#D3D3D3] font-Helvetica font-sm">Privacy</p>
          </div>
        </div>
      </div>
      <div className="text-[#FCFCFC] align-center my-5 text-sm font-normal leading-6 font-Helvetica text-center"> <p>Copyright © 2023 - All Rights Reserved - Crop2Cash </p></div>
     
     
    </div>
  );
};
export default Footer;
