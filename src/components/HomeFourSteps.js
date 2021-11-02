import React from "react";
import { Link } from "react-router-dom";
import decorator from "../assets/Decoration.svg";
import icon1 from "../assets/Icon-1.svg";
import icon2 from "../assets/Icon-2.svg";
import icon3 from "../assets/Icon-3.svg";
import icon4 from "../assets/Icon-4.svg";

export default function HomeFourSteps() {
  return (
    <div className="four_steps--container" id="steps">
      <div className="four_steps--headline_container">
        <h1 className="four_steps--headline">Wystarczą 4 proste kroki</h1>
        <img src={decorator} className="four_steps--decorator" />
      </div>
      <div className="four_steps--steps">
        <div className="four_steps--step">
          <img src={icon1} />
          <h1>Wybierz rzeczy</h1>
          <div></div>
          <p>ubrania, zabawki, sprzęt i inne</p>
        </div>
        <div className="four_steps--step">
          <img src={icon2} />
          <h1>Spakuj je</h1>
          <div></div>
          <p> skorzystaj z worków na śmieci</p>
        </div>
        <div className="four_steps--step">
          <img src={icon3} />
          <h1>Zdecyduj komu chcesz pomóc</h1>
          <div></div>
          <p>wybierz zaufane miejsce</p>
        </div>
        <div className="four_steps--step">
          <img src={icon4} />
          <h1>Zamów kuriera</h1>
          <div></div>
          <p>kurier przyjedzie w dogodnym terminie</p>
        </div>
      </div>
      <div className="four_steps--button_container">
        <Link to="/login" className="four_steps--button">
          Oddaj rzeczy
        </Link>
      </div>
    </div>
  );
}
