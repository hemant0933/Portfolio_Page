import { Link } from "@mui/material";
import React, { useState } from "react";

import { HiOutlineLightBulb } from "react-icons/hi";

const Navbar = () => {
  const [theme, setTheme] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const toggleBtn = () => {
    if (theme.color === "black") {
      setTheme({
        color: "white",
        backgroundColor: "black",
      });
    } else {
      setTheme({
        color: "black",
        backgroundColor: "white",
      });
    }
  };

  return (
    // <div className='nav-wrapper' style={theme}>
    //   <h1 className='nav-left'>PortFolio <strong className='dot'>.</strong></h1>
    //   <div className='nav-right'>
    //     <span className='nav_list'>
    //         <Link href='#about'><p className='headernav'>About</p></Link>
    //         <Link href='#skills'><p className='headernav'>Skills</p></Link>
    //         <Link href='#projects'><p className='headernav'>Projects</p></Link>
    //         <Link href='#socials'><p className='headernav'>Socials</p></Link>
    //         <Link><p className='headernav' onClick={toggleBtn} value={theme.color}> <HiOutlineLightBulb /> </p></Link>
    //     </span>
    //   </div>
    // </div>
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
              style={{ textDecoration: "none", color: "#000" }}
              href="#"
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
