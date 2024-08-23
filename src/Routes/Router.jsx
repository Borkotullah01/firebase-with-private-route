import {createBrowserRouter} from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Components/Home";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Login from "../Components/Login";
import Register from "../Components/Register";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
      ]
    },
  ]);
