import React, { useState } from 'react';

import {HiOutlineLightBulb} from 'react-icons/hi';

const Navbar = () => {

  const [theme,setTheme] = useState({
    color:'black',
    backgroundColor:'white'
  })
  
  
  const toggleBtn = () => {
    if(theme.color === 'black'){
      setTheme({
        color:'white',
        backgroundColor:'black'
      })
    }
    else{
      setTheme({
        color:'black',
        backgroundColor:'white'
      })
    }
  }


  return (
    <div className='nav-wrapper' style={theme}>
      <h1 className='nav-left'>PortFolio <strong className='dot'>.</strong></h1>
      <div className='nav-right'>
        <span className='nav_list'>
            <a href='#about'><p className='headernav'>About</p></a>
            <a href='#skills'><p className='headernav'>Skills</p></a>
            <a href='#projects'><p className='headernav'>Projects</p></a>
            <a href='#socials'><p className='headernav'>Socials</p></a>
            <a><p className='headernav' onClick={toggleBtn} value={theme.color}> <HiOutlineLightBulb /> </p></a>
        </span>
      </div>
    </div>
  );
}

export default Navbar;
