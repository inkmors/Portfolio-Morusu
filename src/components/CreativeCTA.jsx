/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function PortfolioLink() {
  const navigate = useNavigate();

  return (
    <section id="creative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative max-w-full mx-auto my-24 px-6 md:px-8 lg:px-10 overflow-hidden isolate w-full"
      >
        <div className="absolute inset-0 rounded-2xl overflow-hidden"
          style={{ 
            backgroundColor: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)"
          }}>
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}
          />
          
          <div className="absolute -top-1/2 -right-1/2 w-full h-[200%] bg-radial-gradient opacity-10 " />
        </div>

        <div className="relative py-16 md:py-20 lg:py-24 px-6 md:px-10 text-center">
          <motion.h3
            whileHover={{ x: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
          >
            Explore Meu <span className="text-gray-400 font-light relative">
              Universo Criativo
              <span className="absolute bottom-1 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
            </span>
          </motion.h3>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Onde a arte digital ganha vida através de cores, formas e conceitos inovadores.
          </p>
          
          <motion.button
            onClick={() => navigate('/creative')}
            whileHover={{ 
              backgroundColor: '#111',
              boxShadow: '0 10px 20px rgba(0,0,0,0.3)'
            }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer inline-flex items-center gap-3 px-8 py-4 text-white text-lg font-medium rounded-full border border-gray-800 transition-all"
            style={{ 
              backgroundColor: "rgb(17, 24, 39)" 
            }}
          >
            Acessar Galeria
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              className="transition-transform duration-300 group-hover:translate-x-1" 
            >
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>
        </div>

        <div className="absolute top-1/4 left-1/6 w-48 h-48 rounded-full border border-white/5 animate-float" />
        <div className="absolute bottom-1/5 right-1/6 w-36 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-45 animate-float-reverse" />
      </motion.div>
    </section>
  );
}