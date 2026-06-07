import React, { useState } from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Footer from './components/Footer'; // Bunu ekledik

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    
    <div className="min-h-screen bg-white font-sans antialiased">
      <Hero />
      <Skills />
      <Profile />
      <Projects />
      <Footer /> 
    </div>
  );
}

export default App;