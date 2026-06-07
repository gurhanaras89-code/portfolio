import React from 'react';

const Projects = () => {

  const projectList = [
    {
      title: 'Workintech',
      description: 'A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler...',
      tags: ['react', 'redux', 'vercel'],
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500',
      bgColor: 'bg-[#DDEEFE]',
      siteUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Journey',
      description: 'A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler...',
      tags: ['react', 'redux', 'vercel'],
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500',
      bgColor: 'bg-[#D99EE1]',
      siteUrl: '#',
      githubUrl: '#',
    }
  ];

  return (
    <section className="bg-[#CBF281] py-20 px-8 md:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-[#4731D4] mb-12">Projects</h2>

        <div className="flex flex-col gap-8">
          {projectList.map((project, index) => (
            <div key={index} className="bg-white rounded-3xl flex flex-col cursor-pointer hover:scale-105 md:flex-row overflow-hidden shadow-lg">

              {/* Proje Görseli */}
              <div className={`md:w-1/3 ${project.bgColor} flex items-center cursor-pointer hover:scale-105 justify-center p-8`}>
                <img
                  src={project.img}
                  alt={project.title}
                  className="rounded-xl shadow-2xl transform hover:scale-105 transition duration-300"
                />
              </div>

              {/* Proje Detayları */}
              <div className="md:w-2/3 p-10 flex flex-col justify-center space-y-6">
                <h3 className="text-3xl font-bold text-[#4731D4]">{project.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>

                {/* Tagler */}
                <div className="flex gap-2">
                  {project.tags.map((tag, tIndex) => (
                    <span key={tIndex} className="bg-[#4731D4] text-white px-4 py-1 rounded-full text-sm cursor-pointer hover:scale-105 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Linkler */}
                <div className="flex gap-6 pt-2">
                  <a href={project.siteUrl} target="_blank" className="text-[#4731D4] font-bold underline hover:scale-120 cursor-pointer hover:text-blue-800 transition">View Site</a>
                  <a href={project.githubUrl} target="_blank" className="text-[#4731D4] hover:scale-120 cursor-pointer font-bold underline hover:text-blue-800 transition">Github</a>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;