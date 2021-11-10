import React from "react";
import HomeNav from "./HomeNav";
import decorator from "../assets/Decoration.svg";
import { Link } from "react-router-dom";

export default function Logout() {
  return (
    <div>
      <HomeNav />
      <div className="logout_container">
        <h1>Wylogowanie nastąpiło pomyślnie!</h1>
        <img src={decorator} alt="decorator" className="logout_decorator" />
        <Link to="/" className="logout_form--button">
          Strona główna
        </Link>
      </div>
    </div>
  );
}
