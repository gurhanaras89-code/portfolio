import React from 'react';

const Projects = () => {

  const projectList = [
    {
      title: 'Teknolojik Yemekler',
      description: 'This is a modern, responsive Single Page Application (SPA) built with React that allows users to customize and order their favorite pizzas. The project is developed as a part of the Workintech Frontend Web Development curriculum, focusing on state management, form validation, API integration, and automated End-to-End (E2E) testing.',
      tags: ['Javascript', 'Css', "Vite"],
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500',
      bgColor: 'bg-[#DDEEFE]',
      siteUrl: 'https://pizza-challenge-khaki.vercel.app/',
      githubUrl: 'https://github.com/gurhanaras89-code/pizza-challenge',
    },
    {
      title: 'Sayı Tahmin Uygulaması',
      description: 'A modern, responsive, and fun **Number Guessing Game** built with **HTML5**, **JavaScript (ES6+)**, and styled using **Tailwind CSS**.',
      tags: ['Html5', 'Tailwind'],
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500',
      bgColor: 'bg-[#D99EE1]',
      siteUrl: 'https://sayi-tahmin-seven.vercel.app/',
      githubUrl: 'https://github.com/gurhanaras89-code/sayi-tahmin',
    }
  ];

  return (
    <section className="bg-[#CBF281] dark:bg-[#0d0d1a] py-20 px-8 md:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-[#4731D4] dark:text-[#CBF281] mb-12">Projects</h2>

        <div className="flex flex-col gap-8">
          {projectList.map((project, index) => (
            <div key={index} className="bg-white dark:bg-[#1e1e3f] rounded-3xl flex flex-col cursor-pointer hover:scale-105 md:flex-row overflow-hidden shadow-lg">

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
                <h3 className="text-3xl font-bold text-[#4731D4] dark:text-[#CBF281]">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
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
                  <a href={project.siteUrl} target="_blank" className="text-[#4731D4] dark:text-[#CBF281] font-bold underline hover:scale-120 cursor-pointer hover:text-blue-800 transition">View Site</a>
                  <a href={project.githubUrl} target="_blank" className="text-[#4731D4] dark:text-[#CBF281] hover:scale-120 cursor-pointer font-bold underline hover:text-blue-800 transition">Github</a>
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