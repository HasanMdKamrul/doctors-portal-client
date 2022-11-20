import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const { data } = useLoaderData();

  const { bookingDate, price, patientName, slot, email, _id } = data;

  return (
    <div>
      <h1 className="text-3xl">
        Please pay <strong>${price} </strong>
        for this {bookingDate} and slot {slot} - Mr/Ms {patientName}
      </h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm
          bookingId={_id}
          price={price}
          patientName={patientName}
          email={email}
        />
      </Elements>
    </div>
  );
};

export default Payment;
