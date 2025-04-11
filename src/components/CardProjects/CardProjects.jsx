import { useState } from 'react';

export default function CardProject() {
  const projects = [
    {
      title: "Portfólio MORUSU",
      category: "Website Pessoal",
      description: "Meu portfólio profissional desenvolvido com React e Tailwind CSS, mostrando meus projetos e habilidades.",
      image: "/assets/projects/portfolio.jpg",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      title: "MorusuFlix",
      category: "Front-End",
      description: "API completa para e-commerce com autenticação JWT, pagamentos e gestão de produtos.",
      image: "/assets/projects/ecommerce-api.jpg",
      tags: ["React.js", "Vite", "Tailwind CSS", "Firebase"],
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      title: "E-commerce API",
      category: "Backend System",
      description: "API completa para e-commerce com autenticação JWT, pagamentos e gestão de produtos.",
      image: "/assets/projects/ecommerce-api.jpg",
      tags: ["Node.js", "Express", "MongoDB"],
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Task Manager",
      category: "Web Application",
      description: "Aplicativo de gerenciamento de tarefas com drag-and-drop, calendário e notificações.",
      image: "/assets/projects/task-manager.jpg",
      tags: ["React", "Firebase", "Material UI"],
      liveUrl: "#",
      codeUrl: "#"
    },
  ];

  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="px-4 md:px-8 lg:px-16 py-12 bg-gradient-to-b from-[#0a0a0a] to-[#1D1D1D]" id="projects">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">
        MEUS <span className="text-[#f4b315]">PROJETOS</span>
      </h2>
      <p className="text-[#6C6C6A] text-center mb-12 max-w-2xl mx-auto">
        Alguns dos trabalhos que desenvolvi com dedicação e atenção aos detalhes
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div 
            key={index}
            className={`relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-[#1D1D1D] to-[#0a0a0a] transition-all duration-500 hover:border-[#f4b315]/30 ${hoveredCard === index ? 'scale-[1.02]' : ''}`}
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
                    className="text-xs px-3 py-1 rounded-full bg-[#f4b315]/10 text-[#f4b315] border border-[#f4b315]/20"
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
                  className="flex-1 text-center py-2 text-sm font-medium bg-[#f4b315] text-[#1D1D1D] hover:bg-[#f4d315] transition-colors rounded"
                >
                  Ver Projeto
                </a>
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2 text-sm font-medium border border-[#6C6C6A] text-white hover:border-[#f4b315] hover:text-[#f4b315] transition-colors rounded"
                >
                  Código
                </a>
              </div>
            </div>

            {hoveredCard === index && (
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 left-0 w-32 h-32 bg-[#f4b315] rounded-full mix-blend-soft-light filter blur-3xl -translate-x-1/4 -translate-y-1/4"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#f4d315] rounded-full mix-blend-soft-light filter blur-3xl translate-x-1/4 translate-y-1/4"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}