import React, { useState } from "react";

const Work = () => {
  const data = [
    "images/g1.jpg",
    "images/g2.jpg",
    "images/g3.jpg",
    "images/g4.jpg",
    "images/g5.jpg",
    "images/g6.jpg",
    "images/g7.jpg",
    "images/g8.png",
    "images/g9.png",
    "images/g10.png",
    "images/g11.png",
    "images/g12.jpg",
  ];

  return (
    <>
      <div className="row m-0 py-5 px-0" style={{ backgroundColor: "#FBF4F0" }}>
        <h2 className="text-center">OUR WORK</h2>

        <div className="col-12 m-0 px-4 py-2">
          <div className="row m-0 p-0">
            {data.map((val) => {
              return (
                <>
                  <div className="col-lg-3 col-md-6 col-12 p-4">
                    <div className="row m-0 p-0">
                      <img src={val} width="100%" alt="" />
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
