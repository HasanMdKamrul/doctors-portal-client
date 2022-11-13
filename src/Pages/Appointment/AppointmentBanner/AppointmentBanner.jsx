import React from "react";
import { DayPicker } from "react-day-picker";
import chair from "../../../assets/images/chair.png";

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <div>
      <div className="hero banner-bg lg:w-[1363px] lg:h-[838px]   ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className="rounded-lg shadow-2xl lg:w-1/2" alt="" />
          <div className="bg-blue-200">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
