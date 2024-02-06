import React from "react";

const Contact =()=>{
    return(
        <div className="contact-page">
          <div className="btn">
            <h3>
              Let’s <span>Talk</span> Business
            </h3>
            <p>
              Your request will immediately go to the sales department. One of
              the managers will answer you in order to discuss details. It takes
              up to half an hour during working hours.
            </p>
          </div>
          <div className="btn-input"> 
             <div className="bus-input">
              <p>Company Name</p>
              <input></input>
            </div>
            <div className="bus-input">
              <p>Full Name</p>
              <input></input>
            </div>
            <div className="bus-input">
              <p>Email Address</p>
              <input></input>
            </div>
            <div className="bus-input">
              <p>Phone Number</p>
              <input></input>
            </div>
            <div className="bus-input2">
              <p>How can we help you?</p>
              <input></input>
            </div>
            <div>
              <button class="mt-5">Send</button>
            </div> 
           </div>
         </div>

    )
}
export default Contact;