import CardProjects from "../CardProjects/CardProjects"

export default function Works(){
    return (
        <div className="flex flex-col items-center justify-center w-full mb-[8rem] box-border">
            
            <section className="w-full m-[4rem] items-center box-border">
                <div className="flex w-full items-center justify-between pr-[5rem] pl-[5rem] mb-[4rem] flex-wrap box-border">

                    <div className="flex items-start flex-col">
                        <p className="text-[28px]">Portfólio</p>
                        <h1 className="font-[Mulish] font-[900] text-[25px] text-white">PROJETOS SELECIONADOS</h1>
                        <h2 className="text-[22px]">2024 - 2025</h2>
                    </div>

                    <div>
                        <button className="text-[20px] font-[JosefinSans] font-[300] text-[#1D1D1D] bg-white hover:bg-[#B6B6B4] hover:text-white p-[1rem] rounded-[4px] cursor-pointer mt-[2rem]">PROJETOS</button>
                    </div>
                </div>

                <div className="w-full">
                    <CardProjects name="MorusuFlix" img="assets/landingpages.png" alt="" description="askdljalksjdalksjdlkasjdkaljsdklajsdlkasjdajsdlkajsdklajsdajsdlkajskldajskldja"/>
                </div>

                {/* <div className="w-full flex flex-col flex-wrap justify-center items-start gap-12 p-[8rem] box-border">
                    <CardProjects name="MorusuFlix" img="assets/landingpages.png" alt="" description="askdljalksjdalksjdlkasjdkaljsdklajsdlkasjdajsdlkajsdklajsdajsdlkajskldajskldja"/>
                    <CardProjects name="Morusu Links" img="assets/landingpages.png" alt=""/>
                    <CardProjects name="CPF Validator" img="assets/landingpages.png" alt=""/>
                    <CardProjects name="CPF Validator" img="assets/landingpages.png" alt=""/>
                </div> */}
            </section>
        </div>
    )
}
