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
  const [serverResponse, setServerResponse] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const sendMessage = (values) => {
    fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          setServerResponse(
            "Wiadomość została wysłana! Wkrótce się skontaktujemy!"
          );
          setName("");
          setEmail("");
          setMessage("");
          setTimeout(() => {
            setServerResponse("");
          }, 3000);
        }
      })

      .catch((error) => {
        console.log(error);
      });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (Object.keys(validationMessage(values)).length) {
      setErrors({ ...errors, ...validationMessage(values) });
      return;
    }

    sendMessage(values);
  };

  return (
    <div className="main_contact--container" id="contact">
      <div className="main_contact--footer">
        <div className="main_contact--section main_contact--decoration"></div>

        <div className="main_contact--section main_contact--form">
          <h1>Skontaktuj się z nami</h1>
          <img src={decorator} alt="decorator" />
          {}
          {serverResponse && <h3 className="message-sent">{serverResponse}</h3>}
          <form onSubmit={handleFormSubmit} className="contact_form">
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
            <button type="submit">Wyślij</button>
          </form>
        </div>
      </div>
      <HomeFooter />
    </div>
  );
}
