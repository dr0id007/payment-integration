import React from "react";
import { NavLink } from "react-router-dom";

const success = data => {
  const id = data.location.state.id;
  const receipt_url = data.location.state.receipt_url;
  return (
    <div className="success">
      <div className="success-head text-center">
        <h4>Payment Success</h4>
      </div>
      <div className="success-text">
        <p>Transaction Id:- {id} </p>
        <p>
          <a href={receipt_url}>View your receipt</a>
        </p>
      </div>
      <NavLink to={"/"} className="btn">
        Go Back
      </NavLink>
    </div>
  );
};

export default success;
