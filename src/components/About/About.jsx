export default function AboutSection() {
    return (
        <section id="about" className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-[#1D1D1D] to-[#0a0a0a]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        SOBRE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4b315] to-[#f4d315]">MIM</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-[#f4b315] to-[#f4d315] mx-auto"></div>
                </div>
                
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    <div className="w-full lg:w-1/3 flex justify-center">
                        <div className="relative group">
                            <div className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden border-4 border-[#f4b315] relative z-10 transition-transform duration-500 group-hover:scale-105">
                                <img 
                                    src="/assets/profile.jpg" 
                                    alt="Vinícius Lima" 
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-[#f4b315] to-[#f4d315] opacity-20 blur-md group-hover:opacity-40 transition-opacity duration-500"></div>
                        </div>
                    </div>
                    
                    <div className="w-full lg:w-2/3 bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="space-y-6">
                            <p className="text-white text-lg leading-relaxed">
                                <span className="text-[#f4b315] font-semibold">Olá!</span> Eu sou Vinícius Lima, um desenvolvedor Full-Stack apaixonado por criar soluções digitais inovadoras e eficientes.
                            </p>
                            <p className="text-white text-lg leading-relaxed">
                                Com experiência em diversas tecnologias modernas, busco sempre entregar produtos de alta qualidade que atendam às necessidades dos usuários e dos negócios.
                            </p>
                            <p className="text-white text-lg leading-relaxed">
                                Quando não estou codando, você pode me encontrar explorando novas tecnologias, contribuindo para projetos open-source ou curtindo um bom jogo.
                            </p>
                        </div>
                        
                        <div className="mt-8 flex flex-wrap gap-4">
                            <span className="px-4 py-2 bg-[#f4b315]/10 text-[#f4b315] rounded-full text-sm font-medium border border-[#f4b315]/20">HTML5</span>
                            <span className="px-4 py-2 bg-[#f4b315]/10 text-[#f4b315] rounded-full text-sm font-medium border border-[#f4b315]/20">CSS3</span>
                            <span className="px-4 py-2 bg-[#f4b315]/10 text-[#f4b315] rounded-full text-sm font-medium border border-[#f4b315]/20">React</span>
                            <span className="px-4 py-2 bg-[#f4b315]/10 text-[#f4b315] rounded-full text-sm font-medium border border-[#f4b315]/20">Node.js</span>
                            <span className="px-4 py-2 bg-[#f4b315]/10 text-[#f4b315] rounded-full text-sm font-medium border border-[#f4b315]/20">TypeScript</span>
                            <span className="px-4 py-2 bg-[#f4b315]/10 text-[#f4b315] rounded-full text-sm font-medium border border-[#f4b315]/20">Tailwind CSS</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}