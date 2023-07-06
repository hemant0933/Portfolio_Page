import React from 'react';
import flower from '../Assets/star-21-512.png'
import { motion } from "framer-motion"
// import men from '../Assets/men.jpg';

const HerosSection = () => {

  return (
    <div className='introComponent'>
    <div className='col-12 context-left'>
       <motion.h1 
         initial={{x: -100}}
         animate={{x:0}}
         transition={
           {
             duration: "1",
             delay:'0'
           }
         }
        className='headingInfo'>
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
      </motion.h1>
        <div className='smallText'>
          <p>Bridging design and technology for seamless user-centric experiences.</p>
        </div>
     </div>
   </div>
  );
}

export default HerosSection;
