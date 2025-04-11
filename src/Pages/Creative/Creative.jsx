import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function Creative() {
  const artworks = [
    {
      id: 1,
      title: "Cosmic Harmony",
      category: "Ilustração Digital",
      year: "2023",
      description: "Exploração de formas orgânicas no espaço sideral com paleta vibrante.",
      image: "/assets/artworks/cosmic-harmony.jpg",
      tags: ["Digital Art", "Space", "Abstract"],
      accentColor: "#8A2BE2" // Roxo vibrante
    },
    {
      id: 2,
      title: "Urban Fragments",
      category: "Design Gráfico",
      year: "2022",
      description: "Colagem digital inspirada na arquitetura urbana contemporânea.",
      image: "/assets/artworks/urban-fragments.jpg",
      tags: ["Collage", "Typography", "City"],
      accentColor: "#00CED1" // Turquesa
    },
    {
      id: 3,
      title: "CyberGirl",
      category: "Ilustração Digital",
      year: "2024",
      description: "Retrato estilizado com elementos de cultura pop e neon.",
      image: "/assets/artworks/CyberGirl.png",
      tags: ["Vector", "Portrait", "Pop Art"],
      accentColor: "#FF1493" // Rosa neon
    },
    {
      id: 4,
      title: "Organic Forms",
      category: "Esboço",
      year: "2021",
      description: "Estudo de formas naturais com técnicas mistas em papel.",
      image: "/assets/artworks/organic-forms.jpg",
      tags: ["Sketch", "Nature", "Ink"],
      accentColor: "#32CD32" // Verde limão
    },
    {
      id: 5,
      title: "Miki Miyazaki",
      category: "Ilustração Digital",
      year: "2024",
      description: "Miyazaki Miki, is my new OC, with a futuristic cyberpunk look, another 1 from the drop of a project that will soon be 4 you!! THX <3",
      image: "/assets/artworks/Miki_Miyazaki2.png",
      tags: ["Cyberpunk", "Surreal", "Fantasy", "Digital", "Mangá"],
      accentColor: "#9370DB" // Lavanda
    },
    {
      id: 6,
      title: "Minimal Geometry",
      category: "Design Gráfico",
      year: "2022",
      description: "Exploração minimalista de formas geométricas e cores.",
      image: "/assets/artworks/minimal-geometry.jpg",
      tags: ["Minimal", "Geometry", "Poster"],
      accentColor: "#FF6347" // Tomate
    },
    {
        id: 7,
        title: "Minimal Geometry",
        category: "Design Gráfico",
        year: "2022",
        description: "Exploração minimalista de formas geométricas e cores.",
        image: "/assets/artworks/minimal-geometry.jpg",
        tags: ["Minimal", "Geometry", "Poster"],
        accentColor: "#FF6347" // Tomate
      },
      {
        id: 8,
        title: "Minimal Geometry",
        category: "Design Gráfico",
        year: "2022",
        description: "Exploração minimalista de formas geométricas e cores.",
        image: "/assets/artworks/minimal-geometry.jpg",
        tags: ["Minimal", "Geometry", "Poster"],
        accentColor: "#FF6347" // Tomate
      },
      {
        id: 9,
        title: "Minimal Geometry",
        category: "Design Gráfico",
        year: "2022",
        description: "Exploração minimalista de formas geométricas e cores.",
        image: "/assets/artworks/minimal-geometry.jpg",
        tags: ["Minimal", "Geometry", "Poster"],
        accentColor: "#FF6347" // Tomate
      },
      {
        id: 10,
        title: "Minimal Geometry",
        category: "Design Gráfico",
        year: "2022",
        description: "Exploração minimalista de formas geométricas e cores.",
        image: "/assets/artworks/minimal-geometry.jpg",
        tags: ["Minimal", "Geometry", "Poster"],
        accentColor: "#FF6347" // Tomate
      },
      {
        id: 11,
        title: "Cosmic Harmony",
        category: "Ilustração Digital",
        year: "2023",
        description: "Exploração de formas orgânicas no espaço sideral com paleta vibrante.",
        image: "/assets/artworks/cosmic-harmony.jpg",
        tags: ["Digital Art", "Space", "Abstract"],
        accentColor: "#8A2BE2" // Roxo vibrante
      },
      {
        id: 12,
        title: "Urban Fragments",
        category: "Design Gráfico",
        year: "2022",
        description: "Colagem digital inspirada na arquitetura urbana contemporânea.",
        image: "/assets/artworks/urban-fragments.jpg",
        tags: ["Collage", "Typography", "City"],
        accentColor: "#00CED1" // Turquesa
      },
      {
        id: 13,
        title: "CyberGirl",
        category: "Ilustração Digital",
        year: "2024",
        description: "Retrato estilizado com elementos de cultura pop e neon.",
        image: "/assets/artworks/CyberGirl.png",
        tags: ["Vector", "Portrait", "Pop Art"],
        accentColor: "#FF1493" // Rosa neon
      },
      {
        id: 14,
        title: "Organic Forms",
        category: "Esboço",
        year: "2021",
        description: "Estudo de formas naturais com técnicas mistas em papel.",
        image: "/assets/artworks/organic-forms.jpg",
        tags: ["Sketch", "Nature", "Ink"],
        accentColor: "#32CD32" // Verde limão
      },
      {
        id: 15,
        title: "Miki Miyazaki",
        category: "Ilustração Digital",
        year: "2024",
        description: "Miyazaki Miki, is my new OC, with a futuristic cyberpunk look, another 1 from the drop of a project that will soon be 4 you!! THX <3",
        image: "/assets/artworks/Miki_Miyazaki2.png",
        tags: ["Cyberpunk", "Surreal", "Fantasy", "Digital", "Mangá"],
        accentColor: "#9370DB" // Lavanda
      },
      {
        id: 16,
        title: "Minimal Geometry",
        category: "Design Gráfico",
        year: "2022",
        description: "Exploração minimalista de formas geométricas e cores.",
        image: "/assets/artworks/minimal-geometry.jpg",
        tags: ["Minimal", "Geometry", "Poster"],
        accentColor: "#FF6347" // Tomate
      },
      {
          id: 17,
          title: "Minimal Geometry",
          category: "Design Gráfico",
          year: "2022",
          description: "Exploração minimalista de formas geométricas e cores.",
          image: "/assets/artworks/minimal-geometry.jpg",
          tags: ["Minimal", "Geometry", "Poster"],
          accentColor: "#FF6347" // Tomate
        },
        {
          id: 18,
          title: "Minimal Geometry",
          category: "Design Gráfico",
          year: "2022",
          description: "Exploração minimalista de formas geométricas e cores.",
          image: "/assets/artworks/minimal-geometry.jpg",
          tags: ["Minimal", "Geometry", "Poster"],
          accentColor: "#FF6347" // Tomate
        },
        {
          id: 19,
          title: "Minimal Geometry",
          category: "Design Gráfico",
          year: "2022",
          description: "Exploração minimalista de formas geométricas e cores.",
          image: "/assets/artworks/minimal-geometry.jpg",
          tags: ["Minimal", "Geometry", "Poster"],
          accentColor: "#FF6347" // Tomate
        },
        {
          id: 20,
          title: "Minimal Geometry",
          category: "Design Gráfico",
          year: "2022",
          description: "Exploração minimalista de formas geométricas e cores.",
          image: "/assets/artworks/minimal-geometry.jpg",
          tags: ["Minimal", "Geometry", "Poster"],
          accentColor: "#FF6347" // Tomate
        },
  ];

  useEffect(() => {
    document.title = "Morusu Creative | Artworks";
  }, []);

  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [activeFilter, setActiveFilter] = useState("Tudo");
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeColor, setActiveColor] = useState("#8A2BE2");
  const [isMobile, setIsMobile] = useState(false);
  const galleryRef = useRef(null);
  const [filterKey, setFilterKey] = useState(0);
  
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    }

    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)

    return () => {
      window.removeEventListener('resize', checkIfMobile)
    }
  }, [])

  const getFilteredArtworks = () => {
    if (activeFilter === "Tudo") return artworks;
    return artworks.filter(artwork => artwork.category === activeFilter);
  };

  useEffect(() => {
    setFilterKey(prevKey => prevKey + 1);
  }, [activeFilter]);

  const categories = ["Tudo", ...new Set(artworks.map(artwork => artwork.category))];

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    
    galleryRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  const particlesOptions = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: activeColor
      },
      shape: {
        type: ["circle", "triangle", "star"],
        stroke: {
          width: 0,
          color: "#000000"
        }
      },
      opacity: {
        value: 0.7,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 4,
        random: true,
        anim: {
          enable: true,
          speed: 4,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: activeColor,
        opacity: 0.4,
        width: 1.5
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: true,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      }
    }
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
        if (!isMobile) {
            setCursorPos({ x: e.clientX, y: e.clientY });
          }
    };

    const handleScroll = () => {
      if (galleryRef.current) {
        const scrollY = window.scrollY;
        const galleryTop = galleryRef.current.offsetTop;
        const galleryHeight = galleryRef.current.offsetHeight;
        const progress = (scrollY - galleryTop) / galleryHeight;
        setScrollProgress(Math.min(Math.max(progress, 0), 1));
      }
    };

    if (!isMobile) {
        window.addEventListener('mousemove', handleMouseMove);
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      if (!isMobile) {
          window.removeEventListener('mousemove', handleMouseMove);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile]);

  useEffect(() => {
    if (selectedArtwork) {
      setActiveColor(selectedArtwork.accentColor);
    }
  }, [selectedArtwork]);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#111] overflow-hidden">

      <div className="absolute inset-0 z-0 opacity-30">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesOptions}
        />
      </div>

      {!isMobile && (
        <motion.div
          className="fixed w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-difference"
          style={{ backgroundColor: activeColor }}
          animate={{
            x: cursorPos.x - 16,
            y: cursorPos.y - 16,
            scale: selectedArtwork ? 2.5 : 1.5,
            opacity: selectedArtwork ? 0.8 : 0.5
          }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
        />
      )}

      <motion.div
        className="fixed w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{ backgroundColor: activeColor }}
        animate={{
          x: cursorPos.x - 16,
          y: cursorPos.y - 16,
          scale: selectedArtwork ? 2.5 : 1.5,
          opacity: selectedArtwork ? 0.8 : 0.5
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
      />

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
            Uma imersão visual onde arte e tecnologia se fundem em experiências únicas
          </motion.p>

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
        </motion.div>
      </motion.div>

      <div ref={galleryRef} className="relative z-10 py-32 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">

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

          <motion.div 
            key={`gallery-${filterKey}`}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
          >
            {getFilteredArtworks().map((artwork) => (
              <motion.div
                key={artwork.id}
                variants={{
                  hidden: { y: 80, opacity: 0, rotate: -5 },
                  visible: { 
                    y: 0, 
                    opacity: 1,
                    rotate: 0,
                    transition: { 
                      type: "spring", 
                      damping: 15,
                      stiffness: 200
                    }
                  }
                }}
                whileHover={{ 
                  y: -20,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <ArtworkCard 
                  artwork={artwork}
                  onClick={() => {
                    setSelectedArtwork(artwork);
                    setActiveColor(artwork.accentColor);
                  }}
                  activeColor={activeColor}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {selectedArtwork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <motion.div 
              className="absolute inset-0 bg-black/90 backdrop-blur-lg"
              onClick={() => setSelectedArtwork(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0, rotateX: 15 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                rotateX: 0,
                boxShadow: `0 25px 50px -12px ${activeColor}30`
              }}
              exit={{ scale: 0.9, opacity: 0, rotateX: -15 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-6xl w-full bg-gradient-to-br from-[#1D1D1D] to-[#0a0a0a] rounded-3xl overflow-hidden border border-white/10 z-10"
              style={{
                perspective: 1000,
                transformStyle: 'preserve-3d',
                borderColor: `${activeColor}30`,
                transform: `
                  rotateX(${(cursorPos.y - window.innerHeight / 2) / 30}deg)
                  rotateY(${-(cursorPos.x - window.innerWidth / 2) / 30}deg)
                `
              }}
            >
              <button 
                onClick={() => setSelectedArtwork(null)}
                className="absolute top-6 right-6 z-10 text-white hover:text-[#fff] transition-colors bg-black/50 rounded-full p-2 backdrop-blur-sm"
                style={{ border: `1px solid ${activeColor}50` }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                <div className="h-96 lg:h-full relative overflow-hidden">
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
                  className="p-8 lg:p-12 flex flex-col"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <h2 
                    className="text-4xl font-bold text-white mb-4"
                    style={{ textShadow: `0 0 10px ${activeColor}80` }}
                  >
                    {selectedArtwork.title}
                  </h2>
                  
                  <div className="flex gap-6 items-center text-sm mb-8">
                    <span className="px-3 py-1 rounded-full text-white" style={{ backgroundColor: activeColor }}>
                      {selectedArtwork.category}
                    </span>
                    <span className="text-[#aaa]">{selectedArtwork.year}</span>
                  </div>
                  
                  <p className="text-white mb-8 text-lg leading-relaxed">
                    {selectedArtwork.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-12">
                    {selectedArtwork.tags.map(tag => (
                      <motion.span 
                        key={tag}
                        whileHover={{ scale: 1.1 }}
                        className="px-4 py-2 rounded-full text-sm backdrop-blur-sm"
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
                  
                  <div className="mt-auto pt-6 border-t border-white/10">
                    <h3 
                      className="text-sm uppercase tracking-wider mb-4 font-bold"
                      style={{ color: activeColor }}
                    >
                      PROCESSO CRIATIVO
                    </h3>
                    <p className="text-white">
                    Esta obra foi criada a partir da fusão de {selectedArtwork.tags[0]} e {selectedArtwork.tags[1]}, explorando novas possibilidades dentro do universo da arte digital.
                    </p>
                    
                    <div className="mt-6 flex gap-4">
                      <button className="px-6 py-2 rounded-full text-white font-medium" style={{ backgroundColor: activeColor }}>
                        Ver Projeto
                      </button>
                      <button className="px-6 py-2 rounded-full font-medium" style={{ 
                        color: activeColor,
                        border: `1px solid ${activeColor}`,
                        backgroundColor: `${activeColor}10`
                      }}>
                        Detalhes Técnicos
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 h-2 w-64 bg-white/10 rounded-full z-20 overflow-hidden"
        initial={{ width: 0 }}
        animate={{ width: scrollProgress * 256 }}
        transition={{ type: "spring", damping: 20 }}
      >
        <div className="h-full bg-${} rounded-full"
        style={{ backgroundColor: activeColor }} />
      </motion.div>

      <motion.div
        className="fixed bottom-4 right-4 z-20 text-[#aaa] text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span style={{ color: activeColor }}>✧</span> MORUSU CREATIVE
      </motion.div>
    </div>
  );
}

function ArtworkCard({ artwork, onClick, activeColor }) {
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