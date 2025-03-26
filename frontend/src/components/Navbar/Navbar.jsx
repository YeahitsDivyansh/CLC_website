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
      <nav className="nav-1">
        <ul>
          <li>Fee Payment Portal</li>
          <li>Law Faculty Library</li>
          <li>Prospectus</li>
        </ul>
      </nav>

      {/* Middle Section: Logo and Main Navbar */}
      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        className="mid-image"
      >
        <div className="logo">
          <img
            style={{ height: "4rem", width: "12rem" }}
            src="/src/assets/CLC_logo1.png"
            alt="#"
          />
        </div>
        <div>
          <Navbar expand="lg" className="nav-2">
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <NavDropdown
                    title="Dropdown"
                    id="basic-nav-dropdown-1"
                    className="ms-3"
                  >
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                  </NavDropdown>
                  <NavDropdown
                    title="Dropdown"
                    id="basic-nav-dropdown-1"
                    className="ms-3"
                  >
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                  </NavDropdown>
                  <NavDropdown
                    title="Dropdown"
                    id="basic-nav-dropdown-1"
                    className="ms-3"
                  >
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                  </NavDropdown>
                  <NavDropdown
                    title="Dropdown"
                    id="basic-nav-dropdown-2"
                    className="ms-3"
                  >
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                  </NavDropdown>
                  <NavDropdown
                    title="Dropdown"
                    id="basic-nav-dropdown-3"
                    className="ms-3"
                  >
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                  </NavDropdown>
                  <Nav.Link className="ms-3" href="#home">
                    Home
                  </Nav.Link>
                  <Nav.Link className="ms-3" href="#link">
                    Link
                  </Nav.Link>
                  <Nav.Link className="ms-3" href="#home">
                    Home
                  </Nav.Link>
                  <Nav.Link className="ms-3" href="#link">
                    Link
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>
    </>
  );
};

export default Nav1;
