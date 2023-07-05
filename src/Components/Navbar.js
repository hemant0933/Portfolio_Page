import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const handleClick = (item) => {
    setActiveItem(item)
  }

  useEffect(() => {
  const handleScroll = () => {
    const isScrolled = window.scrollY > 50;
    if(isScrolled !== scroll){
      setScroll(isScrolled)
    } 
   };

   document.addEventListener('scroll', handleScroll);
   return () => {
    document.removeEventListener('scroll',handleScroll);
   };
 },[scroll]);

  return (
    <header id="home" className="nav-wrapper">
      <div className="inner">
        <ul className={`nav_list ${scroll ? 'scroll' : ''}`}>
          <li 
              className={`nav-item ${activeItem === 'home' ? 'active' : ''}`}
              onClick={()=> handleClick('home')}  >
            <a href="/home">
              <p className="headernav">Home</p>
            </a>
          </li>
          <li 
              className={`nav-item ${activeItem === 'about' ? 'active' : ''}`}
              onClick={()=> handleClick('about')} > 
            <a href="#about">
              <p className="headernav">About</p>
            </a>
          </li>
          <li className={`nav-item ${activeItem === 'skills' ? 'active' : ''}`}
                  onClick={()=> handleClick('skills')}  >
            <a href="#skills">
              <p className="headernav">Skills</p>
            </a>
          </li>
          <li 
              className={`nav-item ${activeItem === 'projects' ? 'active' : ''}`}
              onClick={()=> handleClick('projects')} >
            <a href="#projects">
              <p className="headernav">Projects</p>
            </a>
          </li>
          <li className={`nav-item ${activeItem === 'socials' ? 'active' : ''}`}
                onClick={()=> handleClick('socials')} >
            <a href="#socials">
              <p className="headernav">Socials</p>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
