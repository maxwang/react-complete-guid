import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Button from "../../Shared/Button/Button";

const BurgerSummary = (props) => {
  const ingredients = Object.keys(props.ingredients).map((inKey) => (
    <li key={inKey}>
      {inKey}:{props.ingredients[inKey]}
    </li>
  ));
  return (
    <Fragment>
      <h3>Your Order:</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredients}</ul>
      <h4>Price: {props.total.toFixed(2)}</h4>
      <Button btnType="Danger" clicked={props.burgerCancelled}>
        Cancel
      </Button>
    </Fragment>
  );
};

BurgerSummary.propTypes = {
  burgerCancelled: PropTypes.func,
  ingredients: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired,
};

export default BurgerSummary;
