import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import Login from "../Pages/Authentication/Login/Login";
import Home from "../Pages/Home/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
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
        path: "appointment",
        element: <Appointment />,
      },
    ],
  },
]);

export default router;
