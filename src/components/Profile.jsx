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
          <div className="w-full md:w-1/3 space-y-6">
            <h3 className="text-2xl font-semibold mb-6 tracking-wide">Basic Information</h3>
            
            <div className="space-y-4 text-sm md:text-base">
              <div className="flex">
                <span className="w-32 text-[#CBF281] font-bold">Doğum Tarihi</span>
                <span>24.03.1996</span>
              </div>
              <div className="flex">
                <span className="w-32 text-[#CBF281] font-bold">İkamet Şehri</span>
                <span>Uşak</span>
              </div>
              <div className="flex">
                <span className="w-32 text-[#CBF281] font-bold">Eğitim Durumu</span>
                <span className="flex-1">Kara Harp Okulu Lisans, 2011</span>
              </div>
              <div className="flex">
                <span className="w-32 text-[#CBF281] font-bold">Tercih Ettiği Rol</span>
                <span>FullStack Developer, UI</span>
              </div>
            </div>
          </div>

          {/* Orta Blok: Görsel (Genişliği sabitledik ki diğerlerini sıkıştırmasın) */}
          <div className="w-full md:w-1/4 flex justify-center py-4 md:py-0">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=400&auto=format&fit=crop" 
              alt="Workspace" 
              className="rounded-2xl shadow-xl w-full max-w-[250px] aspect-video object-cover"
            />
          </div>

          {/* Sağ Blok: About Me */}
          <div className="w-full md:w-1/3 space-y-4">
            <h3 className="text-2xl font-semibold tracking-wide">About Me</h3>
            <p className="text-purple-100 leading-relaxed text-sm md:text-base">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.
            </p>
            <p className="text-purple-100 leading-relaxed text-sm md:text-base">
              Minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Profile;