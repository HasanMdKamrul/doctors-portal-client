import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
  const { name: treatmentName, slots } = treatment;

  const date = format(selectedDate, "PP");

  const handleBooking = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const slot = form.slot.value;
    const phone = form.phone.value;
    const email = form.email.value;

    const bookingObject = {
      treatmentName,
      patientName: name,
      bookingDate: slot,
      email,
      phone,
    };

    console.log(bookingObject);

    setTreatment(null);
  };

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
          <h3 className="text-lg font-bold">{treatmentName}</h3>
          <form onSubmit={handleBooking} className="mt-10">
            <input
              disabled
              value={date}
              className="input input-bordered w-full   mt-2"
            />

            <select name="slot" className="select select-bordered w-full mt-2 ">
              {slots.map((slot, index) => (
                <option value={slot} key={index}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              placeholder="Your Name.."
              className="input input-bordered w-full  mt-2"
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email.."
              className="input input-bordered w-full  mt-2"
            />
            <input
              name="phone"
              type="text"
              placeholder="Your Phone.."
              className="input input-bordered w-full  mt-2"
            />

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
