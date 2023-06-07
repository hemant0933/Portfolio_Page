import { Link } from "@mui/material";
import React from "react";

const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg nav-wrapper fixed-top bg-body-tertiary">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarTogglerDemo01"
        >
         
            <Link
              className="navbar-brand"
              style={{ textDecoration: "none",color:'#000'}}
              href="/"
            >
              <h1>
                PortFolio<strong className="dot">.</strong>
              </h1>
            </Link> 
            <ul className="navbar-nav ms-auto mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  style={{ textDecoration: "none", color: "#000" }}
                  aria-current="page"
                  href="#about"
                >
                  <p className="headernav">About</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={{ textDecoration: "none", color: "#000" }}
                  href="#skills"
                >
                  <p className="headernav">Skills</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={{ textDecoration: "none", color: "#000" }}
                  href="#projects"
                >
                  <p className="headernav">Projects</p>
                </Link>
              </li>
            </ul>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;
