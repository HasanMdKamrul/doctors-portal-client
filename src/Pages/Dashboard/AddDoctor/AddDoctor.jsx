import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import Loader from "../../Home/Home/Shared/Loader/Loader";

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { data: specialities = [], isLoading } = useQuery({
    queryKey: ["doctorSpeciality"],
    queryFn: async () => {
      const response = await fetch(`http://localhost:15000/doctorSpeciality`);
      const data = await response.json();
      return data.data;
    },
  });

  const handleAddADoctor = (data) => {
    console.log(data);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <h1 className="text-3xl">Add A Doctor</h1>
      <div className="w-[385px] h-[556px] shadow-lg p-7  rounded-2xl">
        <h1 className=" text-xl text-center font-bold">Sign Up</h1>
        <form
          onSubmit={handleSubmit(handleAddADoctor)}
          className="form-control w-full "
        >
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            {...register("name", {
              required: {
                value: true,
                message: "Name is required",
              },
            })}
            type="text"
            placeholder="Name..."
            className="input input-bordered w-full"
          />

          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Email is incorrect",
              },
            })}
            type="email"
            placeholder="Email..."
            className="input input-bordered w-full"
          />

          <label className="label">
            <span className="label-text">Select Speciality</span>
          </label>
          <select
            {...register("speciality")}
            className="select select-primary w-full max-w-xs"
          >
            {specialities?.map((speciality) => (
              <option key={speciality._id} value={speciality?.name}>
                {speciality?.name}
              </option>
            ))}
          </select>
          <input
            type="submit"
            value="Add A Doctor"
            className="btn btn-accent mt-2"
          />
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
