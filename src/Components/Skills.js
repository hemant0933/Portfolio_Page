import React from "react";
import html from "../Assets/html-5.png";
import css from "../Assets/css.png";
import js from "../Assets/js.png";
import reactIcon from "../Assets/react.png";
import github from "../Assets/github.png";
import bootstrape from "../Assets/bootstrap.png";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className="container main-inner-wrapper2" id="skills">
      <p>
        Skills<span className="dot">.</span>
      </p>
      <div className="flexcontainer">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="SkIcon moveable"
        >
          <img src={html} alt="htmlIcon" />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="SkIcon moveable"
        >
          <img src={css} alt="htmlIcon" />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="SkIcon moveable"
        >
          <img src={js} alt="htmlIcon" />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="SkIcon moveable"
        >
          <img src={reactIcon} alt="htmlIcon" />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="SkIcon moveable"
        >
          <img src={github} alt="htmlIcon" />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="SkIcon moveable"
        >
          <img src={bootstrape} alt="htmlIcon" />
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
