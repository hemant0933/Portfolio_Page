import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "../utils/motion";

const HerosSection = () => {
  return (
    <div className="introComponent">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.21 }}
        className="col-12 context-left"
      >
        <motion.h1
          variants={textVariant(1.1)}
          initial="hidden"
          whileInView="show"
          className="headingInfo"
        >
          <span className="title">
            Hi. I'm Hemant.
            <span className="starIcon1">
              <img src="flower.svg" width={100} alt="flowericon" />
            </span>
            <br />
            A WebApp <br /> Developer.
            <span className="starIcon2">
              <img src="flower.svg" width={100} alt="flowericon" />
            </span>
          </span>
        </motion.h1>
        <div className="smallText">
          <motion.p variants={textVariant(1.2)}>
            Bridging design and technology for seamless user-centric
            experiences.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default HerosSection;
