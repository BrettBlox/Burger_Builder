import React, { Component } from "react";

import classes from "./ContactData.css";
import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";
import axios from "../../../axiosOrders";
import Input from "../../../components/UI/Input/Input";

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Name"
        },
        value: ""
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Street"
        },
        value: ""
      },
      zipCode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Zip Code"
        },
        value: ""
      },
      country: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Country"
        },
        value: ""
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Email Address"
        },
        value: ""
      },
      deliveryMethod: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "fastest", displayValue: "Fastest" },
            { value: "cheapest", displayValue: "Cheapest" }
          ]
        },
        value: ""
      }
    },
    loading: false
  };

  orderHandler = event => {
    event.preventDefault();
    this.setState({
      loading: true
    });

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price
    };
    axios
      .post("/orders.json", order)
      .then(response => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch(response => {
        this.setState({ loading: false });
      });
  };

  render() {
    let formElementsArray = [];
    for (let el in this.state.orderForm) {
      formElementsArray.push({
        id: el,
        config: this.state.orderForm[el]
      });
    }
    let form = (
      <form>
        {formElementsArray.map(el => (
          <Input
            inputtype={el.config.elementType}
            key={el.id}
            elementType={el.config.elementType}
            elementConfig={el.config.elementConfig}
            defaultValue={el.config.value}
          />
        ))}
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter Your Contact Information</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;