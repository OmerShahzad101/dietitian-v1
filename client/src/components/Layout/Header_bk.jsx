import React from 'react'
import '../../assets/css/header.css';
import '../../assets/css/theme.css';
import logo from '../../assets/images/logo.png'
import seach_icon from '../../assets/images/search_icon.png'
import map from '../../assets/images/map_icon.png'
import select_icon from '../../assets/images/Arrow-Down.png'
import padlock from '../../assets/images/padlock.svg'
import user from '../../assets/images/user.svg' 
import {Navbar, Nav, Form,Link  } from 'react-bootstrap';

const Header = () => {
  return (
    <div className='navbar_wraper'> 
     <div className='theme_container h-100 d-flex'>   
         <Navbar className='nav_bar w-100'  expand="lg"> 
           <Navbar.Brand href="#home"><img className='logo-brand' src= {logo} alt="logo"/></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                  <Nav className="me-auto nav_linke"> 
                    <Nav.Link  >
                       <Form className='search_menu_wraper'> 
                          <div className='select_wrpaer'>
                          <Form.Select aria-label="Default select example">
                          <option>Specialties</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option> 
                        </Form.Select> 
                        <img className='select_icon' src= {select_icon} alt="logo"/>
                          </div>
                          <div className='input_wrpaer'>
                          <input type="text" class="form-control" placeholder="City, Zip"/>
                          <img className='map_icon' src= {map} alt="logo"/>
                          </div>
                          <div className='search_btn_wrpaer'>
                          <Nav.Link href="#link"><img className='logo-brand' src= {seach_icon} alt="logo"/></Nav.Link>  
                          </div>
                       </Form>
                    </Nav.Link>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/About">About</Nav.Link> 
                    <Nav.Link href="/Specialties">Specialties</Nav.Link> 
                    <Nav.Link href="/Blog">Blog</Nav.Link>  
                  </Nav>
              </Navbar.Collapse> 
               <div className='login_btn d-flex'>
                    <Nav.Link href="#link"><img className='padlock' src= {padlock} alt="padlock"/> Login</Nav.Link>  
                    <Nav.Link href="#link"><img className='user' src= {user} alt="user"/> Get Listed</Nav.Link> 
               </div>
          </Navbar>   
         </div>
    </div>
  )
}

export default Header