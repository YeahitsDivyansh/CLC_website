import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./footer/Footer"; // Import the Footer component
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Navbar /> {/* Navbar remains persistent */}
      <Outlet /> {/* Nested routes will be rendered here */}
      <Footer /> {/* Footer remains persistent */}
    </div>
  );
};

export default Layout;
