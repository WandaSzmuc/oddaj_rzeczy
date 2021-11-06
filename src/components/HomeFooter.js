import React from "react";
import facebook from "../assets/Facebook.svg";
import instagram from "../assets/Instagram.svg";
export default function HomeFooter() {
  return (
    <div className="footer-container">
      <div className="footer-container--copyrights">
        <p>Copyright by Coders Lab</p>
      </div>
      <div className="footer-container--icons">
        <img src={facebook} alt="facebook" />
        <img src={instagram} alt="instagram" />
      </div>
    </div>
  );
}
