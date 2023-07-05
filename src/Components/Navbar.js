import React, { useEffect, useState } from "react";
import { Link } from "@mui/material";
import React from "react";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const handleClick = (item) => {
    setActiveItem(item)
  }

  useEffect(() => {
  const handleScroll = () => {
    const isScrolled = window.scrollY > 50;
    if(isScrolled !== scroll){
      setScroll(isScrolled)
    } 
   };

   document.addEventListener('scroll', handleScroll);
   return () => {
    document.removeEventListener('scroll',handleScroll);
   };
 },[scroll]);

  return (
    <header id="home" className="nav-wrapper">
      <div className="inner">
        <ul className={`nav_list ${scroll ? 'scroll' : ''}`}>
          <li 
              className={`nav-item ${activeItem === 'home' ? 'active' : ''}`}
              onClick={()=> handleClick('home')}  >
            <a href="/home">
              <p className="headernav">Home</p>
            </a>
          </li>
          <li 
              className={`nav-item ${activeItem === 'about' ? 'active' : ''}`}
              onClick={()=> handleClick('about')} > 
            <a href="#about">
              <p className="headernav">About</p>
            </a>
          </li>
          <li className={`nav-item ${activeItem === 'skills' ? 'active' : ''}`}
                  onClick={()=> handleClick('skills')}  >
            <a href="#skills">
              <p className="headernav">Skills</p>
            </a>
          </li>
          <li 
              className={`nav-item ${activeItem === 'projects' ? 'active' : ''}`}
              onClick={()=> handleClick('projects')} >
            <a href="#projects">
              <p className="headernav">Projects</p>
            </a>
          </li>
          <li className={`nav-item ${activeItem === 'socials' ? 'active' : ''}`}
                onClick={()=> handleClick('socials')} >
            <a href="#socials">
              <p className="headernav">Socials</p>
            </a>
          </li>
        </ul>
      </div>
    </header>

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
