// Footer.js
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__column">
        <h3>Contact Us</h3>
        <p className="flex ai-c">
          <AiOutlineMail /> <p>info@halaljibika.com</p>
        </p>
        <p className="flex ai-c">
          <AiOutlinePhone /> <p>+1 (123) 456-7890</p>
        </p>
      </div>
      <div className="footer__column">
        <h3>Quick Links</h3>
        <ul>
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">
              About
            </Link>
          </li>
          <li>
            <Link to="/jobs">
              Jobs
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer__column">
        <h3>Connect With Us</h3>
        <p>Follow us on social media:</p>
        <div className="social-icons">
          <a href="#" className="icon">
            <FaFacebook />
          </a>
          <a href="#" className="icon">
            <FaTwitter />
          </a>
          <a href="#" className="icon">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
