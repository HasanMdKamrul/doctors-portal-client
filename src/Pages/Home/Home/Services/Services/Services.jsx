import React from "react";
import cavity from "../../../../../assets/images/cavity.png";
import flouride from "../../../../../assets/images/fluoride.png";
import whitning from "../../../../../assets/images/whitening.png";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const cards = [
    {
      id: 1,
      title: "Fluoride Treatment",
      icon: flouride,
      description: "Flouride treatment for the teeth and many more",
    },
    {
      id: 2,
      title: "Opening Hours",
      icon: cavity,
      description: "Cavity felling for the teeth.",
    },
    {
      id: 3,
      title: "Teeth Whitening",
      icon: whitning,
      description: "Teeth whitening is for all the patient complementary",
    },
  ];

  return (
    <div>
      <div>
        <h1 className="text-center text-lg font-extrabold text-secondary">
          Our Services
        </h1>
        <p className="text-center text-3xl">Services We Provide</p>
      </div>
      <div className="grid gap-[34px] lg:grid-cols-3 my-4 md:grid-cols-2 grid-cols-1">
        {cards.map((card) => (
          <ServiceCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Services;
