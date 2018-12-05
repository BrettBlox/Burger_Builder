import React, { Component } from "react";

import Aux from "../../../hoc/Aux/Aux";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(el => {
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
          <p>Total Price: {this.props.price.toFixed(2)}</p>
        </strong>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinue}>
          CONTINUE
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
