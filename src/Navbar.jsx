import React from 'react'
import { NavLink } from 'react-router-dom';
import "./App.css";

const Navbar = () => {
  return (
    <>
       <nav className="navbar navbar-expand-lg px-5 py-1" style={{backgroundColor: "rgb(246, 183, 146)"}}>
        <a
          href="#"
          className="text-decoration-none display-4 text-dark fw-bold pb-3"
        >
          <span className="fw-bold px-2 text-dark" style={{ fontSize: "medium" }}>
            UNIX SALON
          </span>
        </a>

        <button
          className="navbar-toggler bg-light text-dark"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse m-auto" id="nav">
          <ul className="navbar-nav ms-md-auto ms-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link text-dark">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/services" className="nav-link text-dark">
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/work" className="nav-link text-dark">
                Our Work
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/offer" className="nav-link text-dark">
                Offers
              </NavLink>
            </li>
            

            <li className="nav-item">
              <NavLink to="/contact" className="nav-link text-dark">
                Contact Us
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink to="/sign" className="nav-link text-dark">
                <i class="bi bi-person"></i>
              </NavLink>
            </li>
            
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar