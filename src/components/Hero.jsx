import React from 'react';

const Hero = ({ darkMode, setDarkMode, data, lang, setLang }) => {
  return (
    // Ana kapsayıcı mor arka planlı
    <section className="bg-[#4731D4] dark:bg-[#12122a] text-white pt-8 pb-20 px-8 md:px-24 relative overflow-hidden min-h-[500px]">

      {/* Figma'daki Sağ Taraftaki Fıstık Yeşili Blok */}
      <div className="absolute top-0 right-0 w-[25%] h-full bg-[#CBF281] dark:bg-[#1e1e3f] hidden md:block z-0" />

      {/* Üst Bar: Dil Değiştirme ve Dark Mode Butonları */}
      <div className="relative flex justify-end items-center gap-6 mb-16 z-10 max-w-6xl mx-auto">
        <button
          onClick={() => setLang(lang === 'en' ? 'tr' : 'en')}
          className="text-[#CBF281] cursor-pointer font-bold text-sm -translate-x-25 hover:scale-105 tracking-wider"
        >
          {lang === 'en' ? 'TÜRKÇE' : 'ENGLISH'}
        </button>

        {/* Dark Mode Buton Alanı */}
        <div className="flex items-center gap-2 text-sm font-bold tracking-wider text-[#777777] md:text-[#4731D4] z-10 relative">
          {/* Yuvarlak Switch Arka Planı */}
          <div onClick={() => setDarkMode(!darkMode)} className="w-10 h-5 bg-[#4731D4] md:bg-[#CBF281] rounded-full translate-x-16 relative cursor-pointer">
            {/* Switch Yuvarlağı */}
            <div className={`w-4 h-4 bg-white rounded-full absolute top-[2px] transition-all duration-300 ${darkMode ? 'left-[22px]' : 'left-[2px]'}`} />
          </div>
          <span onClick={() => setDarkMode(!darkMode)} className="text-white -translate-x-25 md:text-[#4731D4] hover:scale-105 cursor-pointer">
            {darkMode ? 'LIGHT MODE' : 'DARK MODE'}
          </span>
        </div>
      </div>

      {/* İçerik Alanı */}
      <div className="relative flex flex-col md:flex-row justify-between items-center gap-8 max-w-6xl mx-auto z-10">

        {/* Sol Taraf: Metinler */}
        <div className="flex-1 space-y-6">
          <h1 className="text-[#CBF281] text-3xl font-bold hover:scale-120 tracking-wide">
            Gürhan ARAS
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#CBF281] md:text-[#CBF281] hover:scale-105">
  {/* data.intro içindeki yapıyı Figma'na göre direkt tek parça veya bölünmüş basabilirsin */}
  <span className="text-white">{data.intro}</span>
</h1>
<p className="text-lg text-purple-100 max-w-md hover:scale-105">
  {data.description}
</p>

          {/* Butonlar */}
          <div className="flex gap-4 pt-2">
            <a
              href="https://github.com/gurhanaras89-code"
              target="_blank"
              className="bg-white text-[#4731D4] font-bold px-6 py-2 rounded-md shadow-md hover:bg-gray-100 cursor-pointer hover:scale-105 transition flex items-center gap-2"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/g%C3%BCrhan-aras-269710391/"
              target="_blank"
              className="bg-white text-[#4731D4] font-bold px-6 py-2 rounded-md shadow-md hover:bg-gray-100 cursor-pointer hover:scale-105 transition flex items-center gap-2"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Sağ Taraf: Tam Kesişimde Duracak Profil Resmi */}
        <div className="flex-1 flex justify-center md:justify-end items-center">
          <div className="relative">

            <img
              src="./public/profil.jpeg"
              alt="Developer"
              className="rounded-2xl shadow-2xl w-72 h-80 object-cover border-4 hover:scale-105 border-transparent md:-translate-x-20"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;