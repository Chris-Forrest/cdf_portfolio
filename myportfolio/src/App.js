import React, { useState, useEffect } from 'react';
import './App.css';
import ProjectSection from './components/projectsSection';
import styled from 'styled-components';




function App() {

  const [ projectsSection, projectsSectionExpanded ] = useState(false);
  const [ resumeSection, resumeSectionExpanded ] = useState(false);
  const [ contactSection, contactSectionExpanded ] = useState(false);





  return (
    <div className="App">
      <header className="App-header">
       <h1>Chris Forrest</h1>
         <h2>Portfolio</h2>
      </header>
      <body>
        <button onClick= {() => projectsSectionExpanded(true)}>PROJECTS</button>
        {projectsSection && (
          <div className='projectsSection'>
          <ProjectSection  />

          <button onClick={() => projectsSectionExpanded(false)} >Hide</button>
         </div>
        )}
        <button onClick= {() => resumeSectionExpanded(true)}>RESUME</button>
        <button onClick= {() => contactSectionExpanded(true)}>CONTACT</button>
        
      </body>
    </div>
  );
}

export default App;
