// https://fer-api.coderslab.pl/v1/portfolio/contact`.
import React, { useState } from "react";
import decorator from "../assets/Decoration.svg";
import HomeFooter from "./HomeFooter";
import validationMessage from "./validationMessage";

export default function HomeContact() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
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
    setErrors(validationMessage(values));
  };
  return (
    <div className="main_contact--container" id="contact">
      <div className="main_contact--footer">
        <div className="main_contact--section main_contact--decoration"></div>

        <div className="main_contact--section main_contact--form">
          <h1>Skontaktuj się z nami</h1>
          <img src={decorator} alt="decorator" />
          <form className="contact_form">
            <div className="contact_form--section">
              <div className="contact_form--container">
                <label>Wpisz swoje imię</label>
                <input
                  type="name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                ></input>
                {errors.name && <p className="error">{errors.name}</p>}
              </div>
              <div className="contact_form--container">
                <label>Wpisz swój email</label>
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                ></input>
                {errors.email && <p className="error">{errors.email}</p>}
              </div>
            </div>
            <label>Wpisz swoją wiadomość</label>
            <input
              className="message_input"
              type="text"
              name="message"
              value={values.message}
              onChange={handleChange}
            ></input>
            {errors.message && <p className="error">{errors.message}</p>}
            <button onClick={handleFormSubmit} type="submit">
              Wyślij
            </button>
          </form>
        </div>
      </div>
      <HomeFooter />
    </div>
  );
}
