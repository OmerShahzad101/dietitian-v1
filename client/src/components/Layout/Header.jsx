import React from 'react'
import '../../assets/css/header.css';
import '../../assets/css/theme.css';
import logo from '../../assets/images/logo.png' 
import {Navbar} from 'react-bootstrap';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className='navbar_wraper' > 
     <div className='theme_container h-100 d-flex'>   
         <Navbar className='nav_bar w-100'  expand="lg"> 
           <Link to="/"><img className='logo-brand' src= {logo} alt="logo"/></Link> 
          </Navbar>   
         </div>
    </div>
  )
}

export default Header