import React from "react";
import PropTypes from "prop-types";

import "./Modal.css";

const Modal = (props) => <div className="Modal">{props.children}</div>;

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Modal;
