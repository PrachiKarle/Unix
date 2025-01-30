import React from "react";

const Footer = () => {
  return (
    <>
      <div className="row m-0 p-5 px-3" style={{ backgroundColor: "rgb(246, 183, 146)" }}>
        <div className="col-lg-4 col-md-6 col-12 p-3">
          <h2 className="text-dark fw-bold">UNIX Salon</h2>
          <p className="my-4 text-dark">
            We believe that every individual deserves to look and feel their
            absolute best. Our team of skilled stylists, colorists, and beauty
            experts are dedicated to providing exceptional services tailored to
            your unique style and preferences.
          </p>
        </div>
        <div className="col-lg-4"></div>
        <div className="col-lg-4 col-md-6 col-12 py-3 px-5">
          <h4 className="fw-bold text-dark">Links</h4>
          <p className="text-dark fw-normal">About Us</p>
          <p className="text-dark fw-normal">Book Online</p>
          <p className="text-dark fw-normal">Apple Legacy</p>
          <p className="text-dark fw-normal">Contact Us</p>
        </div>
      </div>
      <div className="row m-0 p-3 text-center text-dark" style={{border:"1px solid white",backgroundColor:"rgb(246, 183, 146)"}}>
     <h6 className="text-center"> © Copyright 2024, UNIX SALON</h6>
      </div>
    </>
  );
};

export default Footer;
