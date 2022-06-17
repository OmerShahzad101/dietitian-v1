import React from "react";
import rightarrow from "../../../../assets/images/dashboard/right-arrow.png";
import "./HomeContactUs.css";
const HomeContactUs = () =>{
    return(
        <>
        <div className="theme_container">
        <div className="contactus_form_data" >
            <div className="text-center contact_us_data">
                <h5>Need Help?</h5>
                <span>Contact Us</span>
                <p>Click here for FAQ's. If you can't find the answer to your question please <br/> 
                fill out the form and someone from our team will get back to you. </p>
            </div>
            <div className="form_box_contact">
                <div className="form_input-box">
                <div className="name_box d-flex first_field_box">
                    <label>Name</label>
                    <input className="name_box_input" type="text" placeholder="Name" />
                </div>
                <div className="name_box d-flex">
                    <label>Email Address</label>
                    <input className="name_box_input" type="text" placeholder="Email Address" />
                </div>
                </div>
                <span className="text-start category_text">Category</span>
                <div class="language_select_box">
                    <div class="relative">
                        
                 <select>
                    <option>Select category</option>
                    <option>German</option>
                    <option>Spanish</option>
                </select>
                <div class="setting-absolute contact-us-pos">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAHCAYAAADebrddAAAABHNCSVQICAgIfAhkiAAAAJpJREFUGFdjnDRp0mQGBoZdeXl5m4E0BpgyZYrP////Xb5//97BCOQ0/v79+wczEAA1tCCrBhrky8jIaAlULP3u3btkRpAkULADKPAVKPEfpmHy5Ml+//79s2RiYjLMzc31AKkDK0bXAOSfAmp0ANJGMIUoipE03AQqtAJiWWSFGIqhGhKATjLLz8/PQvct3BloHmMHuv0numIAREFLQhAJTgkAAAAASUVORK5CYII=" alt="arow"/>
                </div>
               </div>
               </div>
               <div className="text_area_box">
                <span className="category_text">Message</span>
                <textarea id="" name="" placeholder="Message here" ></textarea>
               </div>
               <button className="send_button">Send
               <img src={rightarrow} alt="rightarrow"/>
               </button>
            </div>
     
        </div>
        </div>
        </>
    )
}
export default HomeContactUs;