import "./index.scss";
// import LogoS from "../../assets/images/logo-s.png";
import Logo from "../../assets/images/logo.png";
import codechefLogo from "../../assets/images/codechef.png";
// import LogoSubtitle from "../../assets/images/Sudip_logo_white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faWhatsapp, faTelegram,faDiscord } from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faUser,
  faEnvelope,
  faScrewdriverWrench,
  faDroplet
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="nav-bar">
        <Link className="logo" to="/">
          <img src={Logo} alt="Logo" />
          {/* <img className="sub-logo" src={LogoSubtitle} alt="slobodan" /> */}
        </Link>
        
        <nav>
          <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>
          <NavLink activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>

          <NavLink
            activeclassname="active"
            className="experiences-link"
            to="/experiences"
          >
            <FontAwesomeIcon icon={faDroplet} color="#4d4d4e" />
          </NavLink>

          <NavLink
            activeclassname="active"
            className="skills-link"
            to="/skills"
          >
            <FontAwesomeIcon icon={faScrewdriverWrench} color="#4d4d4e" />
          </NavLink>

          <NavLink
            activeclassname="active"
            className="contact-link"
            to="/contact"
          >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>
        </nav>
        <ul>
          {/* <li>
            <a
              href="https://www.linkedin.com/in/littl-sage/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} color="#b9b9b9" />
            </a>
          </li> */}
          <li>
            <a
              href="https://github.com/littlsage"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} color="#b9b9b9" />
            </a>
          </li>
          <li>
            <a
              href="https://t.me/littlesaged"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faTelegram} color="#b9b9b9" />
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/14087911038"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faWhatsapp} color="#b9b9b9" />
            </a>
          </li>
          <li>
            <a
              href="https://www.codechef.com/users/#"
              target="_blank"
              rel="noreferrer"
            >
              <img src={codechefLogo} width="24" alt="Codechef" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
