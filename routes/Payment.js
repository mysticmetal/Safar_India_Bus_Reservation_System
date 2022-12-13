


var express = require("express");
var router = express.Router();


const stripe = require("stripe")(process.env.STRIP_SECRET_KEY); // <-- change the key here



// Create a Payment Intent (returns the client with a temporary secret)
router.post("/create-payment-intent", async (req, res) => {
    const { amt,id } = req.body;
  
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amt*100,
      currency: "inr",
      metadata: {
        customer_id: id, 
      },
    });
  
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  });
  




module.exports = router;