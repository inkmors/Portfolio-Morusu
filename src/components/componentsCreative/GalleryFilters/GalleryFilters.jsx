import { motion } from 'framer-motion';

export default function GalleryFilters({ categories, activeFilter, activeColor, handleFilterChange }) {
  return (
    <motion.div 
      className="flex flex-wrap justify-center gap-4 mb-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {categories.map((filter) => (
        <motion.button
          key={filter}
          onClick={() => handleFilterChange(filter)}
          className={`px-6 py-3 rounded-full font-medium text-sm md:text-base transition-all ${
            activeFilter === filter
              ? 'text-white shadow-xl'
              : 'text-[#aaa] hover:text-white'
          }`}
          style={{
            backgroundColor: activeFilter === filter ? activeColor : 'rgba(255,255,255,0.05)',
            border: activeFilter === filter ? 'none' : `1px solid ${activeColor}50`
          }}
          whileHover={{ 
            scale: 1.05,
            backgroundColor: activeColor,
            color: '#fff'
          }}
          whileTap={{ scale: 0.95 }}
        >
          {filter}
        </motion.button>
      ))}
    </motion.div>
  );
}