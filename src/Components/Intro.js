import React from 'react';

const Intro = ({men}) => {
    const OpenLinkdin = () =>{
        return window.location.href = 'https://www.linkedin.com/in/hemant-kumar-0a9b69bb/';
      }    
  return (
    <div className='introComponent'>
    <div className='row'>
    <div className='col-md-6 context-left'>
       <div className='headingInfo'>
         <p>Hello! &nbsp;  I'm</p>
         <p className='name'>Hemant<span className='dot'>.</span></p>
         <h3>Keep it Simple...</h3>
         <button type='button' className='btn btn-dark' onClick={OpenLinkdin}>Connect Now</button>
         <a href="../Assets/Hemant_kumar28-02-2023.pdf" download><button type='button' className='btn btn-dark'>Resume!</button></a>
        </div>
     </div>
     <div className='col-md-6 context-right'>
       <img src={men}  width={"100%"} alt='menImage'/>
     </div>
    </div>

   </div>
      
  );
}

export default Intro;
