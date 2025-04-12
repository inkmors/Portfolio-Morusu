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
        <div className="w-full justify-center items-center flex-col bg">
            <video className="absolute z-[-1] opacity-30 w-full h-full object-cover" src="assets/Soft_White_Gradient_Moving_Background.mp4" autoPlay loop muted></video>
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