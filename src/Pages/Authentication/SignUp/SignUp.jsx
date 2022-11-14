import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const SignUp = () => {
  const { createUser, setLoading, userProfileUpdate } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const profileUpdate = async (profileInfo) => {
    try {
      await userProfileUpdate(profileInfo);
      toast("User Profile has been updated");
    } catch (error) {
      setSignUpError(error.message);
    }
  };

  const handleSignUp = (data) => {
    console.log(data);

    setSignUpError("");

    const userCreation = async () => {
      try {
        const result = await createUser(data.email, data.password);

        console.log(result.user);

        const userInfo = {
          displayName: data.name,
        };

        await profileUpdate(userInfo);
      } catch (error) {
        console.log(error.message);
        setSignUpError(error.message);
      } finally {
        setLoading(false);
      }
    };

    userCreation();
  };

  return (
    <div>
      <div className="h-screen flex justify-center items-center">
        <div className="w-[385px] h-[556px] shadow-lg p-7  rounded-2xl">
          <h1 className=" text-xl text-center font-bold">Sign Up</h1>
          <form
            onSubmit={handleSubmit(handleSignUp)}
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
            {errors?.name && (
              <p className="text-red-600">{errors?.name.message}</p>
            )}

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
            {errors?.email && (
              <p className="text-red-600">{errors?.email.message}</p>
            )}
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", {
                required: true,
                minLength: { value: 6, message: "Min 6 charecters required" },
                pattern: {
                  value:
                    /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
                  message: "Password is not strong",
                },
              })}
              type="password"
              placeholder="*******"
              className="input input-bordered w-full"
            />
            {errors?.password && (
              <p className="text-red-600">{errors?.password.message}</p>
            )}
            <input
              type="submit"
              value="Log In"
              className="btn btn-accent mt-2"
            />
            {signUpError && <p>Error : {signUpError}</p>}
            <label className="label">
              <span className="label-text">
                Already have an account?
                <Link className="text-secondary" to="/login">
                  Please Log in
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

export default SignUp;
