import { motion } from 'framer-motion';

export default function ArtworkCard({ artwork, onClick, activeColor }) {
  return (
    <motion.div 
      className="group relative overflow-hidden rounded-3xl cursor-pointer"
      onClick={onClick}
      whileHover={{ 
        scale: 1.05,
        boxShadow: `0 20px 25px -5px ${artwork.accentColor}30, 0 10px 10px -5px ${artwork.accentColor}10`
      }}
      whileTap={{ scale: 0.98 }}
      style={{
        border: `1px solid ${artwork.accentColor}30`,
        backgroundColor: `${artwork.accentColor}05`
      }}
    >
      <div className="aspect-[4/5] overflow-hidden relative">
        <motion.img 
          src={artwork.image} 
          alt={artwork.title}
          className="w-full h-full object-cover"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6"
          style={{ 
            background: `linear-gradient(to top, ${artwork.accentColor}30, transparent 70%)`,
            backdropFilter: 'blur(4px)'
          }}
        >
          <motion.h3
            initial={{ y: 20 }}
            whileHover={{ y: 0 }}
            className="text-white text-2xl font-bold mb-2"
          >
            {artwork.title}
          </motion.h3>
          <motion.p
            initial={{ y: 20 }}
            whileHover={{ y: 0 }}
            className="text-white"
          >
            {artwork.category}
          </motion.p>
        </div>
      </div>
      
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
        <div 
          className="absolute top-0 left-0 w-32 h-32 rounded-full mix-blend-soft-light filter blur-3xl -translate-x-1/4 -translate-y-1/4"
          style={{ backgroundColor: artwork.accentColor }}
        />
        <div 
          className="absolute bottom-0 right-0 w-32 h-32 rounded-full mix-blend-soft-light filter blur-3xl translate-x-1/4 translate-y-1/4"
          style={{ backgroundColor: artwork.accentColor }}
        />
      </div>
    </motion.div>
  );
}