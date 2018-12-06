import React from "react";

import classes from "./Order.css";

const order = props => {
  const ingredients = [];
  for (let el in props.ingredients) {
    ingredients.push({ name: el, amount: props.ingredients[el] });
  }

  const ingredientOutput = ingredients.map(el => {
    return (
      <span
        style={{
          textTransform: "capitalized",
          display: "flex",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "5px"
        }}
        key={el.name}
      >
        {el.name} ({el.amount})
      </span>
    );
  });

  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredientOutput}</p>
      <p>
        <strong>Price: USD {Number.parseFloat(props.price).toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default order;
