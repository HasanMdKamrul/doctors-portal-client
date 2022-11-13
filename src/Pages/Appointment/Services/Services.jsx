import React, { useEffect, useState } from "react";
import BookingModal from "./BookingModal/BookingModal";
import Service from "./Service";

const Services = ({ selectedDate }) => {
  const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(`appointmentOptions.json`);
        const data = await response.json();
        setAppointmentOptions(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    loadData();
  }, []);

  return (
    <>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {appointmentOptions.map((option) => (
          <Service
            setTreatment={setTreatment}
            key={option._id}
            option={option}
          />
        ))}
      </div>
      {treatment && (
        <BookingModal
          setTreatment={setTreatment}
          selectedDate={selectedDate}
          treatment={treatment}
        />
      )}
    </>
  );
};

export default Services;
