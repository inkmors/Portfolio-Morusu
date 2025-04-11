export default function Skills(){
    return (
        <div className="bg-[#fff] flex flex-col items-center justify-center w-full mt-[2.5rem] mb-[8rem] box-border">
            <section className="w-[95%] mt-[4rem]">
                <div className="flex items-center justify-center flex-col mb-[4rem]">
                    <h2 className="text-[22px] font-[JosefinSans]">HABILIDADES</h2>
                    <h1 className="font-[Mulish] font-[900] text-[25px] text-white">DESENVOLVIMENTO</h1>
                    <h2 className="text-[22px] font-[JosefinSans] tracking-[10px]">FULL-STACK</h2>
                </div>

                <div className="flex justify-center flex-wrap items-center gap-[10rem]" data-aos="zoom-in">
                    <div className="flex w-[15rem] h-[25rem] bg-[#6C6C6A]">
                        <img width="70px" src="assets/icons8-web-design-64.png" alt=""/>
        
                        <h3>Web Designer</h3>
        
                        <p>Voltado para projetar e criar elementos visuais para websites. Isso inclui o layout, a aparência e a usabilidade de uma página na internet.</p>
        
                        <a href="https://github.com/inkmors"><button className="btn-card">Portfolio</button></a>
                    </div>
    
                    <div className="flex w-[15rem] h-[25rem] bg-[#6C6C6A]" data-aos="zoom-in">
                            
                        <img width="70px" src="assets/icons8-código-64.png" alt=""/>
            
                        <h3>Softwares</h3>
            
                        <p>Voltado na criação de sistemas, manuntenção dos mesmos ou inovações e criação de APIs. A famosa parte do sistema que funciona “nos bastidores” e não é visível para os usuários finais.</p>
            
                        <a href="https://github.com/inkmors"><button className="">Portfolio</button></a>
                    </div>
    
                    <div className="flex w-[15rem] h-[25rem] bg-[#6C6C6A]   " data-aos="zoom-in">
                        <img width="70px" src="assets/icons8-joystick-96 (1).png" alt=""/>
        
                        <h3>Game Developer</h3>
        
                        <p>Voltado na produção de jogos, com domínio nas linguagens utilizadas para esses fins, além de definir como os personagens se movimentarão ao longo do jogo e em qual velocidade o jogo rodará, entre outros aspectos.</p>
        
                        <a href="https://github.com/inkmors"><button className="">Portfolio</button></a>
                    </div>
                </div>
            </section>
        </div>
    )
}
