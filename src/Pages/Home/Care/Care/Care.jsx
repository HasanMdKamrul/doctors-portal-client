import React from "react";
import careImage from "../../../../assets/images/treatment.png";

const Care = () => {
  return (
    <div className="  mt-24">
      <div className=" flex flex-col lg:flex-row">
        <img
          src={careImage}
          className=" lg:w-1/2  rounded-lg shadow-2xl"
          alt=""
        />
        <div className="p-24">
          <h1 className="text-3xl font-bold">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page.
          </p>
          <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Care;
