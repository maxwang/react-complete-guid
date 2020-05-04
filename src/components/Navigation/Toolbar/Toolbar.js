import React from "react";

import "./Toolbar.css";
import Lego from "../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const Toolbar = (props) => (
  <header className="Toolbar">
    <div>MENU</div>
    <Lego />
    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default Toolbar;
