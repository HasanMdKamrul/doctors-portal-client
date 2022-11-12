import React from "react";
import Banner from "../Banner/Banner";
import CardsInfo from "../CardsInfo/CardsInfo";
import Care from "../Care/Care/Care";
import DoctorAppointment from "../DoctorAppointment/DoctorAppointment";
import Testimonials from "../Testimonials/Testimonials/Testimonials";
import Services from "./Services/Services/Services";

const Home = () => {
  return (
    <div className="lg:mx-5 mx-5">
      <Banner />
      <CardsInfo />
      <Services />
      <Care />
      <DoctorAppointment />
      <Testimonials />
    </div>
  );
};

export default Home;
