import React from "react";

const Services = () => {
  return (
    <>
      <div className="row m-0 p-0">
        <img src="images/service.jpg" width="100%" className="p-0" alt="" />
      </div>

      <div
        className="container-fluid py-5"
        style={{ backgroundColor: "#FBF4F0" }}
      >
        {/* Hair */}
        <div className="row m-0 p-5 my-5">
          <div className="col-lg-6 col-12">
            <img src="images/hair.avif" width="100%" className="p-0" alt="" />
          </div>
          <div
            className="col-lg-6 col-12 p-5 bg-light text-dark"
            
          >
            <h1>HAIR</h1>
            <p className="my-3">
              We offer expert haircuts, styling, coloring, and treatments to
              enhance your look and confidence. From precision cuts and trendy
              balayage to keratin smoothing and deep conditioning, our skilled
              stylists use premium products to ensure stunning results. We also
              provide men’s grooming, hair extensions, and customized scalp
              treatments for healthy, beautiful hair. Whether you need a quick
              trim or a full transformation, Unix Salon is your go-to
              destination for expert hair care. Book your appointment today!
            </p>
          </div>
        </div>

        {/* Skin */}
        <div className="row m-0 p-5 my-5">
          <div className="col-lg-6 col-12 p-5 bg-light text-dark">
            <h1>SKIN</h1>
            <p className="my-3">
              We offer a range of premium skin care services to rejuvenate and
              enhance your natural glow. From deep-cleansing facials and
              hydrating treatments to skin brightening and anti-aging therapies,
              our expert aestheticians use high-quality products tailored to
              your skin type. We also provide professional waxing, threading,
              and body polishing for smooth, radiant skin. Whether you need a
              quick refresh or a luxurious treatment, Unix Salon ensures a
              relaxing and results-driven experience. Book your appointment
              today!
            </p>
          </div>
          <div
            className="col-lg-6 col-12"
            
          >
            <img src="images/skin.webp" width="100%" className="p-0" alt="" />
          </div>
        </div>

        {/* Nail */}
        <div className="row m-0 p-5 my-5">
          <div className="col-lg-6 col-12">
            <img src="images/nail.avif" width="100%" className="p-0" alt="" />
          </div>
          <div
            className="col-lg-6 col-12 p-5 bg-light text-dark"
           
          >
            <h1>NAIL</h1>
            <p className="my-3">
              We offer expert nail care services to keep your hands and feet
              looking flawless. From classic manicures and pedicures to gel
              polish, acrylic extensions, and intricate nail art, our skilled
              technicians use high-quality products for long-lasting beauty. We
              also provide nail strengthening treatments and spa pedicures for
              ultimate relaxation and care. Whether you prefer a simple, elegant
              look or bold, creative designs, Unix Salon ensures a perfect
              finish every time. Book your nail appointment today!
            </p>
          </div>
        </div>

        {/* Makeup */}
        <div className="row m-0 p-5 my-5">
          <div className="col-lg-6 col-12 p-5 bg-light text-dark">
            <h1>MAKEUP</h1>
            <p className="my-3">
              We offer professional makeup services to enhance your natural beauty for any occasion. From flawless bridal and party makeup to elegant corporate and everyday looks, our skilled makeup artists use high-quality products for a long-lasting finish. We specialize in HD and airbrush makeup for a seamless, camera-ready glow and provide eye makeup, contouring, and special effects makeup for a customized look. Book your makeup session today! 
            </p>
          </div>
          <div
            className="col-lg-6 col-12"
           
          >
            <img src="images/makeup.webp" width="100%" className="p-0" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
