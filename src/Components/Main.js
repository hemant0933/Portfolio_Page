import React from 'react';
import Myvideo from '../Assets/tree.png';
import swiggy from '../Assets/swiggy-clone.png';
import flipkart from '../Assets/flipkart-clone.png';
import pexel from  '../Assets/pexel.png';
import tic from '../Assets/tic-ta-toe.png' ;
import DialogProjects from './DialogProjects';
import connect from '../Assets/connect.png';
import meshop from '../Assets/meshop.png';

import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import HerosSection from './HerosSection';

import React from "react";

import men from "../Assets/men.jpg";

import swiggy from "../Assets/swiggy-clone.png";
import flipkart from "../Assets/flipkart-clone.png";
import pexel from "../Assets/pexel.png";
import tic from "../Assets/tic-ta-toe.png";
import DialogProjects from "./DialogProjects";
import connect from "../Assets/connect.png";
import meshop from "../Assets/meshop.png";

import Intro from "./Intro";
import Skills from "./Skills";
import Footer from "./Footer";


const Main = () => {
  
  let projectData = [

      {
        id:1,
        src:'https://hemant0933.github.io/swiggy-clone/',
        Imgsrc:swiggy
      },
      {
        id:2,
        src:'https://hemant0933.github.io/Flipkart-Clone/',
        Imgsrc:flipkart
      },
      {
        id:3,
        src:'https://main--funny-bunny-ecd8ca.netlify.app/',
        Imgsrc:pexel
      },
      {
        id:4,
        src:'https://hemant0933.github.io/Tik-Tac-Toe-game/',
        Imgsrc: tic
      },
      {
        id:5,
        src:'https://hemant0933.github.io/Bootstarpe-landing-page/',
        Imgsrc: connect
      },
      {
        id:6,
        src:'https://hemant0933.github.io/F3-Project/',
        Imgsrc: meshop
      }
  ]


 

  return (
    <div className='main-wrapper'>
       <div className='container main-inner-wrapper' id='about'>
        <HerosSection/>
       </div>
        {/* Skills */}
       <div className='container main-inner-wrapper2' id='skills'>
        <h1>Skills<span className='dot'>.</span></h1>
          <div className='videoContainer'>
           <img src={Myvideo} alt="tree" className='img-fluid'/>
          </div>
       </div>
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
        <div class="custom-shape-divider-bottom-1686061293">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
      </svg>
    </div>
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

      {/* Footer */}
    <Footer/>
    </div>
  );
};

export default Main;
