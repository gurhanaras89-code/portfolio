import React from 'react';
import { toast } from 'react-toastify';

const Hero = ({ darkMode, setDarkMode, data, lang, setLang }) => {
  return (
    <section className="bg-[#4731D4] dark:bg-[#12122a] text-white pt-8 pb-20 px-8 md:px-24 relative overflow-hidden min-h-[500px]">

      {/* Fıstık Yeşili Blok */}
      <div className="absolute top-0 right-0 w-[25%] h-full bg-[#CBF281] dark:bg-[#1e1e3f] hidden md:block z-0" />

      {/* Butonlar Alanı */}
      <div className="relative flex justify-end items-center gap-8 mb-16 z-10 max-w-6xl mx-auto">
        {/* Dil Butonu */}
        <button
          onClick={() => {
            if (lang === 'en') {
              setLang('tr');
              toast.success('Dil Türkçe olarak değiştirildi! 🇹🇷');
            } else {
              setLang('en');
              toast.info('Language switched to English! 🇬🇧');
            }
          }}
          className="text-[#CBF281] dark:text-[#CBF281] cursor-pointer font-bold text-sm hover:scale-105 tracking-wider transition"
        >
          {lang === 'en' ? 'TÜRKÇE' : 'ENGLISH'}
        </button>

        {/* Dark Mode Toggle Alanı */}
        <div 
          onClick={() => setDarkMode(!darkMode)}
          className="flex items-center gap-3 cursor-pointer group"
        >
          {/* Switch (Anahtar) */}
          <div className="w-12 h-6 bg-[#3520b8] dark:bg-[#2a2a50] md:bg-[#8eb833] rounded-full relative p-1 transition-colors">
            <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-all duration-300 ${darkMode ? 'left-7' : 'left-1'}`} />
          </div>

          {/* Yazı */}
          <span className="text-sm font-bold tracking-wider text-white md:text-[#4731D4] dark:md:text-[#CBF281] group-hover:scale-105 transition">
            {darkMode ? 'LIGHT MODE' : 'DARK MODE'}
          </span>
        </div>
      </div>

      {/* İçerik Alanı */}
      <div className="relative flex flex-col md:flex-row justify-between items-center gap-8 max-w-6xl mx-auto z-10">

        {/* Sol Taraf: Metinler */}
        <div className="flex-1 space-y-6">
          <h1 className="text-[#CBF281] text-3xl font-bold hover:scale-105 transition inline-block tracking-wide">
            Gürhan ARAS
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#CBF281]">
            <span className="text-white">{data.intro}</span>
          </h1>
          <p className="text-lg text-purple-100 max-w-md">
            {data.description}
          </p>

          {/* Link Butonları */}
          <div className="flex gap-4 pt-2">
            <a
              href="https://github.com/gurhanaras89-code"
              target="_blank"
              rel="noreferrer"
              className="bg-white text-[#4731D4] font-bold px-6 py-2 rounded-md shadow-md hover:bg-gray-100 cursor-pointer hover:scale-105 transition flex items-center gap-2"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/g%C3%BCrhan-aras-269710391/"
              target="_blank"
              rel="noreferrer"
              className="bg-white text-[#4731D4] font-bold px-6 py-2 rounded-md shadow-md hover:bg-gray-100 cursor-pointer hover:scale-105 transition flex items-center gap-2"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Profil Resmi */}
        <div className="flex-1 flex justify-center md:justify-end items-center">
          <div className="relative">
            <img
              src="https://github.com/gurhanaras89-code/portfolio/blob/main/profil.jpeg?raw=true"
              alt="Developer"
              className="rounded-2xl shadow-2xl w-72 h-80 object-cover border-4 border-transparent hover:scale-105 transition md:-translate-x-20"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;