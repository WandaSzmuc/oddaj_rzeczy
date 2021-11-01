import React from "react";
import decorator from "../assets/Decoration.svg";

export default function HomeOrganizations() {
  return (
    <div id="organizations" className="organizations_section">
      <h1 className="organizations_section--heading">Komu pomagamy?</h1>
      <img src={decorator} className="organizations_section--decorator" />
    </div>
  );
}
