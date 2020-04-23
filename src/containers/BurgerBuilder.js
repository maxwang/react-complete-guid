import React, { Fragment, useState } from "react";
import Burger from "../components/Burger/Burger";
import BuildControls from "../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

const BurgerBuilder = () => {
  const [ingredients, setIngredients] = useState({
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  });

  const [totalPrice, setTotalPrice] = useState(4);

  return (
    <Fragment>
      <Burger ingredients={ingredients} />
      <BuildControls
        totalPrice={totalPrice}
        ingredientAdded={(type) => {
          setIngredients({ ...ingredients, [type]: ingredients[type] + 1 });
          setTotalPrice(totalPrice + INGREDIENT_PRICES[type]);
        }}
        ingredientRemoved={(type) => {
          setIngredients({ ...ingredients, [type]: ingredients[type] - 1 });
          setTotalPrice(totalPrice - INGREDIENT_PRICES[type]);
        }}
      />
    </Fragment>
  );
};

export default BurgerBuilder;
