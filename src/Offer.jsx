import React from "react";

const Offer = () => {
  return (
    <>
      <div className="row m-0 p-5" style={{backgroundColor:"#FBF4F0"}}>
        <div className="col-lg-6 col-12">
          <img src="images/offer.jpg" width="100%" alt="" />
        </div>
        <div className="col-lg-6 col-12 p-5 px-0 d-flex justify-content-center align-items-center">
          <div className="p-5 bg-light">
            <h2 className="my-4" style={{ fontVariant: "small-caps" }}>
              Celebrate Your Birthday
            </h2>
            <p>
              Make your birthday extra special with a rejuvenating salon
              experience! Treat yourself and your loved ones to a luxurious day
              of beauty and relaxation. From signature haircuts and styling to
              rejuvenating facials, manicures, and pedicures, we’ve got
              everything you need to feel fabulous on your big day. <br />
              <b>
                Book your birthday celebration with us today and let us help you
                shine on your special day!
              </b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offer;
