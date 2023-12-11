import React from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import Services from '../components/Services';
import Projects from '../components/Projects';

const Home = () => {
  return (
    <div>
      <About />
      <Contact />
      {/* <Services/> */}
      <Projects />
    </div>
  );
};

export default Home;
