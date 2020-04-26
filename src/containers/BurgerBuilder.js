import React, { Fragment, useState } from "react";
import Burger from "../components/Burger/Burger";
import BuildControls from "../components/Burger/BuildControls/BuildControls";
import Modal from "../components/Shared/Modal/Modal";
import BurgerSummary from "../components/Burger/BurgerSummary/BurgerSummary";

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
  const totalIngredients = Object.values(ingredients).reduce(
    (sum, x) => sum + x,
    0
  );
  return (
    <Fragment>
      {totalIngredients > 0 && (
        <Modal show={totalIngredients > 0}>
          <BurgerSummary
            ingredients={ingredients}
            total={totalPrice}
            burgerCancelled={() => {
              setIngredients({ salad: 0, bacon: 0, cheese: 0, meat: 0 });
              setTotalPrice(4);
            }}
          />
        </Modal>
      )}
      <Burger ingredients={ingredients} />
      <BuildControls
        totalPrice={totalPrice}
        purchasable={totalPrice < 4.01}
        ingredientAdded={(type) => {
          setIngredients({ ...ingredients, [type]: ingredients[type] + 1 });
          setTotalPrice(totalPrice + INGREDIENT_PRICES[type]);
        }}
        ingredientRemoved={(type) => {
          const current = ingredients[type];
          if (current > 0) {
            setIngredients({ ...ingredients, [type]: ingredients[type] - 1 });
            setTotalPrice(totalPrice - INGREDIENT_PRICES[type]);
          }
        }}
      />
    </Fragment>
  );
};

export default BurgerBuilder;
