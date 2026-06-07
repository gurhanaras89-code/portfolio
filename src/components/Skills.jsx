import React from 'react';

const Skills = () => {
  // Yetenekleri bir array içinde tutalım ki daha sonra eklemek/çıkarmak kolay olsun
  const skillList = [
    { name: 'JAVASCRIPT', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
    { name: 'n8n', icon: 'https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/dark/n8n-color.png' },
    { name: 'REACT', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
    { name: 'VS CODE', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg' },
    { name: 'REDUX', icon: 'https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png' },
    { name: 'TAILWIND', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/960px-Tailwind_CSS_Logo.svg.png' },
  ];

  return (
    <section className="bg-white py-20 px-8 md:px-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        
        {/* Sol Taraf: Başlık */}
        <div className="md:w-1/3">
          <h2 className="text-5xl font-bold text-[#4832D3]">Skills</h2>
        </div>

        {/* Sağ Taraf: Skill Grid */}
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-4">
          {skillList.map((skill, index) => (
            <div key={index} className="flex items-center gap-4">
              {/* İkon Kutusu */}
              <div className="w-16 h-16 flex items-center justify-center">
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="max-w-full max-h-full object-contain rounded-md" 
                />
              </div>
              {/* Skill İsmi */}
              <span className="text-[#777777] font-medium text-lg tracking-wider">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;