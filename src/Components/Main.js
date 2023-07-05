import React from 'react';
import Myvideo from '../Assets/tree.png';
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
