import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import ArtworkModal from '../../components/componentsCreative/ArtworkModal/ArtworkModal';
import ArtworkCard from '../../components/componentsCreative/ArtworkCard/ArtworkCard';
import GalleryHeader from '../../components/componentsCreative/GalleryHeader/GalleryHeader';
import GalleryFilters from '../../components/componentsCreative/GalleryFilters/GalleryFilters';
import { artworks } from '../../components/componentsCreative/ArtworksData/ArtworksData';

export default function Creative() {
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [activeFilter, setActiveFilter] = useState("Tudo");
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeColor, setActiveColor] = useState("#8A2BE2");
  const [isMobile, setIsMobile] = useState(false);
  const galleryRef = useRef(null);
  const [filterKey, setFilterKey] = useState(0);
  
  useEffect(() => {
    document.title = "Morusu Creative | Artworks";
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    }

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    }
  }, []);

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
        <CustomCursor activeColor={activeColor} cursorPos={cursorPos} selectedArtwork={selectedArtwork} />
      )}

      <GalleryHeader 
        activeColor={activeColor} 
        scrollProgress={scrollProgress} 
        isMobile={isMobile}
      />

      <div ref={galleryRef} className="relative z-10 py-32 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <GalleryFilters 
            categories={categories}
            activeFilter={activeFilter}
            activeColor={activeColor}
            handleFilterChange={handleFilterChange}
          />

          <ArtworkGrid 
            artworks={getFilteredArtworks()}
            filterKey={filterKey}
            setSelectedArtwork={setSelectedArtwork}
            setActiveColor={setActiveColor}
            activeColor={activeColor}
          />
        </div>
      </div>

      <ArtworkModal 
        selectedArtwork={selectedArtwork}
        setSelectedArtwork={setSelectedArtwork}
        activeColor={activeColor}
        cursorPos={cursorPos}
        isMobile={isMobile}
      />

      <ScrollProgressBar scrollProgress={scrollProgress} activeColor={activeColor} />

      <Footer activeColor={activeColor} />
    </div>
  );
}

const CustomCursor = ({ activeColor, cursorPos, selectedArtwork }) => (
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
);

const ArtworkGrid = ({ artworks, filterKey, setSelectedArtwork, setActiveColor, activeColor }) => (
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
    {artworks.map((artwork) => (
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
);

const ScrollProgressBar = ({ scrollProgress, activeColor }) => (
  <motion.div 
    className="fixed bottom-8 left-1/2 transform -translate-x-1/2 h-2 w-64 bg-white/10 rounded-full z-20 overflow-hidden"
    initial={{ width: 0 }}
    animate={{ width: scrollProgress * 256 }}
    transition={{ type: "spring", damping: 20 }}
  >
    <div 
      className="h-full rounded-full"
      style={{ backgroundColor: activeColor }} 
    />
  </motion.div>
);

const Footer = ({ activeColor }) => (
  <motion.div
    className="fixed bottom-4 right-4 z-20 text-[#aaa] text-sm"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 2 }}
  >
    <span style={{ color: activeColor }}>✧</span> MORUSU CREATIVE &copy; <span style={{ color: activeColor }}>{ new Date().getFullYear() }</span> 
  </motion.div>
);