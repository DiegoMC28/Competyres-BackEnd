import ErrorPage from "./error";
import Main from ".";
import Singup from "./singup";
import Cars from "./cars";
import Circuits from "./circuits";
import Login from "./login";
import Layout from "../components/shared/Layout";
import { createBrowserRouter } from "react-router-dom";
import Profile from "./profile";

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
        element: <Cars />,
      },
      {
        path: "circuits",
        element: <Circuits />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

export default router;
