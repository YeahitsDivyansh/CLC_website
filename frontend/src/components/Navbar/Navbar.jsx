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
                    title="About US"
                    id="basic-nav-dropdown-1"
                    //className="ms-3"
                  >
                    <NavDropdown.Item href="#action/3.1">
                      About CLC
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      From the Desk of PIC
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Campus
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                  </NavDropdown>

                  <NavDropdown
                    title="Being at CLC"
                    id="basic-nav-dropdown-1"
                    className="ms-3"
                  >
                    <NavDropdown.Item href="#action/3.1">
                      Academics
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Student Corner
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                  </NavDropdown>

                  <NavDropdown
                    title="Forms"
                    id="basic-nav-dropdown-1"
                    className="ms-3"
                  >
                    <NavDropdown.Item href="#action/3.1">
                      Services for Students
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                  </NavDropdown>

                  <NavDropdown
                    title="Faculty and Staff"
                    id="basic-nav-dropdown-2"
                    className="ms-3"
                  >
                    <NavDropdown.Item href="#action/3.1">
                      Faculty Members
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Guest Faculty
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Library Staff
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Administrative Staff
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                  </NavDropdown>

                  <NavDropdown
                    title="Committees & Societies"
                    id="basic-nav-dropdown-3"
                    className="ms-3"
                  >
                    <NavDropdown.Item href="#action/3.1">
                      Alternative Dispute Resolution (ADR) Society
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Committee for International Collaboration
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Corporate Law Society
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Criminal Law Society
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Cultural Society
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Debate & Discussions Society
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Legal Aid Society
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Moot Court Society
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Placement Assistance Council
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      IPR Society
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Quiz Society
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Other Committees
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                  </NavDropdown>

                  <Nav.Link className="ms-3" href="#home">
                    Journal
                  </Nav.Link>
                  <Nav.Link className="ms-3" href="#link">
                    Alumni
                  </Nav.Link>
                  <Nav.Link className="ms-3" href="#home">
                    Achievements
                  </Nav.Link>
                  <Nav.Link className="ms-3" href="#link">
                    Contact Us
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
