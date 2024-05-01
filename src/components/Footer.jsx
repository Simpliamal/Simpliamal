import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
        <div className="footer-content">
          <div className="contact-info">
            <h2>Contact Us</h2>
          </div>
          <div className="social-icons">
            <h5>Follow on Linkedin:</h5>&nbsp;<Link href="linkedin.com/in/anoopsiddharth"><i className="fab fa-linkedin"></i></Link>
          </div>
        </div>
      </footer>
    );
}

export default Footer;
