import React from "react";
import { Link } from "react-router-dom";
import decorator from "../assets/Decoration.svg";

export default function HomeHeader() {
  return (
    <div className="header_container" id="home">
      <div className=" header_el header_el--image"> </div>
      <div className="header_el header_el--heading">
        <div className="header_center--section">
          <div className="center_section--elements">
            <h1 className="center_section--headline">
              Zacznij pomagać!<br></br>Oddaj niechciane rzeczy w zaufane ręce
            </h1>
            <img src={decorator} alt="decorator" />
            <div className="header-buttons__container">
              <Link to="/login" className="header-button">
                Oddaj rzeczy
              </Link>
              <Link to="/login" className="header-button">
                Zorganizuj zbiórkę
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
