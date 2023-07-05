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

        {/* Projects */}
       <div className='container main-inner-wrapper3' id='projects'>
            <h1>Projects <span className='dot'>.</span></h1> 
            <div className='projectDiv'>
            {
             
              projectData.map((data) => {
                return (
                  <DialogProjects
                      key={data.id}
                      src={data.src}
                      Imgsrc={data.Imgsrc}
                />)
              }
              )
             } 
            </div>
      </div> 
      <hr className='hrBar'></hr>
      <div className='container main-inner-wrapper4' id='socials'>
       <div className='footerDiv'>
            <div className='box1'><h1>Hemant Kumar <span className='dot'>.</span></h1></div>
            <div className='box2'>
              <h4>Designed and Developed by Me © 2023</h4>
              <div className='iconRow'>
                 <a href='https://www.instagram.com/hemant00000000/'><BsInstagram className='Socioicon' style={{fontSize:"30px"}}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                 <a href='https://www.linkedin.com/in/hemant-kumar-0a9b69bb/'><BsLinkedin className='Socioicon' style={{fontSize:"30px"}}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                 <a href='https://github.com/hemant0933'><FaGithub className='Socioicon' style={{fontSize:"30px"}}/>&nbsp;&nbsp;&nbsp;</a>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Main;


