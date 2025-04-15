import { motion } from 'framer-motion';

export default function GalleryHeader({ activeColor, scrollProgress, isMobile }) {
  return (
    <motion.div 
      className="relative z-10 h-screen flex flex-col items-center justify-center px-4"
      style={{ y: scrollProgress * -50 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <div className='flex flex-col items-center gap-2 mb-12'>
          <motion.span 
            className="text-transparent bg-clip-text font-[1000] text-6xl md:text-8xl lg:text-9xl"
            style={{ 
              backgroundImage: `linear-gradient(45deg, ${activeColor}, #ffffff)`,
              textShadow: `0 0 20px ${activeColor}80`
            }}
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            MORUSU
          </motion.span>
          <motion.span 
            className="text-white font-[JosefinSans] text-2xl md:text-4xl font-[300] tracking-[0.5em]"
            style={{ color: activeColor }}
          >
            CREATIVE
          </motion.span>
        </div>

        <motion.p
          className="text-[#aaa] text-lg md:text-xl max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Onde a arte digital ganha vida através de cores, formas e conceitos inovadores.
        </motion.p>

        {!isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="animate-bounce flex items-center justify-center"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke={activeColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}