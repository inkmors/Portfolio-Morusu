import { useEffect, useState } from "react"
import { FiChevronsDown } from "react-icons/fi"
import { BsMouse } from "react-icons/bs"

export default function Hero() {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        setIsMobile(window.innerWidth <= 768)
    }, []);

    return (
        <div className="flex justify-center items-center flex-col px-4 py-22">
            <div className="w-full flex flex-col items-center justify-center">
                <div className="w-full flex flex-col gap-2 sm:gap-3 md:gap-4 items-center justify-center px-4">
                    <div className="flex flex-nowrap items-end whitespace-nowrap">
                        <div className="flex flex-col">
                            <p className="text-lg sm:text-xl md:text-2xl xl:text-3xl font-[JosefinSans] font-light mb-1">
                            Eu sou:
                            </p>

                            <div className="flex items-end gap-x-2 md:gap-x-3 lg:gap-x-4">
                            
                                <h1 className="text-4xl min-[375px]:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-[Mulish] font-black text-white leading-[0.85]">
                                    VINÍCIUS
                                </h1>

                                <h1 className="text-4xl min-[375px]:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-[Mulish] font-extrabold text-white leading-[0.85]">
                                    LIMA
                                </h1>
                            </div>
                        </div>
                    </div>

                    <p className="text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-[JosefinSans] font-light text-white 
                        tracking-[0.3em] sm:tracking-[0.5em] md:tracking-[0.7em] mt-2 sm:mt-3 md:mt-4">
                        DESENVOLVEDOR FULLSTACK
                    </p>
                </div>
                
                <a target="_blank" href="https://drive.google.com/file/d/1XCEYVKZedLucDpcf-6pXfBuT3p9xABRC/view?usp=sharing" className="text-lg md:text-xl font-[JosefinSans] font-light text-[#1D1D1D] bg-white hover:bg-[#B6B6B4] hover:text-white px-8 py-3 md:px-10 md:py-4 rounded-sm cursor-pointer mt-12 md:mt-20 transition-colors duration-300">
                    DOWNLOAD CV
                </a>
            </div>
            {/* <div className="mt-30 mb-10 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-[white] rounded-full flex justify-center">
                    <div className="w-1 h-2 bg-white rounded-full mt-2"></div>
                </div>
            </div> */}
            <div className="text-white mt-30 mb-10 transform -translate-x-1/2 animate-bounce text-4xl">
                {isMobile ? <FiChevronsDown /> : <BsMouse />}
            </div>
        </div>
    )
}