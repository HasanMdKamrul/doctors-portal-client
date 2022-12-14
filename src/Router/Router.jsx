import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import Login from "../Pages/Authentication/Login/Login";
import SignUp from "../Pages/Authentication/SignUp/SignUp";
import AddDoctor from "../Pages/Dashboard/AddDoctor/AddDoctor";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import MyAppointment from "../Pages/Dashboard/Appointment/MyAppointment";
import ManageDoctor from "../Pages/Dashboard/ManageDoctor/ManageDoctor";
import Payment from "../Pages/Dashboard/Payment/Payment";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/Home/Home/Shared/ErrorPage/ErrorPage";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "appointment",
        element: <Appointment />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        {" "}
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <MyAppointment />,
      },
      {
        path: "/dashboard/allusers",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/adddoctor",
        element: (
          <AdminRoute>
            <AddDoctor />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/managedoctor",
        element: (
          <AdminRoute>
            <ManageDoctor />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        element: (
          <AdminRoute>
            <Payment />
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:15000/bookings/${params.id}`),
      },
    ],
  },
]);

export default router;
