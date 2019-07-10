import React from "react";
import { Link } from "react-router-dom";

const success = data => {
  console.log("input data:-", data);
  const id = data.location.state.id;
  const receipt_url = data.location.state.receipt_url;
  return (
    <div className="success">
      <div className="success-head">
        <h4>Payment Success</h4>
      </div>
      <div className="success-text">
        <p>Transaction Id:- {id} </p>
        <p>
          <a href={receipt_url}>View your receipt</a>
        </p>
      </div>
    </div>
  );
};

export default success;
