import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, selectedDate }) => {
  const { name, slots } = treatment;

  const date = format(selectedDate, "PP");

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form className="mt-10">
            <input
              disabled
              value={date}
              className="input input-bordered w-full   mt-2"
            />

            <select className="select select-bordered w-full mt-2 ">
              {slots.map((slot, index) => (
                <option value={slot} key={index}>
                  {slot}
                </option>
              ))}
            </select>
            <input className="input input-bordered w-full  mt-2" />
            <input className="input input-bordered w-full  mt-2" />
            <input className="input input-bordered w-full  mt-2" />

            <input
              className="input mt-10 input-bordered w-full bg-accent text-white "
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
