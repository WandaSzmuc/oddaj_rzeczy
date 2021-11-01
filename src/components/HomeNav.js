import React from "react";
import { Link } from "react-router-dom";

const HomeNav = () => {
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
          <Link to="/" className="sections_links--button">
            Start
          </Link>
          <Link to="/HomeFourSteps" className="sections_links--button">
            O co chodzi?
          </Link>
          <Link to="/HomeAboutUs" className="sections_links--button">
            O nas
          </Link>
          <Link to="/HomeOrganizations" className="sections_links--button">
            Fundacja i organizacje
          </Link>
          <Link to="/HomeContact" className="sections_links--button">
            Kontakt
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HomeNav;
