import React from 'react';
import { Link } from 'react-scroll';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Achievements from './components/Achievements';
import Message from './components/Message';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar">
        <Link to="home" smooth={true} duration={500} className="nav-link">Home</Link>
        <Link to="gallery" smooth={true} duration={500} className="nav-link">Gallery</Link>
        <Link to="achievements" smooth={true} duration={500} className="nav-link">Achievements</Link>
        <Link to="message" smooth={true} duration={500} className="nav-link">Message</Link>
      </nav>

      {/* Sections */}
      <div id="home"><Home /></div>
      <div id="gallery"><Gallery /></div>
      <div id="achievements"><Achievements /></div>
      <div id="message"><Message /></div>
    </div>
  );
}

export default App;
