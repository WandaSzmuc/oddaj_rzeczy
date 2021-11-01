import React from "react";
import HomeNav from "./HomeNav";
import decorator from "../assets/Decoration.svg";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div>
      <HomeNav />
      <div className="login_section">
        <div className="login_container">
          <h1 className="login_heading">Zaloguj się</h1>
          <img src={decorator} className="login_decorator" />
          <form>
            <div className="login_form">
              <div className="login_form--inputs">
                <label className="login_form--label">Email</label>
                <input className="login_form--input"></input>
              </div>
              <div className="login_form--inputs">
                <label className="login_form--label">Hasło</label>
                <input className="login_form--input"></input>
              </div>
            </div>
          </form>
          <div className="login_form--buttons">
            <Link to="/register" className="login_form--button">
              Załóż konto
            </Link>
            <Link to="/login" className="login_form--button">
              Zaloguj
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
