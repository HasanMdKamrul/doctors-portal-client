import { format } from "date-fns";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../../contexts/AuthProvider";

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
  const { name: treatmentName, slots } = treatment;

  const { user } = useContext(AuthContext);

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
      bookingDate: date,
      slot,
      email,
      phone,
    };

    setTreatment(null);

    // ** post booking data to the db

    const bookingPost = async () => {
      try {
        const response = await fetch(`http://localhost:15000/bookings`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(bookingObject),
        });

        const data = await response.json();

        if (data.success) {
          toast.success(data.message);
          refetch();
          setTreatment(null);
        }
      } catch (error) {
        toast.error(error.message);
      }
    };

    bookingPost();
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
              defaultValue={user?.displayName}
              disabled
              name="name"
              type="text"
              placeholder="Your Name.."
              className="input input-bordered w-full  mt-2"
            />
            <input
              defaultValue={user?.email}
              disabled
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
