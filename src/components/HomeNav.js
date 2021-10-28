import React from "react";
import { Link } from "react-router-dom";

const HomeNav = () => {
  return (
    <div className="home-nav">
      <div className="home-nav-container">
        <div className="registration">
          <Link to="/Login">Zaloguj</Link>
          <Link to="/Register">Załóż konto</Link>
        </div>
        <div className="sections-links">
          <Link to="/">Start</Link>
          <Link to="/HomeFourSteps">O co chodzi?</Link>
          <Link to="/HomeAboutUs">O nas</Link>
          <Link to="/HomeOrganizations">Fundacja i organizacje</Link>
          <Link to="/HomeContact">Kontakt</Link>
        </div>
      </div>
    </div>
  );
};
export default HomeNav;
