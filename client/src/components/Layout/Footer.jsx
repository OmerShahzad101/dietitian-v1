import React from 'react' 
import '../../assets/css/theme.css';
import '../../assets/css/footer.css';
import logo from '../../assets/images/logo.png'
import facebook from '../../assets/images/facebook-f-brands.svg'
import linkedin from '../../assets/images/linkedin-in-brands.svg'
import instagram from '../../assets/images/instagram-brands.svg'
import {Nav} from 'react-bootstrap';
const Footer = () => {
  return (
    <div className='footer_wraper bg_smlight'>
        <div className='theme_container  '>
        <img className='footer_logo' src= {logo} alt="logo"/> 
          <div className='footer_linke'>
          <Nav className="nav_linke">  
                    <Nav.Link href="#home">Contact Us</Nav.Link>
                    <Nav.Link href="#link">Privacy Policy</Nav.Link> 
                    <Nav.Link href="#link">Terms & Condition</Nav.Link>  
                  </Nav>
          </div>
          <div className='social_linke'>
          <Nav.Link href="#home" className='fb_bg'><img className='logo-brand' src= {facebook} alt="facebook"/></Nav.Link>
          <Nav.Link href="#home" className='linkedin_bg'><img className='logo-brand' src= {linkedin} alt="linkedin"/></Nav.Link>
          <Nav.Link href="#home" className='instagram_bg'><img className='logo-brand' src= {instagram} alt="instagram"/></Nav.Link>
          
          </div>
          <p>© Dietitian Your Way – Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
    </div>
  )
}

export default Footer