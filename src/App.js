import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Biography from './components/Biography';
import Interests from './components/Interests';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Gallery from './components/Gallary';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* Routes for the different pages */}
          <Route path="my-portfolio-app" element={<Home />} />
          <Route path="/biography" element={<Biography />} />
          <Route path="/interests" element={<Interests />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;