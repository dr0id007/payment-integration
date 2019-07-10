import React from "react";

const payment_success = data => {
  const id = data.data.id;
  const recipt = data.data.receipt_url;
  console.log(data);
  return (
    <div>
      Payment successfully made
      {id}
      {recipt}
      {"hello"}
    </div>
  );
};

export default payment_success;
