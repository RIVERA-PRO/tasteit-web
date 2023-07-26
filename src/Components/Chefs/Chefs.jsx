import React, { useState, useEffect } from 'react'
import './Chefs.css'
import imgChef from '../../img/chef-1.jpg'
import imgChef2 from '../../img/chef-2.jpg'
import imgChef3 from '../../img/chef-3.jpg'
import imgChef4 from '../../img/chef-4.jpg'
export default function Chefs() {
    const [scrolled, setScrolled] = useState(false);

    // Cambio de color en navbar al hacer scroll
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 3000) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div className='ChefsContain'>

            <h2>Nuestro maestro chef</h2>

            <div className={scrolled ? "cardsChefs scrolledCard " : "cardsChefs"}>

                <div className='cardChef'>
                    <img src={imgChef} alt="chef" />
                    <div className='cardTexts'>
                        <h5> juan gustavo</h5>
                        <span>CEO, cofundador</span>
                        <p>Soy un adicto al trabajo ambicioso, pero aparte de eso, una persona bastante simple.</p>
                    </div>

                </div>

                <div className='cardChef'>
                    <img src={imgChef2} alt="chef" />
                    <div className='cardTexts'>
                        <h5>Michelle fraulen </h5>
                        <span>Jefe de cocina</span>
                        <p>Soy un adicto al trabajo ambicioso, pero aparte de eso, una persona bastante simple.</p>

                    </div>

                </div>

                <div className='cardChef'>
                    <img src={imgChef3} alt="chef" />
                    <div className='cardTexts'>
                        <h5>Alfredo smith </h5>
                        <span>Cocinero</span>
                        <p>Soy un adicto al trabajo ambicioso, pero aparte de eso, una persona bastante simple.</p>

                    </div>

                </div>

                <div className='cardChef'>
                    <img src={imgChef4} alt="chef" />
                    <div className='cardTexts'>
                        <h5>Antonio Santibáñez </h5>
                        <span>Cocinero</span>
                        <p>Soy un adicto al trabajo ambicioso, pero aparte de eso, una persona bastante simple.</p>
                    </div>


                </div>



            </div>

        </div>
    )
}
