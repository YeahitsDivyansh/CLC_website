import React from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const Nav1 = () => {
  return (
    <>
      {/* Top Navigation Bar */}
      <Nav className="top-nav">
        <div>
          <ul className="flex space-x-4 text-white">
            <li>Fee Payment Portal</li>
            <li>Law Faculty Library</li>
            <li>Prospectus</li>
          </ul>
        </div>
        <div>
          <button className="px-3 bg-blue-500 rounded">
            <a
              href="https://strapi-server-app-xw9w.onrender.com/admin"
              className="text-white"
              style={{ textDecoration: "none" }}
            >
              Sign In
            </a>
          </button>
        </div>
      </Nav>

      {/* Main Navbar */}
      <Navbar
        expand="lg"
        className="main-navbar sticky-top"
        bg="light"
        variant="light"
      >
        <Container>
          <Navbar.Brand href="/" className="logo-container">
            <img src="/CLC_logo1.png" alt="CLC Logo" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavDropdown
                title="About Us"
                id="nav-dropdown"
                suppressHydrationWarning
              >
                <NavDropdown.Item as={Link} to="/about_clc">
                  About CLC
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/from_desk_ipc">
                  From the Desk of PIC
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/campus">
                  Campus
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Being at CLC" id="nav-dropdown">
                <NavDropdown title="Academics" id="nav-dropdown">
                  <NavDropdown.Item
                    as={Link}
                    to="/being_at_clc/academics/course"
                  >
                    Course
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/being_at_clc/academics/examination_syllabus"
                  >
                    Examination & Syllabus
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Student Corner" id="nav-dropdown">
                  <NavDropdown.Item
                    as={Link}
                    to="/being_at_clc/student_corner/timetable"
                  >
                    Time Table & Section Allotment
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="https://lawfaculty.du.ac.in/Students/LL.B.-Course-Materials"
                  >
                    Case Material
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link} 
                    to="https://durslt.du.ac.in/AC_INTERNET_Marksheet_NDB/Students/Combine_GradeCard.aspx"
                  >
                    Results
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="https://lawfaculty.du.ac.in/Students/Important-Rules"
                  >
                    Imporant Rules
                  </NavDropdown.Item>
                </NavDropdown>
              </NavDropdown>

              <NavDropdown title="Forms" id="nav-dropdown">
                <NavDropdown.Item as={Link} to="/forms/services_for_students">
                  Services for Students
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Faculty & Staff" id="nav-dropdown">
                <NavDropdown.Item
                  as={Link}
                  to="/faculty_and_staff/faculty_members"
                >
                  Faculty Members
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/faculty_and_staff/guest_faculty"
                >
                  Guest Faculty
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/faculty_and_staff/library_faculty"
                >
                  Library Staff
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/faculty_and_staff/admin_staff">
                  Administrative Staff
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Committees & Societies" id="nav-dropdown">
                <NavDropdown.Item as={Link} to="/committees_and_societies/adr">
                  Alternative Dispute Resolution (ADR)
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/committees_and_societies/international_collaborations"
                >
                  Committee for International Collaboration
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/committees_and_societies/corporate_law_society"
                >
                  Corporate Law Society
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/committees_and_societies/criminal_law_society"
                >
                  Criminal Law Society
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/committees_and_societies/cultural_law_society"
                >
                  Cultural Law Society
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/committees_and_societies/debate_and_discussions_society"
                >
                  Debate & Discussions Society
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/committees_and_societies/legal_aid_society"
                >
                  Legal Aid Society
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/committees_and_societies/moot_court_society"
                >
                  Moot Court Society
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/committees_and_societies/placement_assistance_council"
                >
                  Placement Assistance Council
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/committees_and_societies/ipr_society"
                >
                  IPR Society
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/committees_and_societies/quiz_society"
                >
                  Quiz Society
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/committess_and_societies/other_committees"
                >
                  Other Committees
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={Link} to="/journal">
                Journal
              </Nav.Link>
              <Nav.Link as={Link} to="/alumni">
                Alumni
              </Nav.Link>
              <Nav.Link as={Link} to="/achievements">
                Achievements
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Nav1;
