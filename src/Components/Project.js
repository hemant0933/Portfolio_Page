import React from 'react';
import swiggy from '../Assets/swiggy-clone.png';
import flipkart from '../Assets/flipkart-clone.png';
import pexel from  '../Assets/pexel.png';
import tic from '../Assets/tic-ta-toe.png' ;
import DialogProjects from './DialogProjects';
import connect from '../Assets/connect.png';
import meshop from '../Assets/meshop.png';
import imdb from "../Assets/imdb_clone.png";
import typingTest from "../Assets/typing_master.png";

const Project = () => {
    let projectData = [
        {
          id:1,
          src:'https://hemant0933.github.io/swiggy-clone/',
          Imgsrc:swiggy,
          title: 'Swiggy Clone'
        },
        {
          id:2,
          src:'https://hemant0933.github.io/Flipkart-Clone/',
          Imgsrc:flipkart,
          title: 'Flipkart Clone'
        },
        {
          id:3,
          src:'https://main--funny-bunny-ecd8ca.netlify.app/',
          Imgsrc:pexel,
          title: 'Image Searcher'
        },
        {
          id:4,
          src:'https://hemant0933.github.io/Tik-Tac-Toe-game/',
          Imgsrc: tic,
          title:'Tic Toe Game'

        },
        {
          id:5,
          src:'https://hemant0933.github.io/Bootstarpe-landing-page/',
          Imgsrc: connect,
          title: 'Responsive Website using Bootstrape'
        },
        {
          id:6,
          src:'https://hemant0933.github.io/F3-Project/',
          Imgsrc: meshop,
          title: 'Shopping Website'
        },
        {
          id:7,
          src:'https://6458afcfa08964037b8ca138--amazing-truffle-7f596c.netlify.app/',
          Imgsrc: imdb,
          title: 'IMDB Clone'
        },
        {
          id:8,
          src:'https://typing-tester-taupe.vercel.app/',
          Imgsrc: typingTest,
          title: 'Typing Master Website'
        }
    ]
  
  return (
    <div>
        <p className='textProject'>
          Projects<span className="dot">.</span>
        </p><br/>
        <div className="projectDiv">
          {projectData.map((data) => (
            <DialogProjects key={data.id} src={data.src} title={data.title} Imgsrc={data.Imgsrc} />
          ))}
        </div>
    </div>
  );
}

export default Project;
