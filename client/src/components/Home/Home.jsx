import React, { useEffect, useState } from 'react'
import '../../assets/css/theme.css';
import '../../assets/css/home.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios"
import map from '../../assets/images/map_icon.png'
import about_us_right from '../../assets/images/Home/about_us_right.webp'
import about_us from '../../assets/images/Home/about_us.webp'
import mother from '../../assets/images/Home/mother.png'
import weight_scale from '../../assets/images/Home/weight-scale.webp'
import sugar_blood from '../../assets/images/Home/sugar-blood-level.png'
import kidneys from '../../assets/images/Home/kidneys.webp'
import meditation from '../../assets/images/Home/meditation.webp'
import award from '../../assets/images/Home/award-solid.svg'
import green_tick from '../../assets/images/Home/team/green_tick.svg'
import team1 from '../../assets/images/Home/team/team1.png'
import team2 from '../../assets/images/Home/team/team2.png'
import team3 from '../../assets/images/Home/team/team3.png'
import team4 from '../../assets/images/Home/team/team4.png'
import Search_rdn from '../../assets/images/Home/Search_rdn.png'
import Choose_a_specialty from '../../assets/images/Home/Choose_a_specialty.webp'
import Connect_rdn from '../../assets/images/Home/Connect_rdn.webp'
import Verified from '../../assets/images/Home/Verified.png'
import Diversity_Inclusion from '../../assets/images/Home/Diversity_Inclusion.png'
import Nutrition_Experts from '../../assets/images/Home/Nutrition_Experts.png'
import Why_Trust_Us from '../../assets/images/Home/Why_Trust_Us.webp'
import Diabetes1 from '../../assets/images/Home/Dietitian/Diabetes1.png'
import Pediatric1 from '../../assets/images/Home/Dietitian/Pediatric1.png'
import Weight_management from '../../assets/images/Home/Dietitian/Weight-management.png'
import Women_Health from '../../assets/images/Home/Dietitian/Women-Health.png'
import dietition_media_img1 from '../../assets/images/Home/dietition_speak_card_media_img1.png'
import dietition_media_img2 from '../../assets/images/Home/dietition_speak_card_media_img2.png'
import dietition_media_img4 from '../../assets/images/Home/dietition_speak_card_media_img4.png'
import clock_regular from '../../assets/images/Home/clock-regular.png'
import join_our_diet_img from '../../assets/images/Home/join_our_diet_img.webp'
import arrow_down from '../../assets/images/Home/arrow-down.svg'
import email_icon from '../../assets/images/Home/email.svg'
import user_icon from '../../assets/images/Home/user.svg'
import check_true from '../../assets/images/Home/check.png'
import { Spinner } from "react-bootstrap";
import $ from "jquery"


function show(){const element = document.getElementById("main"); element.scrollIntoView()}

const Home = () => {
  useEffect(() =>{ $('html,body').animate({scrollTop: 0}, 'fast')},[])
  const [done, setDone] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const schema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Email is required"),
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    dietitian: yup.mixed().nullable().required("This field is required"),
  });
  const {register,handleSubmit, formState: { errors },} = useForm({ resolver: yupResolver(schema) });


  const onSubmitHandler = (data) => {
    setIsLoading(true);
    axios.post("https://dietitianyourway.com/v1/front/auth/register", data).then((response) =>{  
    if (response.data.status === true) {
        setIsLoading(false);
        toast.success(response.data.message,{ position:"top-right", autoClose: true});
        setDone(response.data.status);
      } else {
        setIsLoading(false);
        toast.error(response.data.message ,{position: "top-right",autoClose: TextTrackCue});
      }
    })
  };

  return (
    <>
      {/* FindRegistered_wraper */}
      <div className='FindRegistered_wraper mt_top'  id='main'>
      <ToastContainer />
        <div className='theme_container FindRegistered_inner'>
          <div className='banner_content'>
            <h1>Find a Registered Dietitian Nutritionist Your Way.</h1>
            <p>Connect with verified Registered Dietitian Nutritionists (RDN) based on your personal preferences.</p>
          </div>
          <div className='sticky_form '>
            <form className='formBox '  onSubmit={handleSubmit(onSubmitHandler)}>
              {!done ?
              <div className="fieldSet first-fieldset first-heading ">
                <div className="chevron_down"> <img src={arrow_down} alt="arrow-down" /> </div>
                <div className="form-wrap wizard-wrapper">
                  <div className="fieldset-inner">
                    <div className="fieldset_top_text">
                      <h3>Dietitian Your Way is on its way! When it's launched we'll let you know!</h3>
                      <p>Subscribe with us today</p>
                    </div>
                    <div className='form_box_input'>
                      <div className='form-group'>
                        <div className='field_wrap'>
                          <input type="Name" className='form-control' placeholder='First Name' autoComplete="off" {...register("firstName")} />
                          <div className="icon"> <img className='' src={ user_icon} alt="user_icon" /> </div>
                        </div>
                        <span className="error">{errors.firstName?.message}</span>
                      </div>
                      <div className='form-group'>
                        <div className='field_wrap'>
                          <input type="Name" className='form-control' placeholder='Last Name' autoComplete="off" {...register("lastName")} />
                          <div className="icon"> <img className='' src={ user_icon} alt="user_icon" /> </div>
                        </div>
                        <span className="error">{errors.lastName?.message}</span>
                      </div>
                      <div className='form-group'>
                        <div className='field_wrap'>
                          <input type="email" className='form-control' placeholder='Email Address' autoComplete="off"  {...register("email")} />
                          <div className="icon"> <img className='' src={ email_icon} alt="email_icon" /> </div>
                        </div>
                        <span className="error">{errors.email?.message}</span>
                      </div>
                      <div className='form-group'>
                        <div>
                          <div className="iagree_radio mt-3 mb-3">
                            <input type="radio" name="are-you-looking" id="are_you_looking" value="no" className="mb-0 is-invalid"  {...register("dietitian")} />
                            <label htmlFor="are_you_looking" className='m-0'>I am looking for Dietitian. </label>
                          </div>
                          <div className="iagree_radio  ">
                            <input type="radio" name="are-you-looking" id="are_you_dietitian" value="yes" className="mb-0 is-invalid"  {...register("dietitian")}  />
                            <label htmlFor="are_you_dietitian" className='m-0'>I am a Dietitian. </label>
                          </div>
                          <span className="error_quest">{errors.dietitian?.message}</span>
                        </div>
                      </div>
                    </div>
                    <div className='theme_greenBtn_wraper'>
                      <button className="theme-greenBtn" type="submit"  value="Submit" disabled={isLoading}>
                        {isLoading ?
                        <Spinner
                          as="span" animation="border" size="lg"
                          role="status" aria-hidden="true"
                          className="dg-mr-8"
                        />:
                        "Submit"}
                      </button>

                      </div>
                  </div>
                </div>
              </div>
              :
              <div className="fieldSet first-fieldset first-heading">
                <div className="chevron_down"> <img src={arrow_down} alt="arrow-down" /> </div>
                <div className="form-wrap wizard-wrapper">
                  <div className="fieldset-inner">
                    <div className="fieldset_top_text text_thank_you">
                      <img src={check_true} className="check_true_img" alt="" />
                      <h3>Thank you for your interest!!</h3>
                       <p className='text_thank_you'>Keep checking your email for further guidelines</p>
                      </div>
                  </div>
                </div>
              </div>
              }
            </form>
          </div>
        </div>
      </div>
      
      <div className='theme_container about_pading '>
        <div className='about_us_wraper'>
          <div className='about_us_content'>
            <h1>About us</h1>
            <p>Dietitian Your Way started with the #1 priority: to help clients get the attention and care they deserve from educated, skilled and verified nutritionists.</p>
          </div>
          <div className='about_img'> <img className='' src={ about_us_right} alt="about_us_right" /> </div>
        </div>
      </div>
      
      <div className='theme_container  '>
      <div className='about_us_wraper Registered_Dietitian'>
        <div className='about_img'>
              <img className='' src= {about_us} alt="about_us"/>
          </div>
          <div className='about_us_content'>
            <h3>A Registered Dietitian Nutritionist can  help you with:</h3>
              <div className='Registered_Dietitian_list'>
              <ul>
                <li>Weight management</li>
                <li>Blood sugar control </li>
                <li>Blood pressure control </li>
                <li>Navigating food allergies</li>
              </ul>
              <ul>
                <li>Prevention </li>
                <li>Meal planning </li>
                <li>Lifestyle change</li>
                <li>And many more!</li>
              </ul>
              </div>
          </div>
        </div>
      </div>

      {/* looking_for_registered */}
      <div className='looking_for_registered  '>
        <div className='theme_container'>
            <h3>Looking For a Registered Dietitian Nutritionist?</h3>
            <p>Registered Dietitian Nutritionists have specialties ranging from diabetes, gastrointestinal disorders, prevention and many more. RDN's also speak with clients at any stage in life: pediatric, prenatal, teenagers, etc. Search for your RDN based on your individual needs.</p>
            <div className='looking_for_reg_wraper'>
              <div className='looking_for_registered_item'>
                <div className='item_wraper' onClick={show}>
                      <div className='item_img'>
                          <img className='' src= {mother} alt="mother"/>
                      </div>
                      <h4>Pediatric</h4>
                </div>
                <div className='item_wraper' onClick={show}>
                      <div className='item_img'>
                          <img className='' src= {weight_scale} alt="weight_scale"/>
                      </div>
                      <h4>Weight management</h4>
                </div>
                <div className='item_wraper' onClick={show}>
                      <div className='item_img'>
                          <img className='' src= {sugar_blood} alt="sugar_blood"/>
                      </div>
                      <h4>Diabetes</h4>
                </div>
                <div className='item_wraper' onClick={show}>
                      <div className='item_img'>
                          <img className='' src= {kidneys} alt="kidneys"/>
                      </div>
                      <h4>Renal disease</h4>
                </div>
                <div className='item_wraper' onClick={show}>
                      <div className='item_img'>
                          <img className='' src= {meditation} alt="meditation"/>
                      </div>
                      <h4>Women's Health</h4>
                </div>
              </div>
            </div>
        </div>
      </div>
      
      {/* How_it_works */}
      <div className='How_it_works '>
         <div className='theme_container'>
             <h4>How It Works</h4>
             <div className='How_it_works_timeline'>
             <div className='step_number_mobile'> <div className='step_number'><div className='step_number_inner'>01</div></div></div>
                <div className='time_line_content'>
                <h5>Choose a specialty</h5>
                 <p>Connect with Registered Dietitian Nutritionists based on the specialty you would like to work on.</p>
                 <div className='step_number'><div className='step_number_inner'>01</div></div>
                </div>
                <div className='time_line_img text-center'>
                <img className='' src= { Choose_a_specialty} alt="team3"/>
                </div>
             </div>
             <div className='How_it_works_timeline row_reverice'>
             <div className='step_number_mobile'> <div className='step_number'><div className='step_number_inner'>02</div></div></div>
             <div className='time_line_img'>
                <img className='' src= {Search_rdn} alt="team3"/>
                <div className='step_number  '><div className='step_number_inner'>02</div></div>
                </div>
                <div className='time_line_content custom_content'>
                <h5>Search for your RDN</h5>
                 <p>Search for your RDN based on your personal preferences and individualized needs such as language, in person or virtual counseling, location, fee or insurance based and many more.</p>

                </div>
             </div>
             <div className='How_it_works_timeline'>
             <div className='step_number_mobile'> <div className='step_number'><div className='step_number_inner'>03</div></div></div>
                <div className='time_line_content '>
                <h5>Connect with your RDN</h5>
                 <p>Easily connect with your Registered Dietitian Nutritionist via email or by phone.</p>
                 <div className='step_number  '><div className='step_number_inner'>03</div></div>
                </div>
                <div className='time_line_img text-center'>
                <img className='' src= {Connect_rdn} alt="team3"/>
                </div>
             </div>
         </div>
      </div>

      {/* Why_trust_us */}
      <div className='Why_trust_us'>
        <h1>Why Trust Us?</h1>
        <div className='Why_trust_us_inner'>
            <div className='Why_trust_woman'>
            <div className='why_trust_us'><img className='' src= {Why_Trust_Us} alt="team3"/></div>

            </div>
            <div className='Why_trust_us_iteme'>
                <div className='card_item'>
                  <div className='img_item bg_brown'><img className='' src= {Verified} alt="team3"/></div>
                    <h3>Verified</h3>
                    <p>We understand it can be tough finding trustworthy nutritionists. This is why we verify every Registered Dietitian Nutritionist on Dietitian Your Way.</p>
                </div>
                <div className='card_item'>
                  <div className='img_item bg_drak_red'><img className='' src= {Diversity_Inclusion} alt="team3"/></div>
                    <h3>Diversity & Inclusion</h3>
                    <p>We welcome all races and ethnicities, religions, countries of origin, gender identities, sexual orientations, abilities and disabilities, spoken languages and ages. We welcome everyone! We make it a top priority to make diversity and  inclusion a must to ensure your nutritional needs are met. </p>
                </div>
                <div className='card_item'>
                  <div className='img_item bg_blue'><img className='' src= {Nutrition_Experts} alt="team3"/></div>
                    <h3>Nutrition Experts</h3>
                    <p>Every Registered Dietitian Nutritionist is a nutritionist but not every “nutritionist” is a Registered Dietitian Nutritionist. RDN’s are the food and nutrition experts.</p>
                </div>
            </div>
        </div>
      </div>
      
      {/* featured_registered_wraper */}
      <div className='featured_registered_wraper d-none'>
      <div className='theme_container'>
            <h1>Featured Registered Dietitian Nutritionists</h1>
            <p>Search for your RDN based on your personal preferences and individualized needs today.</p>
          <div className='Featured_Registered_team'>
            <div className='team_card'>
              <div className='card_header bg_red'></div>
                  <div className='imge_team'><img className='' src= {team1} alt="team1"/></div>
                    <div className='content_body'>
                    <h4>Leontine, RND, LND <img className='' src= {green_tick} alt="green_tick"/></h4>
                  <h1>Pediatric</h1>
                  <p>I help college athletes gain muscle with nutrition.</p>
                  <ul>
                    <li><img className='' src= {map} alt="about_us"/> Orlando, FL 32837</li>
                    <li><img className='' src= {award} alt="about_us"/> 5 Years in Practice</li>
                  </ul>
                  <button className='btn_theme mt_15'>View Profile</button>
                </div>
              </div>
              <div className='team_card'>
              <div className='card_header bg_green'></div>
                  <div className='imge_team'><img className='' src= {team2} alt="team2"/></div>
                    <div className='content_body'>
                    <h4>Leonardo vinci, RDN, PhD <img className='' src= {green_tick} alt="green_tick"/></h4>
                  <h1>Weight management</h1>
                  <p>I help woman of color with balancing their plates- culture included!</p>
                  <ul>
                    <li><img className='' src= {map} alt="about_us"/> Orlando, FL 32837</li>
                    <li><img className='' src= {award} alt="about_us"/> 5 Years in Practice</li>
                  </ul>
                  <button className='btn_theme mt_15'>View Profile</button>
                </div>
              </div>
              <div className='team_card'>
              <div className='card_header bg_yellow'></div>
                  <div className='imge_team'><img className='' src= {team3} alt="team3"/></div>
                    <div className='content_body'>
                    <h4>Frank Martin, RDN, CDCE <img className='' src= {green_tick} alt="green_tick"/></h4>
                  <h1>Diabetes</h1>
                  <p>Trouble with blood sugar control? Come to me your personal diabetes expert.</p>
                  <ul>
                    <li><img className='' src= {map} alt="about_us"/> Orlando, FL 32837</li>
                    <li><img className='' src= {award} alt="about_us"/> 5 Years in Practice</li>
                  </ul>
                  <button className='btn_theme mt_15'>View Profile</button>
                </div>
              </div>
              <div className='team_card'>
              <div className='card_header bg_orange'></div>
                  <div className='imge_team'><img className='' src= {team4} alt="team4"/></div>
                    <div className='content_body'>
                    <h4>Racheal Lanny, RDN <img className='' src= {green_tick} alt="green_tick"/></h4>
                  <h1>Women's Health</h1>
                  <p>Being a mom is tough, let me help you navigate nutrition for your picky eater!</p>
                  <ul>
                    <li><img className='' src= {map} alt="about_us"/> Orlando, FL 32837</li>
                    <li><img className='' src= {award} alt="about_us"/> 5 Years in Practice</li>
                  </ul>
                  <button className='btn_theme mt_15'>View Profile</button>
                </div>
              </div>
            </div>
        </div>
      </div>

      {/* Dietitian_Speaks */}
      <div className='Dietitian_Speaks d-none'>
        <div className='theme_container'>
            <div className='head_speeks'>
              <h5>Check It Out:</h5>
              <h1>Dietitian Speaks</h1>
              <p>Read the latest on nutrition topics that matter to you!</p>
              </div>
              <div className='Dietitian_Speaks_inner'>
                  <div className='Dietitian_Speaks_card'>
                  <div className='speeks_img'><img className='' src= {Pediatric1} alt="Diabetes"/></div>
                  <div className='Dietitian_Speaks_body'>
                      <h6>Pediatric</h6>
                      <h3>Lorem ipsum dolor ametei ten </h3>
                      <p>Primo in altis pelle alumnae Lorem markdownum obvius in seque opus, est bicorni forte; laeva…</p>
                      <div className='media_object'>
                      <img className='' src= {dietition_media_img1} alt="dietition_media_img1"/>
                          <div className='media_object_content'>
                              <h4>Leontine F.Orton</h4>
                              <p>April 02, 2021 <span><img className='' src= {clock_regular} alt="clock_regular"/>1 min ago</span></p>
                          </div>
                      </div>
                  </div>
                  </div>
                  <div className='Dietitian_Speaks_card'>
                  <div className='speeks_img'><img className='' src= {Weight_management} alt="Weight_management"/></div>
                  <div className='Dietitian_Speaks_body'>
                      <h6>Weight management</h6>
                      <h3>Lorem ipsum dolor ametei ten </h3>
                      <p>Primo in altis pelle alumnae Lorem markdownum obvius in seque opus, est bicorni forte; laeva…</p>
                      <div className='media_object'>
                      <img className='' src= {dietition_media_img2} alt="dietition_media_img1"/>
                          <div className='media_object_content'>
                              <h4>Leontine F.Orton</h4>
                              <p>April 02, 2021 <span><img className='' src= {clock_regular} alt="clock_regular"/>1 min ago</span></p>
                          </div>
                      </div>
                  </div>
                  </div>
                  <div className='Dietitian_Speaks_card'>
                  <div className='speeks_img'><img className='' src= {Diabetes1} alt="Weight_management"/></div>
                  <div className='Dietitian_Speaks_body'>
                      <h6>Diabetes</h6>
                      <h3>Lorem ipsum dolor ametei ten </h3>
                      <p>Primo in altis pelle alumnae Lorem markdownum obvius in seque opus, est bicorni forte; laeva…</p>
                      <div className='media_object'>
                      <img className='' src= {dietition_media_img4} alt="dietition_media_img1"/>
                          <div className='media_object_content'>
                              <h4>Leontine F.Orton</h4>
                              <p>April 02, 2021 <span><img className='' src= {clock_regular} alt="clock_regular"/>1 min ago</span></p>
                          </div>
                      </div>
                  </div>
                  </div>
                  <div className='Dietitian_Speaks_card'>
                  <div className='speeks_img'><img className='' src= {Women_Health} alt="Women_Health"/></div>
                  <div className='Dietitian_Speaks_body'>
                      <h6>Women's Health</h6>
                      <h3>Lorem ipsum dolor ametei ten </h3>
                      <p>Primo in altis pelle alumnae Lorem markdownum obvius in seque opus, est bicorni forte; laeva…</p>
                      <div className='media_object'>
                      <img className='' src= {dietition_media_img1} alt="dietition_media_img1"/>
                          <div className='media_object_content'>
                              <h4>Leontine F.Orton</h4>
                              <p>April 02, 2021 <span><img className='' src= {clock_regular} alt="clock_regular"/>1 min ago</span></p>
                          </div>
                      </div>
                  </div>
                  </div>
              </div>
            </div>
      </div>

      {/* are_you_dietitian */}
      <div className='are_you_dietitian  '>
        <div className='theme_container'>
            <div className='row'>
              <div className='col-lg-6 '>
                  <div className='Join_our_platform_content'>
                    <h5>Join our platform</h5>
                    <h2>Are You A Dietitian?</h2>
                    <ul>
                      <li>Struggling on attracting and engaging your ideal client?</li>
                      <li>Wishing there was an easier way to get high quality leads?</li>
                      <li>Starving for answers as a Dietitian in private practice?</li>
                    </ul>
                    <h2 className='my_30'>Join Dietitian Your Way.</h2>
                    <p>We will promote your profile, you'll receive high quality leads and gain access to our exclusive 'RDN Chat' where you'll connect with other dietitians in private practice. </p>
                    <p></p>
                  </div>
              </div>
              <div className='col-lg-6 text-center join_our_diet_wraper'>
                <div className='join_our_diet_img'>
                <img className='' src= {join_our_diet_img} alt="join_our_diet_img"/>
                </div>
                <h6>We want you to be a thriving dietitian!</h6>
              </div>
            </div>
        </div>
      </div>

      <div className='Stay_Connected_wraper  '>
        <div className='theme_container'>
          <div className='row '>
            <div className='col-lg-6 d-flex justify-content-center align-self-center'>
                <div className='stay_Connected_form'>
                  <h1>Stay Connected</h1>
                  <p className='text-center'>Subscribe to Dietitian Speaks today!</p>
                  <form>
                      {/* <div className='form-group'>
                        <input type="text" className='form-control' placeholder='Name' />
                      </div>
                      <div className='form-group'>
                        <input type="email" className='form-control' placeholder='Email Address' />
                      </div> */}
                      <button type='button' onClick={show} className='btn_theme box_shadow'>Subscribe</button>
                  </form>
                </div>
            </div>
            <div className='col-lg-6 after_left'>
            <h1>Find a Dietitian Your Way!</h1>
              <p className='text-left'>Popular Cities</p>
              <div className='popular_cities_wrpapr'>
                <button type='button' onClick={show}>Atlanta, GA</button>
                <button type='button' onClick={show}>Austin, TX</button>
                <button type='button' onClick={show}>Baltimore, MD</button>
                <button type='button' onClick={show}>Boston, MA</button>
                <button type='button' onClick={show}>Brooklyn, NY</button>
                <button type='button' onClick={show}>Charlotte, NC</button>
                <button type='button' onClick={show}>Chicago, IL</button>
                <button type='button' onClick={show}>Columbus, OH</button>
                <button type='button' onClick={show}>Dallas, TX</button>
                <button type='button' onClick={show}>Denver, CO</button>
                <button type='button' onClick={show}>Houston, TX</button>
                <button type='button' onClick={show}>Indianapolis, IN</button>
                <button type='button' onClick={show}>Jacksonville, FL</button>
                <button type='button' onClick={show}>Las Vegas, NV</button>
                <button type='button' onClick={show}>Los Angeles, CA</button>
                <button type='button' onClick={show}>Louisville, KY</button>
                <button type='button' onClick={show}>Memphis, TN</button>
                <button type='button' onClick={show}>Miami, FL</button>
                <button type='button' onClick={show}>Milwaukee, WI</button>
                <button type='button' onClick={show}>Sacramento, CA</button>
                <button type='button' onClick={show}>Saint Louis, MO</button>
                <button type='button' onClick={show}>San Antonio, TX</button>
                <button type='button' onClick={show}>Tucson, AZ</button>
                <button type='button' onClick={show}>Washington, DC</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home