import React, { useEffect, useState } from "react";
import rightarrow from "../../assets/images/right-arrow.png";
import "./ContactUs.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios"
import $ from "jquery"

const HomeContactUs = () => {
  useEffect(() =>{
    $('html,body').animate({scrollTop: 0}, 'fast');
  },[])
  const [isLoading, setIsLoading] = useState(false);

  const schema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Email is required"),
    name: yup.string().required("Name is required"),
    subject: yup.string().required("Subject is required"),
    message: yup.string().required("Message is required"),
  });

  const {register,handleSubmit, formState: { errors }, reset} = useForm({ resolver: yupResolver(schema) });
  const onSubmitHandler = (data) => {
    setIsLoading(true);
    axios.post("https://dietitianyourway.com/v1/front/auth/contact", data).then((response) =>{
        reset()
        if (response.data.status === true) {
          setIsLoading(false);
          toast.success(response.data.message,{
            position:"top-right",
            autoClose: true,
          });
        } else {
          setIsLoading(false);
          toast.error(response.data.message ,{
            position: "top-right",
            autoClose: true,

          });
        }
    })

  };

  return (
    <>
      <div className="theme_container">
      <ToastContainer />
        <div className="contactus_form_data">
          <div className="text-center contact_us_data">
            <h5>Need Help?</h5>
            <span>CONTACT US</span>
            <p>
              Please fill out the form and someone from our team will get back to you.{" "}
            </p>
          </div>
          <form  onSubmit={handleSubmit(onSubmitHandler)}>
            <div className="form_box_contact">
              <div className="form_input-box">
                <div className="name_box d-flex first_field_box">
                  <label>Name</label>
                  <input
                    className="name_box_input"
                    type="text"
                    placeholder="Name"
                    {...register("name")}
                  />
                  <span className="error">{errors.name?.message}</span>

                </div>
                <div className="name_box d-flex">
                  <label>Email Address</label>
                  <input
                    className="name_box_input"
                    type="text"
                    placeholder="Email Address"
                    {...register("email")}
                  />
                    <span className="error">{errors.email?.message}</span>

                </div>
              </div>
              <div className="custom_category_wrapper">
                <span className="text-start category_text">Subject</span>
                <div className="language_select_box">
                  <div className="relative">
                  <input
                    className="subject_box_input"
                    type="text"
                    placeholder="Subject"
                    {...register("subject")}
                  />
                    <span className="error">{errors.subject?.message}</span>

                  </div>
                </div>
              </div>
              <div className="text_area_box">
                <span className="category_text custom_meagge_category">
                  Message
                </span>
                <textarea id="" name="" placeholder="Message here" {...register("message")}></textarea>

                <span className="error">{errors.message?.message}</span>
              </div>
              <div className="send_btn">
                <button className="send_button" type="submit">
                  Send
                  <svg xmlns="http://www.w3.org/2000/svg" width="5.771" height="9.608" viewBox="0 0 5.771 9.608"className="send_arrow" >
                    <path id="Stroke-1"  d="M.121.121a.415.415,0,0,1,.54-.04l.047.04L4.286,3.7,7.865.121A.415.415,0,0,1,8.4.081l.047.04a.415.415,0,0,1,.04.54l-.04.047L4.58,4.58a.415.415,0,0,1-.54.04l-.047-.04L.121.708A.415.415,0,0,1,.121.121Z" transform="translate(0.535 9.108) rotate(-90)" fill="#fff" stroke-width="1"/>
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default HomeContactUs;
