import { motion } from 'framer-motion';

export default function AboutSection() {
    const skills = ["HTML5", "CSS3", "React", "Node.js", "TypeScript", "Tailwind CSS", "Next.js", "GraphQL", "Python", "Docker"];
    
    return (
        <section id="about" className="relative py-28 px-4 md:px-8 lg:px-16 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-[#f4b315] mix-blend-overlay blur-3xl animate-float"></div>
                <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-[#f4d315] mix-blend-overlay blur-3xl animate-float-reverse"></div>
            </div>
            

            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

            <div className="max-w-7xl mx-auto relative">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        SOBRE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4b315] to-[#f4d315]">MIM</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-[#f4b315] to-[#f4d315] mx-auto rounded-full"></div>
                </motion.div>
                
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-2/5 flex justify-center"
                    >
                        <div className="relative group perspective-1000">
                            <div className="w-64 h-64 md:w-100 md:h-100 rounded-2xl overflow-hidden border-2 border-[#f4b315]/30 shadow-2xl relative z-10 transition-all duration-700 group-hover:rotate-y-12">
                                <img 
                                    src="/assets/Profile2.png" 
                                    alt="Vinícius Lima" 
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-[#f4b315] to-[#f4d315] opacity-10 blur-xl group-hover:opacity-20 transition-opacity duration-500"></div>
                            <div className="absolute -inset-1 rounded-2xl border border-[#f4b315]/20"></div>
                        </div>
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-3/5"
                    >
                        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl hover:shadow-[0_20px_50px_rgba(244,_179,_21,_0.1)] transition-all duration-500">
                            <div className="space-y-6">
                                <motion.p 
                                    whileHover={{ x: 5 }}
                                    className="text-white text-lg md:text-xl leading-relaxed"
                                >
                                    <span className="text-[#f4b315] font-medium">Olá!</span> Eu sou Vinícius Lima, um <span className="text-[#f4d315]">desenvolvedor Full-Stack</span> apaixonado por criar soluções digitais inovadoras que unem design elegante e performance excepcional.
                                </motion.p>
                                
                                <p className="text-white/90 text-lg md:text-xl leading-relaxed">
                                    Com mais de <span className="text-[#f4b315]">5 anos de experiência</span>, já trabalhei em diversos projetos complexos, desde aplicações web modernas até sistemas escaláveis, sempre focando na melhor experiência do usuário.
                                </p>
                                
                                <p className="text-white/90 text-lg md:text-xl leading-relaxed">
                                    Quando não estou codando, você pode me encontrar explorando novas tecnologias, contribuindo para projetos open-source ou produzindo arte digital como hobby criativo.
                                </p>
                            </div>
                            
                            <div className="mt-12">
                                <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                                    <span className="w-3 h-3 bg-[#f4b315] rounded-full mr-3"></span>
                                    Principais Habilidades
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {skills.map((skill, index) => (
                                        <motion.span
                                            key={index}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.3, delay: index * 0.05 }}
                                            viewport={{ once: true }}
                                            className="px-5 py-2 bg-[#1a1a1a] text-[#f4b315] rounded-full text-sm font-medium border border-[#f4b315]/20 hover:bg-[#f4b315]/10 hover:text-[#f4d315] transition-all cursor-default"
                                            whileHover={{ 
                                                y: -3,
                                                boxShadow: "0 4px 8px rgba(244, 179, 21, 0.2)"
                                            }}
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}