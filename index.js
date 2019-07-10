const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

const paypal = require("paypal-rest-sdk");
const stripe = require("stripe")("sk_test_JnCMEY1BVUQI2jgPSWVgxiuK00aauooikT");

app.use(cors());
app.use(bodyParser.json());

// home route

app.get("/", (req, res) => {
  console.log("server request");
  return res.send("hello");
});

// paypal

paypal.configure({
  mode: "sandbox",
  client_id:
    "AdX7478SIDLxqyF3A6eylRjRf_aLaMEcMIcHYXJwdgLcFIiipmjNRZ7nEfETSpvSPvNUZE2SGm_bRoGO",
  client_secret:
    "EJm25CWRFWfLGZBIwdHk6w7_Cf18dtG0_vFMyZq2uMjIcPhvkqLWs-fdxdjKZrg56_FEaM8QcM9KxTS6"
});

app.post("/pay/paypal", (req, res) => {
  console.log("payment mode:- paypal");

  const create_payment_json = {
    intent: "sale",
    payer: {
      payment_method: "paypal"
    },
    redirect_urls: {
      return_url: "http://localhost:4000/paypal/success",
      cancel_url: "http://localhost:4000/paypal/cancel"
    },
    transactions: [
      {
        item_list: {
          items: [
            {
              name: "Testing paypal",
              sku: "001",
              price: "5.00",
              currency: "USD",
              quantity: 1
            }
          ]
        },
        amount: {
          currency: "USD",
          total: "5.00"
        },
        description: "Testing the paypal payment integration method"
      }
    ]
  };

  paypal.payment.create(create_payment_json, (error, payment) => {
    if (error) {
      return error;
    } else {
      for (let i = 0; i < payment.links.length; i++) {
        if (payment.links[i].rel === "approval_url") {
          res.redirect(payment.links[i].href);
        }
      }
    }
  });
});

app.get("/paypal/success", (req, res) => {
  const payerId = req.query.PayerID;
  const paymentId = req.query.paymentId;

  const execute_payment_json = {
    payer_id: payerId,
    transactions: [
      {
        amount: {
          currency: "USD",
          total: "5.00"
        }
      }
    ]
  };

  paypal.payment.execute(paymentId, execute_payment_json, (error, payment) => {
    if (error) {
      console.log(error.response);
      throw error;
    } else {
      console.log(JSON.stringify(payment));
      res.send("Payment was successfully made");
    }
  });
});

app.get("/paypal/cancel", (req, res) => {
  console.log("payment cancelled");
  res.send("Payment cancelled. Try again.");
});

// stripe

app.post("/pay/stripe", (req, res) => {
  console.log("payment mode:- stripe");
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd"
  };
  stripe.charges.create(body, (error, data) => {
    if (error) {
      console.log("error", error);
      res.send("error");
    } else {
      console.log("res", data);
      res.send(data);
    }
  });
});

//listen

app.listen(4000);
