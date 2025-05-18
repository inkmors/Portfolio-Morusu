import { useState } from 'react';

export default function CardProject() {
  const projects = [
    {
      title: "LinkStash",
      category: "Aplicação Web",
      description: "Aplicação web moderna para organizar e gerenciar itens digitais importantes em um só lugar e de qualquer dispositivo.",
      image: "/assets/projects/BannerLinkStash.png",
      tags: ["React.js", "Vite", "Tailwind CSS", "Firebase", "JavaScript"],
      liveUrl: "https://linkstash.com.br",
      codeUrl: "https://github.com/inkmors/Linkstash"
    },
    {
      title: "MorusuFlix",
      category: "Aplicação Web",
      description: "Plataforma responsiva para explorar e descobrir filmes, construída com React, Vite e Tailwind CSS. Uma experiência otimizada e fluida com lazy loading e design intuitivo.",
      image: "/assets/projects/morusuFlix.png",
      tags: ["React.js", "Vite", "Tailwind CSS", "TMDB", "JavaScript"],
      liveUrl: "https://morusuflix.vercel.app/",
      codeUrl: "https://github.com/inkmors/Morusu-Flix"
    },
    {
      title: "Clinica AngioStar",
      category: "Aplicação Web",
      description: "Clínica especializada em exames e procedimentos de alta precisão nas áreas vascular e cardiológica, conectando pacientes aos melhores especialistas e unidades hospitalares em diversos municípios",
      image: "/assets/projects/AngioStarSite.png",
      tags: ["React.js", "Vite", "Tailwind CSS", "JavaScript"],
      liveUrl: "https://angiostar.com.br",
      codeUrl: "#"
    },
    // {
    //   title: "Morusu Links",
    //   category: "Aplicação Web",
    //   description: "Aplicação web moderna para organizar e gerenciar itens digitais importantes em um só lugar e de qualquer dispositivo.",
    //   image: "/assets/projects/BannerLinkStash.png",
    //   tags: ["React.js", "CSS", ],
    //   liveUrl: "https://morusu.vercel.app/",
    //   codeUrl: "https://github.com/inkmors/Morusu-Links"
    // },
    // {
    //   title: "CPF Validator",
    //   category: "Aplicação Web",
    //   description: "Aplicação web moderna para organizar e gerenciar itens digitais importantes em um só lugar e de qualquer dispositivo.",
    //   image: "/assets/projects/BannerLinkStash.png",
    //   tags: ["React.js", "Vite", "Tailwind CSS", "Firebase"],
    //   codeUrl: "https://github.com/inkmors/CPFs_Validator"
    // },
    // {
    //   title: "LinkStash",
    //   category: "Aplicação Web",
    //   description: "Aplicação web moderna para organizar e gerenciar itens digitais importantes em um só lugar e de qualquer dispositivo.",
    //   image: "/assets/projects/BannerLinkStash.png",
    //   tags: ["React.js", "Vite", "Tailwind CSS", "Firebase"],
    //   liveUrl: "https://linkstash.com.br",
    //   codeUrl: "https://github.com/inkmors/Linkstash"
    // },
    // {
    //   title: "StormRiders",
    //   category: "Aplicação Web",
    //   description: "Meu portfólio profissional desenvolvido com React e Tailwind CSS, mostrando meus projetos e habilidades.",
    //   image: "/assets/projects/StormRiders.png",
    //   tags: ["React", "Tailwind CSS", "Framer Motion"],
    //   liveUrl: "#",
    //   codeUrl: "#"
    // },
    // {
    //   title: "Task Manager",
    //   category: "Web Application",
    //   description: "Aplicativo de gerenciamento de tarefas com drag-and-drop, calendário e notificações.",
    //   image: "/assets/projects/task-manager.jpg",
    //   tags: ["React", "Firebase", "Material UI"],
    //   liveUrl: "#",
    //   codeUrl: "#"
    // },
  ];

  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="px-4 md:px-8 lg:px-16 py-12 flex flex-col items-center" id="projects" style={{
      background: 'linear-gradient(180deg, #0a0a0a 0%, #1D1D1D 100%)',
    }}>
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 text-center">
        PROJETOS
      </h2>
      <p className="text-[#B6B6B4] text-center mb-12 max-w-2xl mx-auto">
      Alguns dos trabalhos que desenvolvi com dedicação e atenção aos detalhes
      </p>
      <div className="w-24 h-1.5 bg-[#fff1] mx-auto rounded-full mb-15"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div 
            key={index}
            className={`relative overflow-hidden rounded-xl border transition-all duration-500 hover:border-[#fff]/30 ${hoveredCard === index ? 'scale-[1.02]' : ''}`}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
              background: "linear-gradient(180deg, #0a0a0a 0%, #1D1D1D 100%)",
              borderColor: "rgba(255, 255, 255, 0.1)"
            }}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className={`w-full h-full object-cover transition-transform duration-700 ${hoveredCard === index ? 'scale-110' : 'scale-100'}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80"></div>
              <div className="absolute bottom-4 left-4">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="text-sm text-[#B6B6B4]">{project.category}</p>
              </div>
            </div>

            <div className="p-6">
              <p className="text-[#B6B6B4] mb-4 line-clamp-3">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i}
                    className="text-xs px-3 py-1 rounded-full border text-white"
                    style={{
                      background: "rgba(255, 255, 255, 0.1)",
                      borderColor: "rgba(255, 255, 255, 0.1)"
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2 text-sm font-medium bg-[#fff] text-[#1D1D1D] hover:bg-[#B6B6B4] transition-colors rounded"
                >
                  Ver Projeto
                </a>
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2 text-sm font-medium text-white hover:border-[#B6B6B4] hover:text-[#B6B6B4] transition-colors rounded"
                  style={{
                    border: "1.5px solid rgba(255, 255, 255)"
                  }}
                >
                  Código
                </a>
              </div>
            </div>

            {hoveredCard === index && (
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 left-0 w-32 h-32 bg-[#fff] rounded-full mix-blend-soft-light filter blur-3xl -translate-x-1/4 -translate-y-1/4"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#fff] rounded-full mix-blend-soft-light filter blur-3xl translate-x-1/4 translate-y-1/4"></div>
              </div>
            )}
          </div>
        ))}
      </div>
      <a
        href='https://github.com/inkmors?tab=repositories'
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 text-center py-3 px-12 mt-12 text-sm font-medium bg-[#fff] text-[#1D1D1D] hover:bg-[#B6B6B4] transition-colors rounded"
        >
          Veja mais projetos
        </a>
    </div>
  );
}