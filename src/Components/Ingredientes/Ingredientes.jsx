import React, { useState, useEffect } from 'react'
import './Ingredientes.css'

import { Link as Anchor, useNavigate, useLocation } from "react-router-dom";
import img1 from '../../img/chef-4.jpg'
import img2 from '../../img/bg_4.jpg'

export default function Ingredientes() {
    const [scrolled, setScrolled] = useState(false);

    // Cambio de color en navbar al hacer scroll
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 3700) {
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
        <div className={scrolled ? "ingredientesContain scrolledIngre " : "ingredientesContain"}>

            <div className='imgs'>
                <img src={img1} alt="img" />
                <img src={img2} alt="img" />
            </div>

            <div className='ingredienteText'>
                <h2>Ingredientes perfectos</h2>
                <p>Lejos, muy lejos, detrás de las montañas de la palabra, lejos de los países Vokalia y Consonantia, viven los textos ciegos. Separados, viven en Bookmarksgrove justo en la costa de Semantics, un gran océano de idiomas.</p>

                <Anchor to={`/`} >Aprender más</Anchor>
            </div>

        </div>
    )
}
