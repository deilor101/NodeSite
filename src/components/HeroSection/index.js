import React from 'react'
import './HeroSection.css'
import HeroItem from '../../images/heroitem.svg'

function HeroSection() {
    return(
        <>
            <div className='hero-container'>
                <div className='hero-item'>
                <img src={HeroItem} alt='heroitem'/>
                </div>
                <div className='hero-p'>
                    <span>de acordo com as dificuldades e necessidades da sua empresa</span>
                </div>
            </div>
        </>
    )
}

export default HeroSection