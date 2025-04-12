import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex items-center justify-center w-full mb-[6rem] sm:mb-[11rem] box-border">
      <nav className="relative flex w-full mx-4 md:mx-8 lg:mx-[5rem] max-w-[90%] md:max-w-[95rem] items-center flex-wrap justify-between p-4 font-[Mulish] text-[16px] md:text-[18px] h-[6rem]">

        <div className="hidden sm:block relative group">
          <a href="#about" className="hover:text-[#6C6C6A] transition-colors">sobre</a>
          <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#fff] transition-all duration-300 group-hover:w-full"></div>
        </div>
        
        <span className="text-[10px] hidden sm:inline">•</span>

        <div className="hidden sm:block relative group">
          <a href="#skills" className="hover:text-[#6C6C6A] transition-colors">skills</a>
          <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#fff] transition-all duration-300 group-hover:w-full"></div>
        </div>
        
        <span className="text-[10px] hidden sm:inline">•</span>

        <div className="flex flex-col items-center z-20">
          <span className="text-[20px] md:text-[24px] font-[1000] text-white">MORUSU</span>
          <span className="text-[10px] md:text-[12px] font-[JosefinSans] font-[700] text-center tracking-[2px] md:tracking-[4px] text-[#6C6C6A]">
            DEVELOPER
          </span>
        </div>
        
        <span className="text-[10px] hidden sm:inline">•</span>

        <div className="hidden sm:block relative group">
          <a href="#projects" className="hover:text-[#6C6C6A] transition-colors">projetos</a>
          <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#fff] transition-all duration-300 group-hover:w-full"></div>
        </div>
        
        <span className="text-[10px] hidden sm:inline">•</span>

        <div className="hidden sm:block relative group">
          <a href="#contact" className="hover:text-[#6C6C6A] transition-colors">contato</a>
          <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#fff] transition-all duration-300 group-hover:w-full"></div>
        </div>

        <button 
          className="sm:hidden flex flex-col justify-center items-center z-20"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <div className={`w-6 h-0.5 bg-white my-1 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white my-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white my-1 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
        </button>

        {isMenuOpen && (
          <div className="fixed inset-0 bg-[#0a0a0a] bg-opacity-95 z-10 flex flex-col items-center justify-center space-y-8">
            <div className="relative group">
              <a 
                href="#about" 
                className="text-2xl text-white hover:text-[#fff] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                sobre
              </a>
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#fff] transition-all duration-300 group-hover:w-full"></div>
            </div>
            
            <div className="relative group">
              <a 
                href="#skills" 
                className="text-2xl text-white hover:text-[#fff] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                skills
              </a>
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#fff] transition-all duration-300 group-hover:w-full"></div>
            </div>
            
            <div className="relative group">
              <a 
                href="#projects" 
                className="text-2xl text-white hover:text-[#fff] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                projetos
              </a>
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#fff] transition-all duration-300 group-hover:w-full"></div>
            </div>
            
            <div className="relative group">
              <a 
                href="#contact" 
                className="text-2xl text-white hover:text-[#fff] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                contato
              </a>
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#fff] transition-all duration-300 group-hover:w-full"></div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}