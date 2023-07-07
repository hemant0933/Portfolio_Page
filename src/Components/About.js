import React,{useRef} from "react";
import {motion,useScroll,useTransform } from "framer-motion"


const About = () => {
    const targetRef = useRef(null);
    const {scrollYProgress} = useScroll({
        target:targetRef,
        offset:["end end","end start"]
    });
    const opacity = useTransform(scrollYProgress, [0,0.6],[2,0]);
  return (
    <motion.div 
        style={{opacity}}
        ref={targetRef}
        className="aboutSection">
      <p>About.</p>
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
