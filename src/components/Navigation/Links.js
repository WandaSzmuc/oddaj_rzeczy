import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
const Links = ({ duration }) => {
  return (
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
  );
};
export default Links;
