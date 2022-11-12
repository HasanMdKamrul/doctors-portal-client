import React from "react";

const CardInfo = ({ card }) => {
  const { title, description, icon, bgClass } = card;

  return (
    <div className={`card lg:card-side shadow-xl p-8 ${bgClass}`}>
      <figure>
        <img src={icon} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CardInfo;
