import React from "react";
import '../Serviços/Services.css'

function Services() {
    return(
        <div className="services-container">
            <div className="services-content">
                <h1 className="title-animation">Nossos Serviços</h1>
                <h3 className="title-animation">Seu novo jeito de criar</h3>
                <div className="services-description">
                    <h1 className="hover-text">DESIGN DE PRODUTOS DIGITAIS</h1>
                    <ul>
                        <li>UX/UI</li>
                        <li>PROTOTIPAÇÃO</li>
                        <li>TESTE DE USABILIDADE</li>
                        <li>TESTES DE ACESSIBILIDADE</li>
                    </ul>
                    <h1 className="hover-text">TECNOLOGIA</h1>
                    <ul>
                        <li>Desenvolvimento Web - Front end e Back end </li>
                        <li>Aplicativos Móveis</li>
                    </ul>
                    <button href="/contatos" className="service-btn">CONTATO</button>
                </div>
            </div>
        </div>
    )
}

export default Services