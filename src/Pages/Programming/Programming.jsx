import { useEffect } from "react"

import Hero from "../../components/Hero/Hero"
import SkillsSection from '../../components/CardSkills/CardSkills'
import CardProjects from '../../components/CardProjects/CardProjects'
import Contact from "../../components/Contact/Contact"
import CreativeCTA from "../../components/CreativeCTA/CreativeCTA"
import AboutSection from "../../components/About/About"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"

export default function Programming() {
    
    useEffect(() => {
        document.title = "Morusu | Developer";
      }, []);
    
    return(
        <div className="w-full justify-center items-center flex-col bg relative min-h-screen overflow-hidden">
    <video 
        className="fixed z-[-1] opacity-30 min-w-full min-h-full object-cover top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        src="assets/Soft_White_Gradient_Moving_Background.mp4" 
        autoPlay 
        loop 
        muted
        playsInline
        disablePictureInPicture
        preload="auto"
    ></video>
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