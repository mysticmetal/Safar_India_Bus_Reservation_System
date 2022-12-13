import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import { useNavigate } from "react-router-dom";



const CheckoutForm = (prop) => {
  const navigate = useNavigate();

  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");
 
  const stripe = useStripe();
  const elements = useElements();

  // Dev ERROR: when we use arrow function useeffect hook call it two times which generate error

  //create a payment intent
  useEffect(() => {
    fetch("/api/payment/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amt: prop.amt, id: prop.id }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setClientSecret(data.clientSecret);
      });
    // eslint-disable-next-line
  }, []);

  //css for card element
  const cardStyle = {
    style: {
      
    },
  };

  // handle input errors
  const handleChange = async (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    const changePayStatus = await fetch("/api/booking/PaySuccess", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",   
      },
      body: JSON.stringify({ id: prop.id , payid:payload.paymentIntent.id }),
    });

   const data = await changePayStatus.json();
   

// console.log(payload.paymentIntent.id);

    if (payload.error || !data.acknowledged) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
      navigate("/success");
    }

  

  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <CardElement
        id="card-element"
        options={cardStyle}
        onChange={handleChange}
      />
      <button disabled={processing || disabled || succeeded} className="pay_btn" id="submit">
        <span id="button-text">
          {processing ? (
            <div className="spinner" id="spinner"></div>
          ) : (
            "Pay now"
          )}
        </span>
      </button>
      {error && (
        <div className="card-error" role="alert">
          {error}
        </div>
      )}
      <p className={succeeded ? "result-message" : "result-message hidden"}>
        Your Payment is Successfull
      </p>
    </form>
  );
};

export default CheckoutForm;
