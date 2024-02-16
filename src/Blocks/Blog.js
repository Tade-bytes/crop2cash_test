import React from "react";
import Button from "../Components/Button";
import arrow_right from "../Asset/arrow_right.svg"
const Blog =()=>{
    return(
        <div class="flex flex-col justify-center align- center my-[50px]">
          <h2 className="text-[#344335] text-2xl  leading-normal font-bold mb-3">Our Blogs</h2>
          <div className="card-container">
            <div className="blog-card">
              <div className="blog-card1"></div>
              <h3>
                Farm Inputs: The essential ingredient of successful farming
              </h3>
              <p>27th February 2023</p>
            </div>
            <div className="blog-card">
              <div className="blog-card2"></div>
              <h3>Product Spotlight:<br></br> Beta Farmer Package</h3>
              <p>27th February 2023</p>
            </div>
            <div className="blog-card">
              <div className="blog-card3"></div>
              <h3>
                Product Spotlight: Importance of Mechanisation as a service.
              </h3>
              <p>27th February 2023</p>
            </div>
            
          </div>
          <div className=" flex w-[100%] items-center align-center justify-center my-14 "><Button className="border-[#2B8C34] text-md rounded-lg text-[#2B8C34] w-[170px]">Read More<span><img alt="next" src={arrow_right}/> </span></Button></div>
          
        </div>
    )
}
export default Blog;