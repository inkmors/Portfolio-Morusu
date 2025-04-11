import { useEffect } from "react";

export default function ErrorPage() {
    useEffect(() => {
      document.title = "Página não encontrada";
    }, []);

    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#0a0a0a] to-[#1D1D1D] px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-[120px] md:text-[180px] font-bold bg-clip-text text-transparent bg-[#fff] mb-4 leading-none">
            404
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Página não encontrada
          </h2>
          
          <p className="text-[#6C6C6A] text-lg mb-8 max-w-md mx-auto">
            Ops! Parece que você se perdeu no espaço digital. A página que você está procurando pode ter sido removida ou não existe mais.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/"
              className="px-8 py-3 bg-[#fff] text-[#1D1D1D] font-bold rounded-lg hover:opacity-90 transition-opacity text-center"
            >
              Voltar para Home
            </a>
          </div>
          
          <div className="mt-16 relative">
            <div className="absolute -left-20 top-1/2 w-16 h-16 bg-[#fff] rounded-full mix-blend-soft-light filter blur-3xl opacity-30"></div>
            <div className="absolute -right-20 top-1/2 w-16 h-16 bg-[#fff] rounded-full mix-blend-soft-light filter blur-3xl opacity-30"></div>
            
            <div className="inline-flex items-center justify-center p-4 border border-white/10 rounded-full bg-white/5 backdrop-blur-lg">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="48" 
                height="48" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="#fff" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="animate-pulse"
              >
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                <line x1="12" y1="9" x2="12" y2="13"></line>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }