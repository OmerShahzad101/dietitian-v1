import React from 'react' 
import '../../assets/css/theme.css';
import '../../assets/css/footer.css';
import logo from '../../assets/images/logo.png'
import facebook from '../../assets/images/facebook-f-brands.svg'
import linkedin from '../../assets/images/linkedin-in-brands.svg'
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
            <Link to='/'>Contact Us</Link>
            <Link to="/privacy-policy">Privacy Policy</Link> 
            <Link to="/terms-and-condition">Terms & Condition</Link>  
          </Nav>
          </div>
          <div className='social_linke'>
          <Nav.Link href="https://www.facebook.com/" className='fb_bg'><img className='logo-brand' src= {facebook} alt="facebook"/></Nav.Link>
          <Nav.Link href="https://www.linkedin.com/" className='linkedin_bg'><img className='logo-brand' src= {linkedin} alt="linkedin"/></Nav.Link>
          <Nav.Link href="https://www.instagram.com/" className='instagram_bg'><img className='logo-brand' src= {instagram} alt="instagram"/></Nav.Link>
          
          </div>
          <p>© Dietitian Your Way – Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
    </div>
  )
}

export default Footer