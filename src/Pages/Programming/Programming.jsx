import { useEffect } from "react"

import Home from "../../components/Home/Home"
import SkillsSection from '../../components/CardSkills/CardSkills'
import CardProjects from '../../components/CardProjects/CardProjects'
import Contact from "../../components/Contact/Contact"
import AboutSection from "../../components/About/About"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"

export default function Programming() {
    
    useEffect(() => {
        document.title = "Morusu | Developer";
      }, []);
    
    return(
        <div className="w-full justify-center items-center flex-col bg">
            <video className="absolute z-[-1] opacity-30 w-full h-full object-cover" src="assets/DOWN_Lines_Overlay_Motion_Background_Effect.mp4" autoPlay loop muted></video>
            <Header/>
            <Home/>
            <AboutSection/>
            <SkillsSection />
            <CardProjects />
            <Contact />
            <Footer/>
        </div>
    )
}