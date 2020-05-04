import React, { Fragment } from "react";
import PropTypes from "prop-types";

import "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";

const Layout = (props) => (
  <Fragment>
    <Toolbar />
    <main className="Content">{props.children}</main>
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.object,
};

export default Layout;
