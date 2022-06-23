import React, { useState } from 'react';
import './App.css';
import {Routes, Route, Link } from 'react-router-dom';
import Header from './components/header';
import ProjectSection from './components/projectsSection';
import ContactSection from './components/contactSection';
import WelcomeMessage from './components/welcomeMessage';
import About from './components/aboutSection';
import background from './images/whiteTriangles.jpg';

function App() {

  const [ projectsSection, projectsSectionExpanded ] = useState(false);
  const [ contactSection, contactSectionExpanded ] = useState(false);



  return (
    <div className="App" style={{ backgroundImage: `url(${background})`}}>
      <Header />
      <nav>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
        
        <button onClick= {() => projectsSectionExpanded(true)}>PROJECTS</button>
        
        <button onClick= {() => contactSectionExpanded(true)}>CONTACT</button>
        { contactSection && (
          <div>
            <ContactSection />

            <button onClick= {() => contactSectionExpanded(false)}>Hide</button>
          </div>
        )}
        
      </nav>
        
        <div className='body'>
        {projectsSection && (
            <div className='projectsSection'>
              <button onClick={() => projectsSectionExpanded(false)} >Hide</button>
               <ProjectSection />

              <button onClick={() => projectsSectionExpanded(false)} >Hide</button>
          </div>
          )}
            
        </div>
      <Routes>
         <Route path="/about" element={<About/>} />
         <Route path="/projects" element={< ProjectSection />} />
      </Routes>
      <WelcomeMessage />
      
    </div>
  );
}

export default App;
