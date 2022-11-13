import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const [data, setData] = useState("");
  const { register, handleSubmit } = useForm();

  return (
    <div>
      <div className="h-screen flex justify-center items-center">
        <div>
          <h1 className="text-primary text-4xl text-center font-bold">
            Log In
          </h1>
          <form
            onSubmit={handleSubmit((data) => {
              try {
                setData(data);
              } catch (error) {
                console.log(error.message);
              }
            })}
            className="form-control w-full "
          >
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email")}
              type="email"
              placeholder="Email..."
              className="input input-bordered w-full"
            />
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password")}
              type="password"
              placeholder="*******"
              className="input input-bordered w-full"
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-primary mt-2"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
