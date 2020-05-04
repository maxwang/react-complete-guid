import React from "react";
import PropTypes from "prop-types";

import "./NavigationItem.css";

const NavigationItem = (props) => (
  <li className="NavigationItem">
    <a href={props.link} className={props.active ? "active" : null}>
      {props.children}
    </a>
  </li>
);

NavigationItem.propTypes = {
  link: PropTypes.string.isRequired,
  active: PropTypes.bool,
  children: PropTypes.object,
};

export default NavigationItem;
