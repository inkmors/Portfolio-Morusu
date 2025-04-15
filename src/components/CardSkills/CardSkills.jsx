import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
            "title": "Frontend",
            "skills": [
                { "name": "HTML5", "level": 95 },
                { "name": "CSS3", "level": 95 },
                { "name": "JavaScript", "level": 90 },
                { "name": "TypeScript", "level": 40 },
                { "name": "React", "level": 70 },
                { "name": "Tailwind", "level": 90 }
            ]
          },
          {
            "title": "Backend",
            "skills": [
              { "name": "Python", "level": 90 },
              { "name": "Node.js", "level": 60 },
              { "name": "C", "level": 55 },
              { "name": "Sqlite", "level": 60 }
            ]
          },
          {
            "title": "Ferramentas",
            "skills": [
              { "name": "Git", "level": 90 },
              { "name": "GitHub", "level": 90 },
              { "name": "VSCode", "level": 100 },
              { "name": "Figma", "level": 70 }
            ]
          }
        ],);
        setOtherTechs(["Discord.py", "Vercel", "Bootstrap", "Notion", "Photoshop"]);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  if (loading) {
    return (
      <section id="skills" className="relative py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-[#0a0a0a] to-[#1D1D1D] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-[#f4b315] mix-blend-soft-light filter blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-40 h-40 rounded-full bg-[#f4d315] mix-blend-soft-light filter blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-[#B6B6B4] text-lg"
          >
            Carregando habilidades...
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="skills" className="relative py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-[#0a0a0a] to-[#1D1D1D] overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-[#fff] mix-blend-soft-light filter blur-3xl"
        ></motion.div>
        
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/3 right-1/3 w-40 h-40 rounded-full bg-[#fff] mix-blend-soft-light filter blur-3xl"
        ></motion.div>
        
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDEwIDEwIj48cGF0aCBkPSJNMCwwIEwxMCwxME0xMCwwIEwwLDEwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9zdmc+')] opacity-10"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 text-center">
            SKILLS
          </h2>

          <p className="text-[#B6B6B4] text-center mb-12 max-w-2xl mx-auto">
            Algumas das minhas habilidades e conhecimentos em programação.
          </p>

          <div className="w-24 h-1.5 bg-[#fff1] mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-[#fff]/30 transition-all hover:shadow-lg hover:shadow-[#fff]/10"
            >
              <h3 className="text-2xl font-bold text-[white] mb-6 flex items-center">
                <span className="w-4 h-4 bg-[#B6B6B4] rounded-full mr-3"></span>
                {category.title}
              </h3>
              
              <div className="space-y-5">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-[#fff] font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.3 + (i * 0.1) }}
                        viewport={{ once: true }}
                        className="bg-[#FFF] h-2 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {otherTechs.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:shadow-lg hover:shadow-[#fff]/10 transition-all"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Outras Tecnologias</h3>
            
            <div className="flex flex-wrap justify-center gap-4">
              {otherTechs.map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-[#fff]/10 text-[#fff] rounded-full text-sm font-medium border border-[#fff]/20 hover:bg-[#fff]/20 hover:text-white transition-all cursor-default"
                  whileHover={{ 
                    y: -3,
                    boxShadow: "0 4px 8px rgba(244, 179, 21, 0.2)"
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#fff] opacity-10"
            style={{
              width: Math.random() * 10 + 5 + 'px',
              height: Math.random() * 10 + 5 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, (Math.random() * 100) - 50],
              x: [0, (Math.random() * 60) - 30],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>
    </section>
  );
}