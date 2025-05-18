import { useEffect } from "react"

import Hero from "../../components/Hero"
import SkillsSection from '../../components/CardSkills'
import CardProjects from '../../components/CardProjects'
import Contact from "../../components/Contact"
import CreativeCTA from "../../components/CreativeCTA"
import AboutSection from "../../components/About"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default function Programming() {
    
    useEffect(() => {
        document.title = "Morusu | Developer";
      }, []);
    
    return(
        <div className="w-full justify-center items-center flex-col bg relative min-h-screen overflow-hidden">
            <video
                className="fixed z-[-1] opacity-30 min-w-full min-h-full object-cover top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                disablePictureInPicture
                {...{ 'webkit-playsinline': 'true' }}
                >
                <source src="assets/Soft_White_Gradient_Moving_Background.webm" type="video/webm" />
                <source src="assets/Soft_White_Gradient_Moving_Background.mp4" type="video/mp4" />
                <source src="assets/Soft_White_Gradient_Moving_Background.ogv" type="video/ogg" />

                Seu navegador não suporta vídeos HTML5.
                </video>
            <Header/>
            <Hero/>
            <AboutSection/>
            <SkillsSection />
            <CardProjects />
            <CreativeCTA />
            <Contact />
            <Footer/>
        </div>
    )
}