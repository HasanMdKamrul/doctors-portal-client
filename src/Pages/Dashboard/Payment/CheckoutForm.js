import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";

const CheckoutForm = () => {
  const [cardError, setCardError] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    // ** Now we need to get the card data entered by the user
    const card = elements.getElement(CardElement);

    console.log(card);
    // ** Card er data jodi null hoi amra return kore dibo
    if (card === null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    // ** ekhon ekta payment method create korbo

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card", //** kon type er payment hobe -> creadit or debit related */
      card,
    });

    if (error) {
      console.log(error);
      setCardError(error.message);
    } else {
      setCardError("");
    }
  };
  return (
    <div className="p-12 bg-gray-200 shadow-2xl w-96 my-12 rounded-2xl">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button className="btn btn-sm mt-6" type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600">{cardError}</p>}
    </div>
  );
};

export default CheckoutForm;
