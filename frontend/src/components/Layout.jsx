import React from "react";
import Navbar from "./Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Navbar /> {/* Navbar remains persistent */}
      <Outlet /> {/* Nested routes will be rendered here */}
    </div>
  );
};

export default Layout;
