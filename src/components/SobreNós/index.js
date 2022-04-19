import React from "react";
import '../../components/SobreNós/About.css'

function About() {
    return(
    <div className="about-container">
            <h1>Sobre Nós</h1>
            <h3>Conheça mais nosso universo</h3>
        <section className="zindex-grid">
            <div className="quadrado1">
                <h1 className="h1-about">PORQUÊ FAZEMOS</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non ante vel elit aliquam interdum sed suscipit odio. 
                Phasellus in porta est. Suspendisse potenti. Etiam libero purus, efficitur a porta in, ultricies eget magna.</p>
            </div>
            <div className="quadrado4">
                <h1 className="h1-about">PARA QUEM FAZEMOS</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non ante vel elit aliquam interdum sed suscipit odio. 
                Phasellus in porta est. Suspendisse potenti. Etiam libero purus, efficitur a porta in, ultricies eget magna.</p>
            </div>
            <div className="quadrado5">
                <h1 className="h1-about">PARA QUEM FAZEMOS</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non ante vel elit aliquam interdum sed suscipit odio. 
                Phasellus in porta est. Suspendisse potenti. Etiam libero purus, efficitur a porta in, ultricies eget magna.</p>
            </div>
        </section>
    </div>

    )
}

export default About