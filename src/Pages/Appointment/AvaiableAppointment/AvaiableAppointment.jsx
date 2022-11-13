import { format } from "date-fns";
import React from "react";
import Services from "../Services/Services";
const AvaiableAppointment = ({ selectedDate }) => {
  return (
    <section className="my-16 ">
      <div className="text-center text-secondary font-bold">
        {selectedDate && (
          <p>Appointment available on {format(selectedDate, "PP")} </p>
        )}
      </div>
      <div>
        <Services selectedDate={selectedDate} />
      </div>
    </section>
  );
};

export default AvaiableAppointment;
