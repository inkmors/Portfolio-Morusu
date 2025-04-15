import { motion } from 'framer-motion';

export default function ArtworkModal({ selectedArtwork, setSelectedArtwork, activeColor, cursorPos, isMobile }) {
  if (!selectedArtwork) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
    >
      <motion.div 
        className="absolute inset-0 bg-black/90 backdrop-blur-lg"
        onClick={() => setSelectedArtwork(null)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ 
          scale: 1, 
          opacity: 1,
          boxShadow: `0 25px 50px -12px ${activeColor}30`
        }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="relative max-w-6xl w-full max-h-[90vh] lg:max-h-[80vh] bg-gradient-to-br from-[#1D1D1D] to-[#0a0a0a] rounded-3xl overflow-y-auto border border-white/10 z-10"
        style={{
          borderColor: `${activeColor}30`,
          transform: isMobile ? 'none' : `
            rotateX(${(cursorPos.y - window.innerHeight / 2) / 30}deg)
            rotateY(${-(cursorPos.x - window.innerWidth / 2) / 30}deg)
          `
        }}
      >
        <button 
          onClick={() => setSelectedArtwork(null)}
          className="absolute top-4 right-4 z-10 text-white hover:text-[#fff] transition-colors bg-black/50 rounded-full p-2 backdrop-blur-sm"
          style={{ border: `1px solid ${activeColor}50` }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="h-64 sm:h-80 lg:h-full relative overflow-hidden">
            <motion.img 
              src={selectedArtwork.image} 
              alt={selectedArtwork.title}
              className="w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            />
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{ 
                background: `linear-gradient(to top, ${activeColor}20, transparent 60%)`
              }}
            />
          </div>
          
          <motion.div 
            className="p-6 lg:p-12 flex flex-col"
            initial={{ x: isMobile ? 0 : 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h2 
              className="text-2xl lg:text-4xl font-bold text-white mb-4"
              style={{ textShadow: `0 0 10px ${activeColor}80` }}
            >
              {selectedArtwork.title}
            </h2>
            
            <div className="flex flex-wrap gap-3 items-center text-sm mb-6">
              <span className="px-3 py-1 rounded-full text-white" style={{ backgroundColor: activeColor }}>
                {selectedArtwork.category}
              </span>
              <span className="text-[#aaa]">{selectedArtwork.year}</span>
            </div>
            
            {selectedArtwork.description && (
              <p className="text-white mb-6 text-base leading-relaxed">
                {selectedArtwork.description}
              </p>
            )}
            
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedArtwork.tags.map(tag => (
                <motion.span 
                  key={tag}
                  whileHover={{ scale: isMobile ? 1 : 1.1 }}
                  className="px-3 py-1 rounded-full text-xs sm:text-sm backdrop-blur-sm"
                  style={{ 
                    backgroundColor: `${activeColor}20`,
                    border: `1px solid ${activeColor}50`,
                    color: activeColor
                  }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
            
            <div className="pt-4 border-t border-white/10">
              <h3 
                className="text-xs sm:text-sm uppercase tracking-wider mb-3 font-bold"
                style={{ color: activeColor }}
              >
                Softwares | Ferramentas
              </h3>
              <div className="flex flex-wrap gap-2">
                {selectedArtwork.softwares.map(tag => (
                  <motion.span 
                    key={tag}
                    whileHover={{ scale: isMobile ? 1 : 1.1 }}
                    className="px-3 py-1 rounded-full text-xs sm:text-sm backdrop-blur-sm"
                    style={{ 
                      backgroundColor: `${activeColor}20`,
                      border: `1px solid ${activeColor}50`,
                      color: activeColor
                    }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}