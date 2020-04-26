import React from "react";
import PropTypes from "prop-types";

import "./Button.css";

const Button = (props) => (
  <button
    className={["Button", props.btnType].join(" ")}
    onClick={props.clicked}
  >
    {props.children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  btnType: PropTypes.string.isRequired,
  clicked: PropTypes.func,
};

export default Button;
