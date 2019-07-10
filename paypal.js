const paypal = require("paypal-rest-sdk");

function pay_request(app) {
  paypal.configure({
    mode: "sandbox",
    client_id:
      "AdX7478SIDLxqyF3A6eylRjRf_aLaMEcMIcHYXJwdgLcFIiipmjNRZ7nEfETSpvSPvNUZE2SGm_bRoGO",
    client_secret:
      "EJm25CWRFWfLGZBIwdHk6w7_Cf18dtG0_vFMyZq2uMjIcPhvkqLWs-fdxdjKZrg56_FEaM8QcM9KxTS6"
  });
  const create_payment_json = {
    intent: "sale",
    payer: {
      payment_method: "paypal"
    },
    redirect_urls: {
      return_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel"
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

  const some = paypal.payment.create(create_payment_json, (error, payment) => {
    if (error) {
      return error;
    } else {
      for (let i = 0; i < payment.links.length; i++) {
        if (payment.links[i].rel === "approval_url") {
          app.redirect(payment.links[i].href);
        }
      }
    }
  });

  console.log(some);
  return some;
}

exports.module = pay_request();
