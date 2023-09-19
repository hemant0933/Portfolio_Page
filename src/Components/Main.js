import React, { Suspense } from "react";
import LoadingComponent from "./Loader/LoadingComponent.js";
const Skills = React.lazy(() => import("./Skills.js"));
const Project = React.lazy(
        () => new Promise((resolve, reject) => 
        setTimeout(() => resolve(import("./Project.js")),1000))
        
        );
const HerosSection = React.lazy(
    () => new Promise((resolve, reject) => 
    setTimeout(() => resolve( import("./HerosSection.js")),1000))
   );
const About = React.lazy(() => import("./About.js"));
const Contact = React.lazy(() => import("./Contact.js"));
const Footer = React.lazy(() => import("./Footer.js"));

// import Footer from './Footer'
// import HerosSection from './HerosSection';
// import About from './About';
// import Project from './Project';
// import Contact from './Contact';

const Main = () => {
  return (
    <div className="main-wrapper">
      <div className="container main-inner-wrapper" id="home">
        <Suspense  fallback={<LoadingComponent/>}>
          <HerosSection />
        </Suspense>
      </div>

      <div className="container main-inner-wrapper" id="skills">
        <Suspense fallback={<LoadingComponent/>}>
          <Skills />
        </Suspense>
      </div>
      <div className="container main-inner-wrapper" id="projects">
        <Suspense fallback={<LoadingComponent/>}>
          <Project />
        </Suspense>
      </div>

      <div className="container main-inner-wrapper" id="about">
        <Suspense fallback={<LoadingComponent/>}>
          <About />
        </Suspense>
      </div>

      <div className="container main-inner-wrapper" id="contact">
        <Suspense fallback={<LoadingComponent/>}>
          <Contact />
        </Suspense>
      </div>
      <hr className="hrBar"></hr>
      <div className="container main-inner-wrapper">
        <Suspense fallback={<LoadingComponent/>}>
          <Footer />
        </Suspense>
      </div>
    </div>
  );
};

export default Main;
