import React from "react";

import burgerLogo from "../../../assets/burger-logo.png";
import "./Logo.css";

const Logo = (props) => (
  <div className="Logo">
    <img src={burgerLogo} alt="MyBurger" className="Logo" />
  </div>
);

export default Logo;
