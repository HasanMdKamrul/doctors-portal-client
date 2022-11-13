import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleLogin = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className="h-screen flex justify-center items-center">
        <div className="w-[385px] h-[480px] shadow-lg p-7  rounded-2xl">
          <h1 className=" text-xl text-center font-bold">Log In</h1>
          <form
            onSubmit={handleSubmit(handleLogin)}
            className="form-control w-full "
          >
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", {
                required: "Email is required",
              })}
              type="email"
              placeholder="Email..."
              className="input input-bordered w-full"
            />
            {errors.email && (
              <p className="text-red-600">{errors?.email.message}</p>
            )}
            <label className="label">
              <span className="label-text">Password</span>
            </label>

            <input
              {...register("password", {
                required: "Password is Required",
              })}
              type="password"
              placeholder="*******"
              className="input input-bordered w-full"
            />
            {errors?.password && (
              <p className="text-red-600">{errors?.password.message}</p>
            )}
            <label className="label">
              <span className="label-text">Forgot Password?</span>
            </label>
            <input
              type="submit"
              value="Log In"
              className="btn btn-accent mt-2"
            />

            <label className="label">
              <span className="label-text">
                New to Doctor's Portal ?{" "}
                <Link className="text-secondary" to="/signup">
                  Create new account
                </Link>
              </span>
            </label>
          </form>
          <div className="divider">OR</div>
          <button className="btn btn-outline w-full">
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
