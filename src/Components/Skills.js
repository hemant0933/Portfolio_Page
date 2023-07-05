import React from "react";
import Myvideo from '../Assets/tree.png';
const Skills = () => {
  return (
    <div className="container main-inner-wrapper2" id="skills">
      <h1>
        Skills<span className="dot">.</span>
      </h1>
      <div className="videoContainer">
        <img src={Myvideo} alt="tree" className="img-fluid img-thumbnail rounded" />
      </div>
    </div>
  );
};

export default Skills;
