import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {  Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import { FaShoppingCart, FaUser} from 'react-icons/fa';
// import logo from '../asset/logo.png'

const Header = () => {
    const navigate = useNavigate();
    const handleLogout = (e) => {
        try {
            localStorage.removeItem('jwt');
            navigate('/login');
        } catch (error) {
            console.log(error);
        }
    }
    return (
      <header>
          <Navbar bg='dark' variant='dark' expand='md' collapseOnSelect>
              <Container>
                  <Navbar.Brand>
                      {/* <img src={''} className='logo' alt='goshopnow' /> */}
                      <Link to='/' className='link'>
                      GoShopNow
                      </Link>
                      </Navbar.Brand>
                  <Navbar.Toggle aria-controls='basix-navbar-nav' />
                  <Navbar.Collapse id='basic-navbar-nav'>
                      <Nav className='ms-auto'>
                              <Nav.Link>
                                <Link to='/cart' className='link'>
                                  <FaShoppingCart /> Cart 
                                </Link>  
                              </Nav.Link>  
                              
                              <NavDropdown title='' id='username'>
                                      <NavDropdown.Item>Profile</NavDropdown.Item>
                                  <NavDropdown.Item onClick={handleLogout}>
                                      Logout
                                  </NavDropdown.Item>
                              </NavDropdown>
                              <Nav.Link>
                                <Link to='/login' className='link'>
                                  <FaUser/> Sign In </Link>
                              </Nav.Link>
                      </Nav>
                  </Navbar.Collapse>
              </Container>
          </Navbar>
      </header>
  );
};

export default Header;