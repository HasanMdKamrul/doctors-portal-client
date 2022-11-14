import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [logInError, setLogInError] = useState("");
  const { signIn, setLoading } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (data) => {
    console.log(data);
    setLogInError("");

    const logIn = async () => {
      try {
        const result = await signIn(data.email, data.password);
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      } catch (error) {
        setLogInError(error.message);
      } finally {
        setLoading(false);
      }
    };
    logIn();
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
                minLength: { value: 6, message: "Min length of pass is 6" },
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
            {logInError && <p className="text-red-600">Error: {logInError}</p>}
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
