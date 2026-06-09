import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaInstagram, FaFacebook, FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = ({ data }) => {
  const handleApiRequest = async () => {
    try {
      const response = await axios.post('https://reqres.in/api/workintech', {
        name: "Gürhan Aras",
        message: "Hello from portfolio!"
      });
      console.log('Response:', response.data);
      toast.success('Başarılı! ✅');
    } catch (error) {
      console.error('Hata:', error);
      toast.error('Bir hata oluştu ❌');
    }
  };
  return (
    <footer className="bg-white dark:bg-[#0d0d1a] py-24 px-8 text-center">
      <div className="max-w-2xl mx-auto space-y-6">
        
        {/* Büyük Başlık */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#4731D4] dark:text-[#CBF281] tracking-tight">
          {data.heading || "Send me a message!"}

        </h2>
        
        {/* Açıklama Yazısı */}
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-md mx-auto leading-relaxed">
          {data.subtext || "Got a question or proposal, or just want to say hello? Go ahead."}
        </p>
        
        {/* E-posta Adresi */}
        <div className="pt-2">
          <a 
            href="mailto:gurhanaras89@gmail.com" 
            className="text-[#4731D4] dark:text-[#CBF281] font-semibold text-xl underline cursor-pointer hover:scale-105 hover:text-purple-900 transition block break-all"
          >
            gurhanaras89@gmail.com
          </a>
        </div>

        <div className="pt-4">
          <button
            onClick={handleApiRequest}
            className="bg-[#4731D4] dark:bg-[#CBF281] text-white dark:text-[#0d0d1a] font-bold px-8 py-3 rounded-full hover:scale-105 transition duration-200 cursor-pointer"
          >
            {data.hello}
          </button>
        </div>
        
        {/* Sosyal Medya İkonları (Twitter, Dribbble, @, Instagram) */}
        <div className="flex justify-center items-center gap-6 pt-6 text-2xl text-[#4731D4] dark:text-[#CBF281]">
          <a href="https://www.instagram.com/garas4138/" className="hover:scale-125 transition duration-200"><FaInstagram /></a>
          <a href="https://github.com/gurhanaras89-code" className="hover:scale-125 transition duration-200"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/g%C3%BCrhan-aras-269710391/" className="hover:scale-125 transition duration-200"> <FaLinkedin /> </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;