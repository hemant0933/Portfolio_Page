import React from 'react';
import Skills from './Skills'
import Footer from './Footer'
import HerosSection from './HerosSection';
import About from './About';
import Project from './Project';
import Contact from './Contact';

const Main = () => {
  
 
  return (
    <div className='main-wrapper'>
       <div className='container main-inner-wrapper' id='home'>
        <HerosSection/>
       </div>

       <div className='container main-inner-wrapper' id='skills'>
         <Skills />
       </div>
      <div className="container main-inner-wrapper" id="projects">
          <Project/>
      </div>

      <div className='container main-inner-wrapper' id='about'>
        <About/>
       </div>
     
      <div className='container main-inner-wrapper' id='contact'>
        <Contact/>
       </div>       
       <hr className="hrBar"></hr>
      <div className='container main-inner-wrapper'>
       <Footer/>
       </div>  
      
    </div>
  );
};

export default Main;
