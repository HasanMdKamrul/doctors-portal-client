import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import BookingModal from "./BookingModal/BookingModal";
import Service from "./Service";

const Services = ({ selectedDate }) => {
  // const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);

  // useEffect(() => {
  //   const loadData = async () => {
  //     try {
  //       const response = await fetch(
  //         `http://localhost:15000/appointmentoptions`
  //       );
  //       const data = await response.json();

  //       if (data?.success) {
  //         setAppointmentOptions(data?.data);
  //       }
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  //   loadData();
  // }, []);

  const loadData = async () => {
    const response = await fetch(`http://localhost:15000/appointmentoptions`);
    const data = await response.json();
    return data.data;
  };

  const { data: appointmentOptions = [] } = useQuery({
    queryKey: ["appointmentoptions"],
    queryFn: loadData,
  });

  console.log(appointmentOptions);

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
