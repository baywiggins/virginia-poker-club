import React from "react";
import "./styles/Footer.css";
import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2023 Virginia Poker Club. All rights reserved.</p>
        <ul className="footer-links">
          <li>
            <SocialIcon url="https://instagram.com/virginiapokerclub" />
          </li>
          <li>
            <SocialIcon
              url="mailto:virginiapokerclub@gmail.com"
              bgColor="green"
            />
          </li>
        </ul>
        <Link className="login-link" to="/login">
          Login
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
