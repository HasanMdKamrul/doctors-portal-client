import React from "react";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import CardInfo from "./CardInfo";

const CardsInfo = () => {
  const cards = [
    {
      id: 1,
      title: "Opening Hours",
      icon: clock,
      bgClass: "bg-gradient-to-r from-primary to-secondary",
      description: "Opens at 9 am to 5pm",
    },
    {
      id: 2,
      title: "Opening Hours",
      icon: marker,
      bgClass: "bg-accent",
      description: "Brooklyn, NY 10036, United States",
    },
    {
      id: 3,
      title: "Visit Our location",
      icon: phone,
      bgClass: "bg-gradient-to-r from-primary to-secondary",
      description: "+000 123 456789",
    },
  ];

  return (
    <div className="grid my-5 text-white lg:grid-cols-3 gap-6 md:grid-cols-2 grid-cols-1 ">
      {cards.map((card) => (
        <CardInfo key={card.id} card={card} />
      ))}
    </div>
  );
};

export default CardsInfo;
