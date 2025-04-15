import { useState } from 'react';

export default function CardProject() {
  const projects = [
    {
      title: "MorusuFlix",
      category: "Aplicação Web",
      description: "Plataforma responsiva para explorar e descobrir filmes, construída com React, Vite e Tailwind CSS. Desfrute de uma experiência otimizada e fluida com lazy loading e design intuitivo.",
      image: "/assets/projects/morusuFlix.png",
      tags: ["React.js", "Vite", "Tailwind CSS", "TMDB"],
      liveUrl: "https://morusuflix.vercel.app/",
      codeUrl: "https://github.com/inkmors/Morusu-Flix"
    },
    {
      title: "Site AngioStar",
      category: "Aplicação Web",
      description: "API completa para e-commerce com autenticação JWT, pagamentos e gestão de produtos.",
      image: "/assets/projects/AngioStarSite.png",
      tags: ["React.js", "Vite", "Tailwind CSS"],
      liveUrl: "https://angiostar.vercel.app/",
      codeUrl: "#"
    },
    {
      title: "StormRiders",
      category: "Aplicação Web",
      description: "Meu portfólio profissional desenvolvido com React e Tailwind CSS, mostrando meus projetos e habilidades.",
      image: "/assets/projects/StormRiders.png",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      liveUrl: "#",
      codeUrl: "#"
    },
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
    <div className="px-4 md:px-8 lg:px-16 py-12 bg-gradient-to-b from-[#0a0a0a] to-[#1D1D1D]" id="projects">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 text-center">
        PROJETOS
      </h2>
      <p className="text-[#6C6C6A] text-center mb-12 max-w-2xl mx-auto">
      Alguns dos trabalhos que desenvolvi com dedicação e atenção aos detalhes
      </p>
      <div className="w-24 h-1.5 bg-[#fff1] mx-auto rounded-full mb-15"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div 
            key={index}
            className={`relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-[#1D1D1D] to-[#0a0a0a] transition-all duration-500 hover:border-[#fff]/30 ${hoveredCard === index ? 'scale-[1.02]' : ''}`}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
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
                <p className="text-sm text-[#f4b315]">{project.category}</p>
              </div>
            </div>

            <div className="p-6">
              <p className="text-[#6C6C6A] mb-4 line-clamp-3">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-[#fff]/10 text-[#fff] border border-[#fff]/20"
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
                  className="flex-1 text-center py-2 text-sm font-medium bg-[#fff] text-[#1D1D1D] hover:bg-[#6C6C6A] transition-colors rounded"
                >
                  Ver Projeto
                </a>
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2 text-sm font-medium border border-[#fff] text-white hover:border-[#6C6C6A] hover:text-[#6C6C6A] transition-colors rounded"
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
    </div>
  );
}