import React from "react";
import PropTypes from "prop-types";

import "./BuildControl.css";

const BuildControl = (props) => (
  <div className="BuildControl">
    <label>{props.label}</label>
    <button className="Less">Less</button>
    <button className="More">More</button>
  </div>
);

BuildControl.propTypes = {
  label: PropTypes.string.isRequired,
};

export default BuildControl;
