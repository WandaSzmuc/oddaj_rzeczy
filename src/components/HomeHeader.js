import React from "react";
import HomeNav from "./HomeNav";
import decorator from "../assets/Decoration.svg";
import homehero from "../assets/Home-Hero-Image.jpg";
export default function HomeHeader() {
  return (
    <div className="header_container">
      <div className=" header_el">
        {" "}
        <img src={homehero} className="header_img" />
      </div>

      <div className="header_el">
        <div>
          <HomeNav />
        </div>

        <div className="header_center--section">
          <div className="center_section--elements">
            <h1 className="center_section--headline">
              Zacznij pomagać!<br></br>Oddaj niechciane rzeczy w zaufane ręce
            </h1>
            <img src={decorator} />
            <div className="header-buttons__container">
              <a href="#" className="header-button">
                Oddaj rzeczy
              </a>
              <a href="#" className="header-button">
                Zorganizuj zbiórkę
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
