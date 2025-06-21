import React from 'react';
import LandingPage from './components/LandingPage';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div className="font-sans scroll-smooth">
      <Navbar />
      <section id="home">
        <LandingPage />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <Footer />
    </div>
  );
}