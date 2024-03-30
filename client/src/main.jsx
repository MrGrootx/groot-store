import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MainLayout from "./layouts/MainLayout.jsx";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/home",
        element: <div><Home/></div>,
      },
      {
        path: "/about",
        element: <div><About/></div>,
      }
    ],
    errorElement: <div>Error</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
