import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import Admin from "./pages/Admin";


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Home/>
    },
    {
      path: "/signup",
      element: <SignUp/>
    },
    {
      path: "/signin",
      element: <SignIn />
    },
    {
      path: "/admin",
      element: <Admin />
    },
  ]);

  return <RouterProvider router={router}> </RouterProvider>;
};

export default App;




