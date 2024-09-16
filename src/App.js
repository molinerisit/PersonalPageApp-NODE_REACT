import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Header from './componentes/Header';
import Resume from './pages/Resume';
import CvOnline from './pages/CvOnline';
import Roadmap from './pages/Roadmap';


import { LangProvider } from './context/LangContext';
import { IntlProvider } from 'react-intl'; // Importa IntlProvider

// Importa los archivos de mensajes de traducción
// import MensajesIngles from './languages/en-US.json';
// import MensajesEspañol from './languages/es-AR.json';

function App() {
  return (
   <LangProvider>
          {/* <IntlProvider locale="en-US" messages={MensajesIngles}> */}
      <Router>
        <Header />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cvonline" element={<CvOnline />} />
          <Route path="/Roadmap" element={<Roadmap />} />
        </Routes>
      </Router>
      {/* </IntlProvider> */}
    </LangProvider>
  );
}

export default App;
