import React from "react";
import decorator from "../assets/Decoration.svg";
import signature from "../assets/Signature.svg";

export default function HomeAboutUs() {
  return (
    <div className="about_us--container">
      <div className="about_us--section about_us--description">
        <h1>O nas</h1>
        <img src={decorator} />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <img src={signature} className="about_us--signature" />
      </div>
      <div className="about_us--section about_us--img">/></div>
    </div>
  );
}
