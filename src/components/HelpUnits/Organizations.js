import React, { useEffect, useState } from "react";

export default function Organizations() {
  const [unit, setUnit] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/organizations").then((result) => {
      result.json().then((resp) => {
        console.log(resp);
        setUnit(resp);
      });
    });
  }, []);
  console.log(unit);
  return (
    <div>
      {unit.map((item) => (
        <div>
          <div className="help_unit">
            <h1 className="help_unit--name">{item.name}</h1>
            <p className="help_unit--description">{item.description}</p>
          </div>

          <div className="help_unit--stuff">{item.stuff}</div>
        </div>
      ))}
    </div>
  );
}
