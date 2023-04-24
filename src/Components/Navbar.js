import React from 'react';

const Navbar = () => {
  return (
    <div className='nav-wrapper'>
      <h1 className='nav-left'>PortFolio <strong className='dot'>.</strong></h1>
      <div className='nav-right'>
        <span className='nav_list'>
            <a href='#about'><p className='headernav'>About</p></a>
            <a href='#skills'><p className='headernav'>Skills</p></a>
            <a href='#projects'><p className='headernav'>Projects</p></a>
            <a href='#socials'><p className='headernav'>Socials</p></a>
        </span>
      </div>
    </div>
  );
}

export default Navbar;
