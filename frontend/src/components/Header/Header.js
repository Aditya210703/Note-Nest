import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [inputValue, setInputValue] = useState('');
  return (
    <Navbar  className='bg-[#1C145C] absolute border-0 top-0 w-screen' expand="lg" variant="dark">

      <Container>
        <Navbar.Brand className='text-xl'><Link to={'/'}>Node Nest</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='m-auto' >
          <Form className={` ${inputValue ? 'w-96' : 'w-64'} hover:w-96 ease-in-out hover:duration-700`} inline>
      <Form.Control
        type="search"
        placeholder="Search"
        className="mr-sm-2"
        aria-label="Search"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </Form>
          </Nav>
          <Nav >
            <Nav.Link className='text-base text-white'><Link to={'/notes'}>My Notes</Link></Nav.Link>
            <NavDropdown title="Aditya Verma" className='text-base text-white' id="basic-nav-dropdown">
              <NavDropdown.Item className='text-black' href="#action/3.1">My profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className='text-black' href="#action/3.4">
                Log Out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};

export default Header;