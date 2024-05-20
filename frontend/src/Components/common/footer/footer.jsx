import React from "react";
import './footer.css'; // Import your custom CSS file for footer styling
import logo1 from "../images/logo1.png";
import logo2 from "../images/logo2.jpg";
import logo3 from "../images/logo2.jpg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logos">
        <img src={logo1} className="footer-logo" alt="Brand Logo 1" />
        <img src={logo2} className="footer-logo" alt="Brand Logo 2" />
        <img src={logo3} className="footer-logo" alt="Brand Logo 3" />
      </div>
      <div className="footer-copy">
        <p>Privacy Policy | Terms of Service</p>
        <p>&copy; Copyright {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

export default Footer;
