import React from "react";
import quate from "../../../../assets/icons/quote.svg";
import people1 from "../../../../assets/images/people1.png";
import people2 from "../../../../assets/images/people2.png";
import people3 from "../../../../assets/images/people3.png";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  const cards = [
    {
      _id: 1,
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      name: "Winson Herry",
      location: "California",
      img: people1,
    },
    {
      _id: 2,
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      name: "Winson Herry",
      location: "California",
      img: people2,
    },
    {
      _id: 3,
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      name: "Winson Herry",
      location: "California",
      img: people3,
    },
  ];

  return (
    <section className="mt-12">
      <div className="flex justify-between">
        <div>
          <h2 className="font-bold text-lg text-secondary">Testimonial</h2>
          <h4 className="text-4xl">What Our Patients Says</h4>
        </div>
        <img
          src={quate}
          className="lg:w-[192px] lg:h-[156px] w-[98px] h-[79px]"
          alt=""
        />
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {cards.map((card) => (
          <Testimonial key={card._id} card={card} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
