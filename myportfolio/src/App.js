import React from 'react';
import './App.css';
import {Routes, Route } from 'react-router-dom';
import Header from './components/header';
import ProjectSection from './components/projectsSection';
import ContactSection from './components/contactSection';
import WelcomeMessage from './components/welcomeMessage';
import About from './components/aboutSection';
import background from './images/whiteTriangles.jpg';
import Footer from './components/footer';

function App() {

  return (
    <div className="App" style={{ backgroundImage: `url(${background})`, paddingBottom:"80px"}}>
      <Header />
      <Routes>
         <Route path="/" element={<WelcomeMessage />} />
         <Route path="/about" element={<About/>} />
         <Route path="/projects" element={< ProjectSection />} />
         <Route path="/contact" element={< ContactSection />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
