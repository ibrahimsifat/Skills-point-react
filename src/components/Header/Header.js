import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Logo from '../../img/logo.png'
const Header = () => {
    return (
        <div className='py-2 bg-blue-300 '>
             <Navbar bg="transparnet" variant="light">
    <Container>
    <Navbar.Brand to="/home"><img className='inline' style={{width:'30px'}} src={Logo} alt="" /> <span className='inline pl-2 font-semibold text-white'>Skills Point</span></Navbar.Brand>
    <Nav className="mx-auto ">
      <NavLink className='no-underline font-bold text-white px-2 py-1 duration-200 rounded mx-2 hover:bg-blue-400' to="/home">Home</NavLink>
      <NavLink  className='no-underline font-bold text-white px-2 py-1 duration-200 rounded mx-2 hover:bg-blue-400' to="/categoryes">Categories</NavLink>
      
      <NavLink  className='no-underline font-bold text-white px-2 py-1 duration-200 rounded mx-2 hover:bg-blue-400' to="/about">About us</NavLink>


      <NavDropdown className='no-underline font-bold text-white px-2 duration-300 rounded mx-2 hover:bg-blue-400' title="Courses" id="" to='/categoryes'>
          <NavDropdown.Item>
            <NavLink className='no-underline text-dark' to="/category/1">Language</NavLink>
            
          </NavDropdown.Item>
          <NavDropdown.Item >
          <NavLink className='no-underline text-dark' to="/category/2">IT Courses</NavLink>
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item >
            <NavLink className='no-underline text-dark' to="/category/3">Data Science</NavLink>
          </NavDropdown.Item>
          <NavDropdown.Item>
          <NavLink className='no-underline text-dark' to="/category/4">Health</NavLink>

          </NavDropdown.Item>
          <NavDropdown.Item>
          <NavLink className='no-underline text-dark' to="/category/5">Math</NavLink>

          </NavDropdown.Item>
          <NavDropdown.Item >
          <NavLink className='no-underline text-dark' to="/category/6">Business</NavLink>

            
          </NavDropdown.Item>
        </NavDropdown>

     

    </Nav>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;