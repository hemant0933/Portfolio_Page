import React from 'react';
import swiggy from '../Assets/swiggy-clone.png';
import flipkart from '../Assets/flipkart-clone.png';
import pexel from  '../Assets/pexel.png';
import tic from '../Assets/tic-ta-toe.png' ;
import DialogProjects from './DialogProjects';
import connect from '../Assets/connect.png';
import meshop from '../Assets/meshop.png';
import Skills from './Skills'
import Footer from './Footer'
import HerosSection from './HerosSection';
import About from './About';

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
       <div className='container main-inner-wrapper' id='home'>
        <HerosSection/>
       </div>

       <div className='container main-inner-wrapper2' id='skills'>
         <Skills />
       </div>

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

      <div className='container main-inner-wrapper' id='about'>
        <About/>
       </div>
      <hr className="hrBar"></hr>
      
      <div className='container main-inner-wrapper' id='about'>
        <Footer/>
       </div>       
    
    </div>
  );
};

export default Main;
