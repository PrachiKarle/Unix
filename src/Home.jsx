import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {

  const s=[
    {
      id:1,
      img:"images/s1.jpeg",
      title:"Hair Color"
    },
    {
       id:2,
       img:"images/s2.jpeg",
       title:"Hair Cut"
    },
    {
      id:3,
      img:"images/s3.jpeg",
      title:"Pedicure"
    },
    {
      id:4,
      img:"images/s4.jpeg",
      title:"Facial"
    }
  ]

  const m=["images/img1.webp","images/img2.jpg","images/img3.jpg","images/img4.jpg"];


  return (
    <>
      <div className="row m-0 p-0">
        <div className="col-lg-6 col-12 p-5 d-flex justify-content-center align-items-center">
          <div>
            <h2 className="display-5 fw-bold mb-5">
              Experience the Best Beauty Services
            </h2>
            <i>
              Step into a world of beauty and relaxation with our expert hair,
              skin, nail, and makeup services. From trendy hair makeovers and
              glowing skin treatments to flawless makeup and pampering nail
              care, we bring out the best in you. Our skilled professionals use
              premium products to ensure top-quality results in a luxurious and
              comfortable ambiance.
            </i>
          </div>
        </div>

        <div className="col-lg-6 col-12">
          <img src="images/home1.jpg" width="100%" className="p-0" alt="" />
        </div>
      </div>

      <div
        className="row m-0 py-4 text-center"
        style={{ backgroundColor: "rgb(246, 183, 146)" }}
      >
        <NavLink to="/contact" className="text-decoration-none">
          <h4 className="text-light fw-bold">
            <i class="bi bi-arrow-right-circle"></i> Book Now
          </h4>
        </NavLink>
      </div>

      <div className="row m-0 px-3 py-5">
        <h1 className="text-center fw-normal">TRENDING SERVICES</h1>
        <div className="col-12 py-5">
          <div className="row m-0 p-0">
            {
               s.map((val)=>{
                return(
                  <>
                    <div className="col-lg-3 col-md-6 col-12">
                      <img src={val.img} width="100%" alt="" />
                      <h6 className="my-3 text-center">{val.title}</h6>
                    </div>
                  </>
                )
               })
            }
          </div>
        </div>
      </div>

      <div className="row m-0 p-0 pt-5">
        <img src="images/home.jpg" width="100%" className="p-0" alt="" />
      </div>
     
      <div className="row m-0 p-4">
        <h1 className="text-center fw-normal mt-5">MOST LOVED HOMECARE PRODUCTS</h1>
        <div className="col-12 py-5">
          <div className="row m-0 p-0">
            {
               m.map((val)=>{
                return(
                  <>
                    <div className="col-lg-3 col-md-6 col-12 p-2">
                      <img src={val} width="100%" alt="" />
                    </div>
                  </>
                )
               })
            }
          </div>
        </div>
      </div>

     
    </>
  );
};

export default Home;
