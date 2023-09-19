import React from "react";
import HerosSection from "../../Components/HerosSection";
import Skills from "../../Components/Skills";
import About from "../../Components/About";
import Project from "../../Components/Project";
import Contact from "../../Components/Contact";

const Home = () => {
  return (
    <main>
      <section>
        <HerosSection />
      </section>
      <section>
        <Skills />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Project />
      </section>
      <section>
        <Contact />
      </section>
    </main>
  );
};

export default Home;
