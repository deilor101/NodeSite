import React from "react";
import HeroSection from "../HeroSection";
import Projetos from "../Projetos";
import Services from "../Serviços";
import About from "../SobreNós";

function OnePage() {
    return(
        <>
            <HeroSection/>
            <Services/>
            <Projetos/>
            <About/>
        </>
    )
}

export default OnePage