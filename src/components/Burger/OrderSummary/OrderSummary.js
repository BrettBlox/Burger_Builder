import React from "react";

import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(el => {
    return (
      <li key={el}>
        <span style={{ textTransform: "capitalize" }}>{el}</span>
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>Your Burger Ingredients</p>
      <ul>{ingredientSummary}</ul>
      <strong>
        <p>Total Price: {props.price.toFixed(2)}</p>
      </strong>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinue}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default orderSummary;
