import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="contact-info"></div>
        
        <div className="social-media">
          <a
            href="https://www.linkedin.com/in/daniel-sanchez-7b8a33129"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin /> LinkedIn
          </a>

          <a 
            href="http://github.com/SanDan11"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaGithub /> Github

          </a>
        </div>

        <div className="footer-nav">
          <a href="#top">Back to top</a>
          <a href="/contact">Contact</a>
          <a href="/resume">Resume</a>
        </div>
        
        <p>© 2025 Daniel Sanchez. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
