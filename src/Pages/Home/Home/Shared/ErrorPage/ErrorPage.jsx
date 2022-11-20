import React, { useContext } from "react";
import { useRouteError } from "react-router-dom";
import { AuthContext } from "../../../../../contexts/AuthProvider";

const ErrorPage = () => {
  const error = useRouteError();
  const { logOut, setLoading } = useContext(AuthContext);
  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <h1 className="text-5xl text-red-500">{error.status}</h1>
      <p className="text-4xl">{error.statusText || error.message}</p>
      <button onClick={handleLogout} className="btn btn-ghost ml-5">
        Log Out
      </button>
    </div>
  );
};

export default ErrorPage;
