import React from "react";

import men from "../Assets/men.jpg";

import swiggy from "../Assets/swiggy-clone.png";
import flipkart from "../Assets/flipkart-clone.png";
import pexel from "../Assets/pexel.png";
import tic from "../Assets/tic-ta-toe.png";
import DialogProjects from "./DialogProjects";
import connect from "../Assets/connect.png";
import meshop from "../Assets/meshop.png";

import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import Intro from "./Intro";
import Skills from "./Skills";

const Main = () => {
  let projectData = [
    {
      id: 1,
      src: "https://hemant0933.github.io/swiggy-clone/",
      Imgsrc: swiggy,
      title:'Swiggy Clone'
    },
    {
      id: 2,
      src: "https://hemant0933.github.io/Flipkart-Clone/",
      Imgsrc: flipkart,
      title:'Flipkart Clone'
    },
    {
      id: 3,
      src: "https://main--funny-bunny-ecd8ca.netlify.app/",
      Imgsrc: pexel,
      title:'Image searcher'
    },
    {
      id: 4,
      src: "https://hemant0933.github.io/Tik-Tac-Toe-game/",
      Imgsrc: tic,
      title:'Tic Tac Toe game'
    },
    {
      id: 5,
      src: "https://hemant0933.github.io/Bootstarpe-landing-page/",
      Imgsrc: connect,
      title:'Connect landing page'
    },
    {
      id: 6,
      src: "https://hemant0933.github.io/F3-Project/",
      Imgsrc: meshop,
      title:'MeShop Shop Webapp'
    },
  ];

  return (
    <div className="main-wrapper">
      <div className="container main-inner-wrapper" id="about">
        <Intro men={men} />
      </div>
      {/* Skills */}

      <Skills />
      {/* Projects */}
      <div className="container main-inner-wrapper3" id="projects">
        <h1>
          Projects <span className="dot">.</span>
        </h1><br/>
        <div className="projectDiv">
          {projectData.map((data) => (
            <DialogProjects key={data.id} src={data.src} title={data.title} Imgsrc={data.Imgsrc} />
          ))}
        </div>
      </div>
      <hr className="hrBar"></hr>
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
    </div>
  );
};

export default Main;
