import React from "react";
import Links from "./Links";
import { TiThMenu } from "react-icons/ti";
import { RiCloseCircleFill } from "react-icons/ri";
import { useState } from "react";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);
  const hamburgerIcon = (
    <TiThMenu className="hamburger" onClick={() => setOpen(!open)} />
  );
  const closeIcon = (
    <RiCloseCircleFill className="hamburger" onClick={() => setOpen(!open)} />
  );
  return (
    <div className="mobile_navigation">
      {open ? closeIcon : hamburgerIcon}
      {open && <Links />}
    </div>
  );
};
export default MobileNavigation;
