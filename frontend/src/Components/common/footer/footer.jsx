import React from "react";
import './footer.css'; // Import your custom CSS file for footer styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src="/logo1.svg" className="footer-logo" alt="Brand Logo 1" />
        <img src="/logo2.svg" className="footer-logo" alt="Brand Logo 2" />
        <img src="/logo3.svg" className="footer-logo" alt="Brand Logo 3" />
      </div>
      <div className="footer-right">
        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>Email: example@example.com</p>
          <p>Phone: 123-456-7890</p>
          <p>Address: 123 Street, City, Country</p>
        </div>
        <div className="social-icons">
          <a href="#"><img src="/instagram.svg" alt="Instagram" className="social-icon" /></a>
          <a href="#"><img src="/facebook.svg" alt="Facebook" className="social-icon" /></a>
          <a href="#"><img src="/whatsapp.svg" alt="WhatsApp" className="social-icon" /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
