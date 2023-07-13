import React from "react";
import {motion} from "framer-motion"
import { navVariants,textVariant2 } from "../utils/motion";

const About = () => {
   
  return (
    <motion.div 
    variants={navVariants}
    initial="hidden"
    whileInView="show"
        className="aboutSection">
      <motion.p
       variants={textVariant2}
         initial="hidden"
         whileInView="show"
       >About.</motion.p>
      <div className="para">
        <p>
          "I am 22 years old and I love art and design at an early age, so I've
          dedicated my life to it.
          <br />I graduated from Bikaner Technical University with Bachelor of
          Technology in Mechnical Engineering. I'm always open to collaborating
          on exciting new projects and connecting with like-minded individuals.
          Feel free to reach out and let's discuss how we can create something
          amazing together. Let's shape the future of the web, one line of code
          at a time."
        </p>
      </div>
    </motion.div>
  );
};

export default About;
