import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer text-white mt-5">
      {/* Social Media Section */}
      <div className="footer-social d-flex justify-content-center align-items-center">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 social-icons"
        >
          <FontAwesomeIcon className="icons" icon={faFacebook} />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 social-icons"
        >
          <FontAwesomeIcon className="icons" icon={faTwitter} />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 social-icons"
        >
          <FontAwesomeIcon className="icons" icon={faInstagram} />
        </a>
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 social-icons"
        >
          <FontAwesomeIcon className="icons" icon={faYoutube} />
        </a>
      </div>

      {/* Footer Links Section */}
      <div className="footer-links-container container py-4">
        <div className="row">
          {/* Links */}
          <div className="col-md-3 ">
            <h5 className="fw-bold">Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Library
                </a>
              </li>
              <li>
                <a href="https://lawfaculty.du.ac.in/" className="text-white text-decoration-none">
                  Faculty of Law
                </a>
              </li>
              <li>
                <a href="https://www.du.ac.in/" className="text-white text-decoration-none">
                  University of Delhi
                </a>
              </li>
            </ul>
          </div>

          {/* College */}
          <div className="col-md-3">
            <h5 className="fw-bold">College</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Journal
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Notices
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Student */}
          <div className="col-md-3   ">
            <h5 className="fw-bold">Student</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Time Table
                </a>
              </li>
              <li>
                <a href="https://fee.du.ac.in/index.php/site/login" className="text-white text-decoration-none">
                  Fee Payment
                </a>
              </li>
              <li>
                <a href="https://lawfaculty.du.ac.in/Students/LL.B.-Course-Materials" className="text-white text-decoration-none">
                  Case Material
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div className="col-md-3">
            <h5 className="fw-bold">Community</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/faculty" className="text-white text-decoration-none">
                  Faculty
                </a>
              </li>
              <li>
                <a href="/librarystaff" className="text-white text-decoration-none">
                  Library Staff
                </a>
              </li>
              <li>
                <a href="/adminstaff" className="text-white text-decoration-none">
                  Administrative Staff
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom text-center py-2">
        <small>© 2024 Campus Law Centre. All Rights Reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
