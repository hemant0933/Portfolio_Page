import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const handleClick = (e,item) => {
    e.preventDefault();
    setActiveItem(item);
    const target = document.querySelector(`#${item}`);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scroll) {
        setScroll(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  return (
    <header className="nav-wrapper">
      <div className="inner">
        <ul className={`nav_list ${scroll ? "scroll" : ""}`}>
          <li
            className={`nav-item ${activeItem === "home" ? "active" : ""}`}
            onClick={(e) => handleClick(e,"home")}
          >
            <a href="/">
              Home
            </a>
          </li>
          <li
            className={`nav-item ${activeItem === "about" ? "active" : ""}`}
            onClick={(e) => handleClick(e,"about")}
          >
            <a href="#about">
              About </a>
          </li>
          <li
            className={`nav-item ${activeItem === "skills" ? "active" : ""}`}
            onClick={(e) => handleClick(e,"skills")}
          >
            <a href="#skills">
              Skills
              </a>
          </li>
          <li
            className={`nav-item ${activeItem === "projects" ? "active" : ""}`}
            onClick={(e) => handleClick(e,"projects")}
          >
            <a href="#projects">
              Project
            </a>
          </li>
          <li
            className={`nav-item ${activeItem === "socials" ? "active" : ""}`}
            onClick={(e) => handleClick(e,"socials")}
          >
            <a href="#socials">
              Socials
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
