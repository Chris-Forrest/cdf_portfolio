import React, { useState, useEffect } from 'react';
import './App.css';
import ProjectSection from './components/projectsSection';
import ContactSection from './components/contactSection';
import styled from 'styled-components';




function App() {

  const [ projectsSection, projectsSectionExpanded ] = useState(false);
  const [ contactSection, contactSectionExpanded ] = useState(false);



  return (
    <div className="App">
      <header className="App-header">
       <h1>Chris Forrest</h1>
         <h2>Portfolio</h2>
      </header>
      <nav>
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
          <ProjectSection  />

          <button onClick={() => projectsSectionExpanded(false)} >Hide</button>
         </div>
        )}

      </div>
    </div>
  );
}

export default App;
