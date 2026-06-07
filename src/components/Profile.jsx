import React from 'react';

const Profile = () => {
  return (
    <section className="bg-[#4731D4] text-white py-20 px-8 md:px-24">
      <div className="max-w-6xl mx-auto">
        
        {/* Bölüm Başlığı */}
        <h2 className="text-5xl font-bold text-[#CBF281] mb-12">Profile</h2>
        
        {/* ESAS DEĞİŞİKLİK BURADA: flex-col yerine direkt flex md:flex-row yapıyoruz */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          
          {/* Sol Blok: Basic Information */}
          <div className="w-full md:w-1/3 hover:scale-105 space-y-6">
            <h3 className="text-2xl font-semibold mb-6 tracking-wide">Basic Information</h3>
            
            <div className="space-y-4 text-sm md:text-base">
              <div className="flex">
                <span className="w-32 text-[#CBF281] font-bold">Birth Date</span>
                <span>04.05.1989</span>
              </div>
              <div className="flex">
                <span className="w-32 text-[#CBF281] font-bold">City</span>
                <span>Uşak</span>
              </div>
              <div className="flex">
                <span className="w-32 text-[#CBF281] font-bold">Education</span>
                <span className="flex-1">Military School, 2011 - Workintech, 2026</span>
              </div>
              <div className="flex">
                <span className="w-32 text-[#CBF281] font-bold">Preferred Role</span>
                <span>FullStack Developer</span>
              </div>
            </div>
          </div>

          {/* Orta Blok: Görsel (Genişliği sabitledik ki diğerlerini sıkıştırmasın) */}
          <div className="w-full md:w-1/4 flex justify-center py-4 md:py-0">
            <img 
              src="https://cdn.pixabay.com/photo/2020/01/26/20/14/computer-4795762_1280.jpg" 
              alt="Workspace" 
              className="rounded-2xl shadow-xl w-full max-w-[550px] max-h-[400px] aspect-video object-cover"
            />
          </div>

          {/* Sağ Blok: About Me */}
          <div className="w-full md:w-1/3 hover:scale-105 space-y-4">
            <h3 className="text-2xl font-semibold tracking-wide">About Me</h3>
            <p className="text-purple-100 leading-relaxed text-sm md:text-base">
              I am a professional open to learning and innovation, aiming to transfer my disciplined and versatile educational background into a new career. With a team-oriented mindset and a goal-driven, results-focused approach, I am eager to succeed in this new chapter of my journey.
            </p>
            <p className="text-purple-100 leading-relaxed text-sm md:text-base">
              
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Profile;