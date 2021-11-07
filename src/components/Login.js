import React, { useState } from "react";
import HomeNav from "./HomeNav";
import decorator from "../assets/Decoration.svg";
import { Link } from "react-router-dom";
import validation from "./validation";

export default function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(values));
  };
  return (
    <div>
      <HomeNav />
      <div className="login_section">
        <div className="login_container">
          <h1 className="login_heading">Zaloguj się</h1>
          <img src={decorator} alt="decorator" className="login_decorator" />

          <form>
            <div className="login_form">
              <div className="login_form--inputs">
                <label className="login_form--label">Email</label>
                <input
                  className="login_form--input"
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                ></input>
                {errors.email && <p className="error">{errors.email}</p>}
              </div>
              <div className="login_form--inputs">
                <label className="login_form--label">Hasło</label>
                <input
                  className="login_form--input"
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                ></input>
                {errors.password && <p className="error">{errors.password}</p>}
              </div>
            </div>
          </form>
          <div className="login_form--buttons">
            <Link to="/register" className="login_form--button">
              Załóż konto
            </Link>
            <a
              className="login_form--button"
              onClick={handleFormSubmit}
              type="submit"
            >
              Zaloguj
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
