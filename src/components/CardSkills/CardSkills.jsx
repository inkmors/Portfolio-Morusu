import { useState, useEffect } from 'react';

export default function Skills() {
  const [skillCategories, setSkillCategories] = useState([]);
  const [otherTechs, setOtherTechs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/inkmors/PortfolioMorusu/main/skills.json');
        const data = await response.json();
        
        setSkillCategories(data.categories || []);
        setOtherTechs(data.otherTechs || []);
      } catch (error) {
        console.error("Erro ao buscar habilidades:", error);
        setSkillCategories([
          {
            title: "Frontend",
            skills: [
              { name: "React", level: 90 },
              { name: "JavaScript", level: 85 }
            ]
          }
        ]);
        setOtherTechs(["Next.js", "Redux"]);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  if (loading) {
    return (
      <section id="skills" className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-[#0a0a0a] to-[#1D1D1D]">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-pulse text-[#f4b315]">Carregando habilidades...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="skills" className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-[#0a0a0a] to-[#1D1D1D]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            MINHAS <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4b315] to-[#f4d315]">HABILIDADES</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#f4b315] to-[#f4d315] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-[#f4b315]/30 transition-colors"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="w-4 h-4 bg-[#f4b315] rounded-full mr-3"></span>
                {category.title}
              </h3>
              
              <div className="space-y-5">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white">{skill.name}</span>
                      <span className="text-[#f4b315]">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-[#f4b315] to-[#f4d315] h-2 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {otherTechs.length > 0 && (
          <div className="mt-16 bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Outras Tecnologias</h3>
            
            <div className="flex flex-wrap justify-center gap-4">
              {otherTechs.map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-[#f4b315]/10 text-[#f4b315] rounded-full text-sm font-medium border border-[#f4b315]/20 hover:bg-[#f4b315]/20 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}