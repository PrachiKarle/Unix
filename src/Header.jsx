import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Header() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <div
        className="p-2 px-3"
        style={{
          backgroundColor: "white",
          borderRadius: "50%",
          position: "fixed",
          bottom: "10px",
          right: "10px",
        }}
      >
       <a href="#"><i class="bi bi-arrow-up fw-bold text-dark"></i></a> 
      </div>
    </>
  );
}
