import React, { useState, useEffect } from 'react'
import './Footer.css'
import { Link as Anchor, useNavigate, useLocation } from "react-router-dom";
import img1 from '../../img/breakfast-1.jpg'
import img2 from '../../img/breakfast-2.jpg'
import img3 from '../../img/breakfast-3.jpg'
import img4 from '../../img/breakfast-4.jpg'
import img5 from '../../img/breakfast-5.jpg'
import img6 from '../../img/breakfast-6.jpg'
export default function Footer() {

    const [scrolled, setScrolled] = useState(false);

    // Cambio de color en navbar al hacer scroll
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 4600) {
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
        <div className='FooterContain'>

            <div className={scrolled ? "footerText scrolledFooter " : "footerText"}>
                <div className='logo'>
                    <Anchor to={`/`} >Tease. <span>IT</span></Anchor>
                </div>

                <p>Lejos, muy lejos, detrás de las montañas de la palabra, lejos de los países Vokalia y Consonantia, viven los textos ciegos. Separados viven en Bookmarksgrove</p>
                <div class="redes-sociales-footer">

                    <a href="#"><i class='fa fa-instagram'></i></a>
                    <a href="#"> <i class='fa fa-linkedin'></i></a>
                    <a href="#"><i class='fa fa-twitter'></i></a>
                </div>
            </div>

            <div className={scrolled ? "footerText scrolledFooter " : "footerText"}>
                <h3>HORARIOS DE APERTURA</h3>

                <div className='horarios'>
                    <p>Lunes</p>
                    <span> 9:00 - 24:00</span>
                </div>
                <div className='horarios'>
                    <p>Martes</p>
                    <span> 9:00 - 24:00</span>
                </div>
                <div className='horarios'>
                    <p>Miércoles</p>
                    <span> 9:00 - 24:00</span>
                </div>
                <div className='horarios'>
                    <p>Jueves</p>
                    <span> 9:00 - 24:00</span>
                </div>
                <div className='horarios'>
                    <p>Viernes</p>
                    <span> 9:00 - 24:00</span>
                </div>
                <div className='horarios'>
                    <p>Sábado</p>
                    <span> 9:00 - 24:00</span>
                </div>
                <div className='horarios'>
                    <p>Domingo</p>
                    <span> cerrado</span>
                </div>
            </div>

            <div className={scrolled ? "footerText scrolledFooter " : "footerText"}>
                <h3>INSTAGRAM</h3>

                <div className='INSTAGRAM'>

                    <img src={img1} alt="img" />
                    <img src={img2} alt="img" />
                    <img src={img3} alt="img" />
                    <img src={img4} alt="img" />
                    <img src={img5} alt="img" />
                    <img src={img6} alt="img" />

                </div>

            </div>

            <div className={scrolled ? "footerText scrolledFooter " : "footerText"}>
                <h3>
                    BOLETIN INFORMATIVO</h3>
                <p>Muy, muy lejos, detrás de la palabra montañas, lejos de los países.</p>

                <form action="" className='form-footer'>
                    <input type="email" placeholder='Introducir correo elecronico' />
                    <button>Suscribir</button>
                </form>


            </div>

        </div>
    )
}
