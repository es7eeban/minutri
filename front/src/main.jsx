import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./routes/Login.jsx";
import Root from "./routes/Root.jsx";
import Inicio from "./routes/Inicio.jsx";
import Contact from "./routes/Contact.jsx";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";
import Registrarse from "./components/Registrarse.jsx";
import Patients from "./routes/Patients.jsx";
import User from "./routes/User.jsx";
import Tools from "./routes/Tools.jsx";
import Documents from "./routes/Documents.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Registrarse />,
  },
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <Root />,
        children: [
          {
            path: "/inicio",
            element: <Inicio />,
          },
          {
            path: "/user",
            element: <User />,
          },

          {
            path: "/patients",
            element: <Patients />,
          },
          {
            path: "/tools",
            element: <Tools />,
          },
          {
            path: "/documents",
            element: <Documents />,
          },
          {
            path: "/contact",
            element: <Contact />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
