import React, { Fragment, useState } from "react";
import Burger from "../components/Burger/Burger";

const BurgerBuilder = () => {
  const [ingredients] = useState({
    salad: 1,
    bacon: 1,
    cheese: 2,
    meat: 2,
  });

  return (
    <Fragment>
      <Burger ingredients={ingredients} />
      <div>Build Controls</div>
    </Fragment>
  );
};

export default BurgerBuilder;
