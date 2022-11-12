import { format } from "date-fns";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import chair from "../../../assets/images/chair.png";

const AppointmentBanner = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div>
      <div className="hero banner-bg lg:w-[1363px] lg:h-[838px]   ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className="rounded-lg shadow-2xl lg:w-1/2" alt="" />
          <div className="bg-gray-100">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center text-secondary my-6 text-bold">
        {selectedDate && (
          <p>Appointment available on {format(selectedDate, "PP")} </p>
        )}
      </div>
    </div>
  );
};

export default AppointmentBanner;
