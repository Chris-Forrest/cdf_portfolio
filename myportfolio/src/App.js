import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import ProjectSection from './components/projectsSection';
import ContactSection from './components/contactSection';
import WelcomeMessage from './components/welcomeMessage';
//import BootstrapCarousel from './components/carousel';



function App() {

  const [ projectsSection, projectsSectionExpanded ] = useState(false);
  const [ contactSection, contactSectionExpanded ] = useState(false);



  return (
    <div className="App">
      <Header />
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

      <WelcomeMessage />
      
    </div>
  );
}

export default App;
