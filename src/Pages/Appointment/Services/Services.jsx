import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useState } from "react";
import BookingModal from "./BookingModal/BookingModal";
import Service from "./Service";

const Services = ({ selectedDate }) => {
  const [treatment, setTreatment] = useState(null);
  const date = format(selectedDate, "PP");
  const loadData = async () => {
    const response = await fetch(
      `http://localhost:15000/appointmentoptions?date=${date}`
    );
    const data = await response.json();
    return data.data;
  };

  const { data: appointmentOptions = [], refetch } = useQuery({
    queryKey: ["appointmentoptions", date],
    queryFn: loadData,
  });

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
          refetch={refetch}
          setTreatment={setTreatment}
          selectedDate={selectedDate}
          treatment={treatment}
        />
      )}
    </>
  );
};

export default Services;
