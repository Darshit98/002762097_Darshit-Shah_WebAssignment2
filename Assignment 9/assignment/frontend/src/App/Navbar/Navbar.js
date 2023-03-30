import React from 'react';
import { useSignOut } from 'react-auth-kit';
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Container, Nav } from 'react-bootstrap';
import { BsFillHouseFill, BsInfoCircleFill, BsBriefcaseFill, BsEnvelopeFill } from 'react-icons/bs';


const MyNavbar = () => {
  const signOut = useSignOut();
  const navigate = useNavigate();

  const logout = () => {
    signOut();
    navigate("/login");
  };

  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <BsFillHouseFill /> Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/about">
              <BsInfoCircleFill /> About
            </Nav.Link>
            <Nav.Link as={Link} to="/job">
              <BsBriefcaseFill /> Jobs
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              <BsEnvelopeFill /> Contact
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link onClick={logout}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
