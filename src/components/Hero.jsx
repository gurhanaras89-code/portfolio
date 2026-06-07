import React from 'react';

const Hero = () => {
  return (
    // Ana kapsayıcı mor arka planlı
    <section className="bg-[#4731D4] text-white pt-8 pb-20 px-8 md:px-24 relative overflow-hidden min-h-[500px]">
      
      {/* Figma'daki Sağ Taraftaki Fıstık Yeşili Blok */}
      <div className="absolute top-0 right-0 w-[25%] h-full bg-[#CBF281] hidden md:block z-0" />

      {/* Üst Bar: Dil Değiştirme ve Dark Mode Butonları */}
      <div className="relative flex justify-end items-center gap-6 mb-16 z-10 max-w-6xl mx-auto">
        <button className="text-[#CBF281] font-bold text-sm hover:underline tracking-wider">
          TÜRKÇE'YE GEÇ
        </button>
        
        {/* Dark Mode Buton Alanı */}
        <div className="flex items-center gap-2 text-sm font-bold tracking-wider text-[#777777] md:text-[#4731D4]">
          {/* Yuvarlak Switch Arka Planı */}
          <div className="w-10 h-5 bg-[#4731D4] md:bg-[#CBF281] rounded-full relative cursor-pointer">
            {/* Switch Yuvarlağı */}
            <div className="w-4 h-4 bg-white rounded-full absolute top-[2px] left-[2px]" />
          </div>
          <span className="text-white md:text-[#4731D4]">DARK MODE</span>
        </div>
      </div>

      {/* İçerik Alanı */}
      <div className="relative flex flex-col md:flex-row justify-between items-center gap-8 max-w-6xl mx-auto z-10">
        
        {/* Sol Taraf: Metinler */}
        <div className="flex-1 space-y-6">
          <h3 className="text-[#CBF281] text-xl font-bold tracking-wide">
            Gürhan ARAS
          </h3>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#CBF281] md:text-[#CBF281]">
            <span className="text-white">I am a Frontend</span> <br /> Developer...
          </h1>
          <p className="text-lg text-purple-100 max-w-md">
            ...who likes to craft solid and scalable frontend products with great user experiences.
          </p>
          
          {/* Butonlar */}
          <div className="flex gap-4 pt-2">
            <button className="bg-white text-[#4731D4] font-bold px-6 py-2 rounded-md shadow-md hover:bg-gray-100 transition flex items-center gap-2">
              Github
            </button>
            <button className="bg-white text-[#4731D4] font-bold px-6 py-2 rounded-md shadow-md hover:bg-gray-100 transition flex items-center gap-2">
              LinkedIn
            </button>
          </div>
        </div>

        {/* Sağ Taraf: Tam Kesişimde Duracak Profil Resmi */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative">
            {/* Tasarımdaki gibi hafif taşan ve sağdaki yeşille kesişen görsel yapısı */}
            <img 
              src="./public/profil.jpeg" 
              alt="Developer" 
              className="rounded-2xl shadow-2xl w-72 h-80 object-cover border-4 border-transparent"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;