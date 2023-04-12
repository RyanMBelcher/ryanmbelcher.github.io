import React from 'react';
import logo from './logo.svg';
import './App.css';
import PortfolioContainer from './components/PortfolioContainer';
import { Footer } from './components/Footer';
import { Header } from './components/Header'
import AboutMe from './components/pages/AboutMe';
import Contact from './components/pages/Contact';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';

function App() {
  return (
    <div className="App">
      <div id="decoLinesContainer" />
      <Header />
      <AboutMe />
      <Contact />
      <Portfolio />
      <Resume />
      {/* <PortfolioContainer /> */}
      <Footer />
    </div>
  );
}

export default App;
