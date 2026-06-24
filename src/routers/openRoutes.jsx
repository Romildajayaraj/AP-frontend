import Error from "../Error";
import { createBrowserRouter } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import About from "../pages/About";
import Contact from "../pages/Contact";
import { Landing } from "../pages/Landing";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Legal from "../pages/Legal";

import { OpenLayout } from "../layout/OpenLayout";
import Hero from "../components/Landing/Hero";

export const openRoutes = [
  {
    path: "/",
    element: <OpenLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Hero />,
        errorElement: <Error />,
      },
      {
        path: "login",
        element: <Login />,
        errorElement: <Error />,
      },
      {
        path: "signup",
        element: <Signup />,
        errorElement: <Error />,
      },
      {
        path: "contact",
        element: <Contact />,
        errorElement: <Error />,
      },
      {
        path: "about",
        element: <About />,
        errorElement: <Error />,
      },
      {
  path: "legal",
  element: <Legal />,
  errorElement: <Error />,
},
      
            ],
      },
    ];
