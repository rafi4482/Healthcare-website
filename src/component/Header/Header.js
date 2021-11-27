import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import useAuth from '../../hooks/useAuth';

  import result from '../Login/Login';


const Header = () => {



  const{user,logOut}=useAuth()
  
    return (

        <>
            <Navbar className='nav-style' collapseOnSelect expand="lg" bg="dark" variant="dark">
  
  <Navbar.Brand href="#home">ALPHA CLINIC</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav >
      
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/details">Details</Nav.Link>
{user.email &&  <span className='style' style={{color:'white'}}>{user.displayName}</span>
}      {       
        user.email?
       
        <button style={{margin:"5px",borderRadius:'5px',backgroundColor:'blue',color:'white'}} onClick={logOut}>Logout</button>:
        <Nav.Link href="/login">Login</Nav.Link>}
       
    </Nav>
    <Nav>
    </Nav>
  </Navbar.Collapse>

</Navbar>
        </>
    );
};

export default Header;