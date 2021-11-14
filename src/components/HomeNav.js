import React from "react";
import MobileNavigation from "./Navigation/MobileNavigation";
import Navigation from "./Navigation/Navigation";
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
        <MobileNavigation />
        <Navigation />
      </div>
    </div>
  );
};
export default HomeNav;
