import React from 'react';
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container main-inner-wrapper4" id="socials">
    <div className="footerDiv">
      <div className="box1">
        <h1>
          Hemant Kumar <span className="dot">.</span>
        </h1>
      </div>
      <div className="box2">
        <h4>Designed and Developed by Me © 2023</h4>
        <div className="iconRow">
          <a href="https://www.instagram.com/hemant00000000/">
            <BsInstagram
              className="Socioicon"
              style={{ fontSize: "30px" }}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </a>
          <a href="https://www.linkedin.com/in/hemant-kumar-0a9b69bb/">
            <BsLinkedin
              className="Socioicon"
              style={{ fontSize: "30px" }}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </a>
          <a href="https://github.com/hemant0933">
            <FaGithub className="Socioicon" style={{ fontSize: "30px" }} />
            &nbsp;&nbsp;&nbsp;
          </a>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Footer;
