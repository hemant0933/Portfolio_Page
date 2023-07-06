import React from 'react';
import flower from '../Assets/star-21-512.png'
// import men from '../Assets/men.jpg';

const HerosSection = () => {

    // const OpenLinkdin = () =>{
    //     return window.location.href = 'https://www.linkedin.com/in/hemant-kumar-0a9b69bb/';
    //   }
    
  return (
    <div className='introComponent'>
    <div className='col-12 context-left'>
       <h1 className='headingInfo'>
        <span className='title'>
              Hi.  I'm Hemant. 
            <span className='starIcon1'>
              <img src={flower} width={85} alt='flowericon' />
            </span><br/>
            A WebApp <br/> Developer. 
            <span className='starIcon2'>
              <img src={flower} width={85} alt='flowericon' />
              </span>
        </span>
      </h1>
        <div className='smallText'>
          <p>Bridging design and technology for seamless user-centric experiences.</p>
        </div>
     </div>
   </div>
  );
}

export default HerosSection;
