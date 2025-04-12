export default function Home() {
    return (
        <div className="flex justify-center items-center flex-col px-4 py-22">
            <div className="w-full flex flex-col items-center justify-center">
            <div className="w-full flex flex-col gap-2 sm:gap-3 md:gap-4 items-center justify-center px-4">
                <div className="flex flex-col md:flex-row gap-2 md:gap-4 lg:gap-6 items-end">
                    <div className="flex flex-col">
                        <p className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-[JosefinSans] font-light">Eu sou:</p>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[120px] font-[Mulish] font-black text-white leading-[1.1]">
                            VINÍCIUS
                        </h1>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[120px] font-[Mulish] font-extrabold text-white leading-[1.1]">
                        LIMA
                    </h1>
                </div>
                
                <p className="text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-[JosefinSans] font-light text-white tracking-[0.5em] md:tracking-[0.7em] mt-2">
                    DESENVOLVEDOR FULLSTACK
                </p>
                </div>
                
                <button className="text-lg md:text-xl font-[JosefinSans] font-light text-[#1D1D1D] bg-white hover:bg-[#6C6C6A] hover:text-white px-8 py-3 md:px-10 md:py-4 rounded-sm cursor-pointer mt-12 md:mt-20 transition-colors duration-300">
                    DOWNLOAD CV
                </button>
            </div>

            <div className="mt-30 mb-10 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                    <div className="w-1 h-2 bg-white rounded-full mt-2"></div>
                </div>
            </div>
        </div>
    )
}