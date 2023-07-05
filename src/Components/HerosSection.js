import React from 'react';
import flower from '../Assets/flower.png'
// import men from '../Assets/men.jpg';

const HerosSection = () => {

    // const OpenLinkdin = () =>{
    //     return window.location.href = 'https://www.linkedin.com/in/hemant-kumar-0a9b69bb/';
    //   }
    
  return (
    <div className='introComponent'>
    <div className='col-6 context-left'>
       <h1 className='headingInfo'>
       <span className='title'> Hi!  I'm Hemant <span className='starIcon1'><img src={flower} width={80} alt='flowericon' /></span><br/>
    I'm a Web App Developer  <span className='starIcon2'><img src={flower} width={80} alt='flowericon' /></span></span>
       
        </h1>
     </div>
     {/* <div className='col-6 context-right'>
       <img src={men}  width={"100%"} alt='menImage'/>
     </div> */}
   </div>
  );
}

export default HerosSection;
