import React from "react";
import Button from "../Components/Button";
const Blog =()=>{
    return(
        <div class="my-[50px]">
          <h2 class="text-[#344335]-center font-Helvetica-9-bold normal">Our Blogs</h2>
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
          <Button justify-center align-center>Read More</Button>
        </div>
    )
}
export default Blog;