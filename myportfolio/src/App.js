import React from 'react';
import './App.css';
import {Routes, Route } from 'react-router-dom';
import Header from './components/header';
import ProjectSection from './components/projectsSection';
import ContactSection from './components/contactSection';
import WelcomeMessage from './components/welcomeMessage';
import About from './components/aboutSection';
import background from './images/whiteTriangles.jpg';

function App() {

  return (
    <div className="App" style={{ backgroundImage: `url(${background})`}}>
      <Header />
      <Routes>
         <Route path="/" element={<WelcomeMessage />} />
         <Route path="/about" element={<About/>} />
         <Route path="/projects" element={< ProjectSection />} />
         <Route path="/contact" element={< ContactSection />} />
      </Routes>
    </div>
  );
}

export default App;
