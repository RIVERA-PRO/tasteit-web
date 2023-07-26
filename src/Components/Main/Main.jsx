import React, { useState, useEffect } from 'react'
import './Main.css'
import imgMain from '../../img/main.jpg'
import FormReserva from '../FormReserva/FormReserva'

export default function Main() {

    const [scrolled, setScrolled] = useState(false);

    // Cambio de color en navbar al hacer scroll
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 10) {
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
        <div className={scrolled ? "mainContain scrolledMain " : "mainContain"}>
            <FormReserva />


            <div className='mainText'>
                <h2>Bienvenido a Taste.it</h2>
                <p>En su camino se encontró con una copia. La copia advertía al Pequeño Texto Ciego, que de donde venía habría sido reescrito mil veces y todo lo que quedara de su origen sería la palabra "y" y el Pequeño Texto Ciego debía dar la vuelta y volver a lo suyo, país seguro. Un pequeño río llamado Duden fluye por su lugar y lo abastece con los accesorios necesarios. Es un país paradisíaco, en el que te vuelan a la boca trozos asados ​​de frases.</p>
            </div>

        </div>
    )
}
