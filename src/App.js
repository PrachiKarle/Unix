import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Contact from "./Contact";
import Services from "./Services";
import Work from "./Work";
import Offer from "./Offer";
import SignUp from "./SignUp";
import Sign from "./Sign";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/work" element={<Work />} />
            <Route path="/offer" element={<Offer />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/sign" element={<Sign />} />
            <Route path="/create" element={<SignUp />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
