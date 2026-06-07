import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-24 px-8 text-center">
      <div className="max-w-2xl mx-auto space-y-6">
        
        {/* Büyük Başlık */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#4731D4] tracking-tight">
          Send me a message!
        </h2>
        
        {/* Açıklama Yazısı */}
        <p className="text-gray-600 text-lg max-w-md mx-auto leading-relaxed">
          Got a question or proposal, or just want to say hello? Go ahead.
        </p>
        
        {/* E-posta Adresi */}
        <div className="pt-2">
          <a 
            href="mailto:gurhanaras89@gmail.com" 
            className="text-[#4731D4] font-semibold text-xl underline hover:text-purple-900 transition block break-all"
          >
            gurhanaras89@gmail.com
          </a>
        </div>
        
        {/* Sosyal Medya İkonları (Twitter, Dribbble, @, Instagram) */}
        <div className="flex justify-center items-center gap-6 pt-6 text-2xl text-[#4731D4]">
          <a href="#" className="hover:scale-125 transition duration-200">🐦</a>
          <a href="#" className="hover:scale-125 transition duration-200">🌐</a>
          <a href="#" className="hover:scale-125 transition duration-200">@</a>
          <a href="#" className="hover:scale-125 transition duration-200">📷</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;