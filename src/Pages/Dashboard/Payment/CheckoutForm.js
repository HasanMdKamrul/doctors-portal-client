import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ price, patientName, email, bookingId }) => {
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transectionId, setTransectionId] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:15000/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

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
    // ** step-1 ekhon ekta payment method create korbo

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card", //** kon type er payment hobe -> creadit or debit related */
      card,
    });

    if (error) {
      console.log(error);
      setCardError(error.message);
      return;
    } else {
      setCardError("");
    }

    setSuccess("");
    setProcessing("");
    // ** Step-2 now we have to confirm payment
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: patientName,
            email: email,
          },
        },
      });

    setProcessing(false);

    if (confirmError) {
      setCardError(confirmError.message);
      return;
    } else {
      setCardError("");
    }

    const { status, id } = paymentIntent;

    if (status === "succeeded") {
      //   ** saving the payments data to db
      const payment = {
        email,
        bookingId,
        transectionId: id,
        price,
      };
      try {
        const response = await fetch(`http://localhost:15000/payments`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(payment),
        });

        const data = await response.json();

        if (data.success) {
          setSuccess(status);
          setTransectionId(id);
        }
      } catch (error) {
        console.log(error.message);
      }
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
        <button
          className="btn btn-sm mt-6"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600">{cardError}</p>}
      {success && (
        <>
          <p>{success}</p>
          <p>{transectionId}</p>
        </>
      )}
    </div>
  );
};

export default CheckoutForm;
