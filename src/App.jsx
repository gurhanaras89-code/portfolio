// App.jsx
import React, { useState } from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { siteData } from './data';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [lang, setLang] = useState('en');
  const currentData = siteData[lang];

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-[#1a1a2e] font-sans antialiased">
        <Hero darkMode={darkMode} setDarkMode={setDarkMode} lang={lang} setLang={setLang} data={currentData.heroSection} />
        <Skills data={currentData.skillsSection} />
        <Profile data={currentData.profileSection} />
        <Projects data={currentData.projectsSection} />
        <Footer data={currentData.footerSection} />
      </div>
    </div>
  );
}

export default App;