import React from 'react'
import '../../assets/css/theme.css';
import '../../assets/css/footer.css';
import logo from '../../assets/images/logo.png'
import facebook from '../../assets/images/facebook-f-brands.svg'
import instagram from '../../assets/images/instagram-brands.svg'
import {Nav} from 'react-bootstrap';
import { Link } from "react-router-dom";

const Footer = () => {
  return (

    <div className='footer_wraper bg_smlight' id="main">
      <div className='theme_container  '>
        <img className='footer_logo' src= {logo} alt="logo"/>
        <div className='footer_linke'>
          <Nav className="nav_linke">
            <Link to='/contact-us'>Contact Us</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-and-condition">Terms & Condition</Link>
          </Nav>
        </div>
        <div className='social_linke'>
          <Nav.Link href="https://www.facebook.com/Dietitian-Your-Way-102166695874067" className='fb_bg'><img className='logo-brand' src= {facebook} alt="facebook"/></Nav.Link>
          <Nav.Link href="https://instagram.com/dietitianyourway?igshid=YmMyMTA2M2Y=" className='instagram_bg'><img className='logo-brand' src= {instagram} alt="instagram"/></Nav.Link>
        </div>
        <p>2022 © Dietitian Your Way.</p>
      </div>
    </div>
  )
}

export default Footer