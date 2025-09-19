"use client";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import "./footer.css"

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          {/* Column 1 */}
          <div className="footer-column">
            <h3>Samadhan Setu</h3>
            <p>
              Empowering communities to work with local governments for better
              neighborhoods.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#">
                  <FaArrowRight className="me-2" /> Home
                </a>
              </li>
              <li>
                <a href="#">
                  <FaArrowRight className="me-2" /> Report Issue
                </a>
              </li>
              <li>
                <a href="#">
                  <FaArrowRight className="me-2" /> Issues Map
                </a>
              </li>
              <li>
                <a href="#">
                  <FaArrowRight className="me-2" /> Dashboard
                </a>
              </li>
              <li>
                <a href="#">
                  <FaArrowRight className="me-2" /> About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="footer-column">
            <h3>Resources</h3>
            <ul>
              <li>
                <a href="#">
                  <FaArrowRight className="me-2" /> Help Center
                </a>
              </li>
              <li>
                <a href="#">
                  <FaArrowRight className="me-2" /> FAQ
                </a>
              </li>
              <li>
                <a href="#">
                  <FaArrowRight className="me-2" /> Community Guidelines
                </a>
              </li>
              <li>
                <a href="#">
                  <FaArrowRight className="me-2" /> Privacy Policy
                </a>
              </li>
              <li>
                <a href="#">
                  <FaArrowRight className="me-2" /> Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="footer-column">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <FaEnvelope className="me-2" /> support@citizenconnect.org
              </li>
              <li>
                <FaPhone className="me-2" /> +1 (555) 123-4567
              </li>
              <li>
                <FaMapMarkerAlt className="me-2" /> 123 Civic Center, City Hall
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="copyright">
          <p>&copy; 2025 Samadhan Setu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
