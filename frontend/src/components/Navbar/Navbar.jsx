import React from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Nav1 = () => {
  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="top-nav">
        <ul>
          <li><a href="#">Fee Payment Portal</a></li>
          <li><a href="#">Law Faculty Library</a></li>
          <li><a href="#">Prospectus</a></li>
        </ul>
      </nav>

      {/* Main Navbar */}
      <Navbar expand="lg" className="main-navbar sticky-top" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home" className="logo-container">
            <img src="/src/assets/CLC_logo1.png" alt="CLC Logo" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavDropdown title="About Us" id="nav-dropdown">
                <NavDropdown.Item href="#">Our History</NavDropdown.Item>
                <NavDropdown.Item href="#">Mission & Vision</NavDropdown.Item>
                <NavDropdown.Item href="#">Administration</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Being at CLC" id="nav-dropdown">
                <NavDropdown.Item href="#">Student Life</NavDropdown.Item>
                <NavDropdown.Item href="#">Campus Facilities</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Forms" id="nav-dropdown">
                <NavDropdown.Item href="#">Admission Forms</NavDropdown.Item>
                <NavDropdown.Item href="#">Exam Forms</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Faculty & Staff" id="nav-dropdown">
                <NavDropdown.Item href="#">Professors</NavDropdown.Item>
                <NavDropdown.Item href="#">Administrative Staff</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Committees & Societies" id="nav-dropdown">
                <NavDropdown.Item href="#">Student Committees</NavDropdown.Item>
                <NavDropdown.Item href="#">Research Societies</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#journal">Journal</Nav.Link>
              <Nav.Link href="#alumni">Alumni</Nav.Link>
              <Nav.Link href="#achievements">Achievements</Nav.Link>
              <Nav.Link href="#contact">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Nav1;
