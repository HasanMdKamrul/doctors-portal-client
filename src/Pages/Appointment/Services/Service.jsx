import React from "react";

const Service = ({ option, setTreatment }) => {
  const { name, slots, price } = option;

  return (
    <div className="card bg-base-100 shadow-xl my-8">
      <div className="card-body">
        <h2 className="text-2xl font-bold text-secondary text-center">
          {name}
        </h2>
        <div className="text-center">
          <p>{slots.length > 0 ? slots[0] : "No Avaiable Slots"}</p>
          <p>
            {slots.length > 0
              ? `${
                  slots.length > 1
                    ? slots.length + " spaces avaiable"
                    : slots.length + " space avaiable"
                } `
              : "No Solts"}
          </p>
          <p>
            <small>${price}</small>
          </p>
        </div>
        <div className="card-actions justify-center">
          <label
            onClick={() => setTreatment(option)}
            htmlFor="booking-modal"
            className="btn  text-white btn-primary bg-gradient-to-r from-primary to-secondary"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
