import React from "react";
import '../../components/Projetos/Projetos.css'
import SVG from '../../images/project.svg'

function Projetos() {
    return(

    <div className="principal-project">
        <h1>Projetos</h1>
        <h3>Empresas que acreditam no nosso trabalho</h3>
       <div className="projeto-container">
           <div className="project-svg">
               <img src={SVG} alt='projetos'/>
           </div>
            <div className="container">
                <div className="grid-hover"></div>
                <div className="grid-hover"></div>
                <div className="grid-hover"></div>
                <div className="grid-hover"></div>
                <div className="grid-hover"></div>
                <div className="grid-hover"></div>
            </div>
        </div>
        <button className="project-btn">FAZER ORÇAMENTO</button>
    </div>
    )
}

export default Projetos