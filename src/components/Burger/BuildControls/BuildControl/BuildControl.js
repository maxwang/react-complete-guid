import React from "react";
import PropTypes from "prop-types";

import "./BuildControl.css";

const BuildControl = (props) => (
  <div className="BuildControl">
    <label>{props.label}</label>
    <button className="Less" onClick={props.removed}>
      Less
    </button>
    <button className="More" onClick={props.added}>
      More
    </button>
  </div>
);

BuildControl.propTypes = {
  label: PropTypes.string.isRequired,
  added: PropTypes.func.isRequired,
  removed: PropTypes.func.isRequired,
};

export default BuildControl;
