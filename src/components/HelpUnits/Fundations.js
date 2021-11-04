import React, { useEffect, useState } from "react";

export default function Fundations({ fundations }) {
  const [units, setUnit] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/${fundations}`).then((result) => {
      result.json().then((resp) => {
        console.log(resp);
        setUnit(resp);
      });
    });
  }, []);

  return (
    <div>
      {units.map((unit) => (
        <div className="help_unit">
          <div className="help_unit--el">
            <h1 className="help_unit--name">{unit.name}</h1>
            <p className="help_unit--description">{unit.description}</p>
          </div>

          <div className="help_unit--el help_unit--stuff">{unit.stuff}</div>
        </div>
      ))}
    </div>
  );
}
