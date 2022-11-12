import React from "react";
import doctorBg from "../../../assets/images/appointment.png";
import doctor from "../../../assets/images/doctor.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const DoctorAppointment = () => {
  return (
    <section
      className="mt-48"
      style={{
        background: `url(${doctorBg})`,
      }}
    >
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={doctor}
            className=" lg:w-1/2 -mt-64  hidden lg:block "
            alt=""
          />
          <div className="">
            <h3 className="font-bold text-lg text-secondary">Appointment</h3>
            <h1 className="text-3xl text-white font-bold">
              Make an appointment Today
            </h1>
            <p className=" text-white">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page.
            </p>
            <PrimaryButton>Appointment</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorAppointment;
