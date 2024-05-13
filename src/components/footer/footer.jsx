import React from "react";
import "../../styles/footer/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
import {
  faFacebook,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="inner-footer-container">
        <div className="main-footer">
          <div className="brand">
            <h2>hynthi jewelry®</h2>
            <span>EMAIL</span>
            <p>hynthi@jewelry.com</p>
          </div>
          <div className="footer-nav">
            <strong>COLLECTIONS</strong>
            <p>Jewelry for women</p>
            <p>Jewelry for men</p>
            <p>Pearl jewelry</p>
            <p>Diamond jewelry</p>
          </div>
          <div className="footer-nav">
            <strong>ABOUT US</strong>
            <p>Mission</p>
            <p>History</p>
            <p>Contact</p>
          </div>
          <div className="footer-nav">
            <strong>GUIDES</strong>
            <p>How to choose the perfect jewelry</p>
            <p>Jewelry care and cleaning</p>
            <p>Jewelry trends</p>
            <p>Shopping tips</p>
          </div>
          <div className="footer-nav">
            <strong>NEWS</strong>
            <p>New collections</p>
            <p>Promotions and sales</p>
            <p>Events and exhibitions</p>
          </div>
        </div>
        <div className="other-footer">
          <p>© 2024 hynthistudio.vn</p>
          <div className="social">
            <a href="https://www.facebook.com/" className="social-item">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
              <p>Facebook</p>
            </a>
            <a href="" className="social-item">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
              <p>Instagram</p>
            </a>
            <a href="" className="social-item">
              <FontAwesomeIcon icon={faGithub} size="lg" />
              <p>Github</p>
            </a>
          </div>
          <div className="term">
            <p>Terms of use</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
