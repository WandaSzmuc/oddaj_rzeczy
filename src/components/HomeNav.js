import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
const HomeNav = ({ duration }) => {
  return (
    <div className="home_nav">
      <div className="home_nav--container">
        <div className="registration">
          <Link to="/login" className="registration_button">
            Zaloguj
          </Link>
          <Link to="/register" className="registration_button">
            Załóż konto
          </Link>
        </div>
        <div className="sections_links">
          <Link to="/" className="sections_links--button ">
            Start
          </Link>
          <ScrollLink
            to="steps"
            smooth={true}
            duration={duration}
            className="sections_links--button sections_links--none"
          >
            O co chodzi?
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            duration={duration}
            className="sections_links--button sections_links--none"
          >
            O nas
          </ScrollLink>
          <ScrollLink
            to="organizations"
            smooth={true}
            duration={duration}
            className="sections_links--button sections_links--none"
          >
            Fundacja i organizacje
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={duration}
            className="sections_links--button sections_links--none"
          >
            Kontakt
          </ScrollLink>
        </div>
      </div>
    </div>
  );
};
export default HomeNav;
