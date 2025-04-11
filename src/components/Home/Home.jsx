export default function Home() {
    return (
        <div className="flex justify-center items-center flex-col px-4 py-22">
            <div className="w-full flex flex-col items-center justify-center">
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-end">
                    <div className="flex flex-col">
                        <p className="text-2xl md:text-3xl lg:text-4xl font-[JosefinSans] font-light">Eu sou:</p>
                        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[120px] font-[Mulish] font-black text-white leading-tight">
                            VINÍCIUS
                        </h1>
                    </div>
                    <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[120px] font-[Mulish] font-extrabold text-white leading-tight">
                        LIMA
                    </h1>
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