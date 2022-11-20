import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const MyAppointment = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:15000/bookings?email=${user?.email}`;

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const response = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await response.json();
      return data.data;
    },
  });

  return (
    <section>
      <h3 className="text-2xl">My Appointments</h3>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Treatment</th>
                <th>Name</th>
                <th>Booking Date</th>
                <th>Booking Time</th>
                <th>Payment</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr key={booking._id}>
                  <th>{index + 1}</th>
                  <td>{booking?.treatmentName}</td>
                  <td>{booking?.patientName}</td>
                  <td>{booking?.bookingDate}</td>
                  <td>{booking?.slot}</td>
                  <td>
                    {booking?.price && !booking?.paid && (
                      <Link to={`/dashboard/payment/${booking._id}`}>
                        {" "}
                        <button className="btn btn-sm">Pay</button>
                      </Link>
                    )}
                    {booking?.price && booking?.paid && <span>Paid</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MyAppointment;
