import React from "react";
import Stripe from "react-stripe-checkout";
import Axios from "axios";
import { Redirect } from "react-router-dom";
import Success from "../stateless/payment_success";
import { async } from "q";

class stripe extends React.Component {
  state = {
    transaction: false,
    data: {}
  };

  onToken = async token => {
    const body = {
      amount: 100.0,
      token: token
    };
    await Axios.post("/pay/stripe", body)
      .then(data => {
        console.log("data:-", data);
        if (data === "error") {
          this.setState({
            transaction: false,
            data: data
          });
          console.log("error in transaction");
        } else {
          this.setState({
            transaction: true,
            data: data
          });
          console.log("transaction successful");
        }
      })
      .catch(error => {
        console.log("error", error);
      });
  };
  render() {
    if (this.state.loading === true) {
      return <div>loading....screen</div>;
    }

    if (this.state.transaction === true) {
      return (
        <div>
          {/* <Success data={this.state.data.data} /> */}
          <Redirect
            to={{
              pathname: "/success",
              state: this.state.data.data
            }}
          />
        </div>
      );
    }
    return (
      <div>
        <Stripe
          token={this.onToken}
          billingAddress
          description={"awesome product"}
          zipCode
          stripeKey="pk_test_hqDW6qcom45k1OQFxNH8px6p00568oUzmT"
          label="Pay with 💳"
        >
          <button className="btn mt-3">Pay with 💳</button>
        </Stripe>
      </div>
    );
  }
}

export default stripe;
