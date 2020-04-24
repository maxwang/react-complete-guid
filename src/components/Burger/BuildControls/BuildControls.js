import React from "react";
import PropTypes from "prop-types";

import "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const BuildControls = (props) => {
  const controls = [
    { label: "Salad", type: "salad" },
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" },
    { label: "Meat", type: "meat" },
  ];
  return (
    <div className="BuildControls">
      <div>
        Current Price: <strong>{props.totalPrice.toFixed(2)}</strong>
      </div>
      {controls.map((ctrl) => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          removed={() => props.ingredientRemoved(ctrl.type)}
          added={() => props.ingredientAdded(ctrl.type)}
        />
      ))}
      <button className="OrderButton" disabled={props.purchasable}>
        Order Now
      </button>
    </div>
  );
};

BuildControls.propTypes = {
  purchasable: PropTypes.bool.isRequired,
  totalPrice: PropTypes.number.isRequired,
  ingredientRemoved: PropTypes.func.isRequired,
  ingredientAdded: PropTypes.func.isRequired,
};
export default BuildControls;
