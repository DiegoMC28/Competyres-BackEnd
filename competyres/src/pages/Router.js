import ErrorPage from "./error";
import Main from ".";
import Singup from "./singup";
import Cars from "./cars";
import Circuits from "./circuits";
import Login from "./login";
import Layout from "../components/shared/Layout";
import { createBrowserRouter } from "react-router-dom";
import Profile from "./profile";
import Bookings from "./bookings";
import CarsDetails from "./carsdetails";
import CircuitDetails from "./circuitsdetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Main /> },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "singup",
        element: <Singup />,
      },
      {
        path: "cars",
        children: [
          { index: true, element: <Cars /> },
          {
            path: ":id",
            element: <CarsDetails />,
          },
        ],
      },
      {
        path: "circuits",
        children: [
          { index: true, element: <Circuits /> },
          {
            path: ":id",
            element: <CircuitDetails />,
          },
        ],
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "bookings",
        element: <Bookings />,
      },
    ],
  },
]);

export default router;
