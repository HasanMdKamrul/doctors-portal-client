import React from "react";

const Testimonial = ({ card }) => {
  const { name, img, description, location } = card;

  return (
    <div className="card  shadow-xl">
      <div className="card-body">
        <p>{description}</p>
        <div className="card-actions ">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} alt="" />
            </div>
          </div>
          <span>
            <h1 className="text-xl">{name}</h1>
            <p className="text-black">{location}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
