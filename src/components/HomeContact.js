import React from "react";
import decorator from "../assets/Decoration.svg";
import HomeFooter from "./HomeFooter";
export default function HomeContact() {
  return (
    <div className="main_contact--container" id="contact">
      <div className="main_contact--footer">
        <div className="main_contact--section">
          <div className="main_contact--decoration"></div>{" "}
        </div>

        <div className="main_contact--section main_contact--form">
          <h1>Skontaktuj się z nami</h1>
          <img src={decorator} alt="decorator" />
          <form className="contact_form">
            <div className="contact_form--section">
              <div className="contact_form--container">
                <label>Wpisz swoje imię</label>
                <input></input>
              </div>
              <div className="contact_form--container">
                <label>Wpisz swój email</label>
                <input></input>
              </div>
            </div>
            <label>Wpisz swoją wiadomość</label>
            <input className="message_input"></input>
            <button>Wyślij</button>
          </form>
        </div>
      </div>
      <HomeFooter />
    </div>
  );
}
