import React, { useState, useEffect } from 'react'
import imgMenu1 from '../../img/breakfast-1.jpg'
import imgMenu2 from '../../img/breakfast-2.jpg'
import imgMenu3 from '../../img/breakfast-3.jpg'
import imgMenu4 from '../../img/breakfast-4.jpg'
import imgMenu5 from '../../img/breakfast-5.jpg'
import imgMenu6 from '../../img/breakfast-6.jpg'
import imgMenu7 from '../../img/breakfast-7.jpg'
import imgMenu8 from '../../img/breakfast-8.jpg'
import imgMenu9 from '../../img/breakfast-9.jpg'
export default function MenuComidas() {
    const [scrolled, setScrolled] = useState(false);

    // Cambio de color en navbar al hacer scroll
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 1000) {
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
        <div className={scrolled ? "cards scrolledCard" : "cards"}>
            <div className='cardMenu'>
                <h4>DESAYUNO</h4>
                <div className='menus'>
                    <img src={imgMenu1} alt="menu" />
                    <div className='textCardMenu'>
                        <div className='flex'>
                            <h5>Fuente de carne asada</h5>
                            <span>$29</span>
                        </div>
                        <p>Carne , Patatas , Arroz , Tomate</p>
                    </div>
                </div>
                <div className='menus'>
                    <img src={imgMenu2} alt="menu" />
                    <div className='textCardMenu'>
                        <div className='flex'>
                            <h5>Fuente de carne asada</h5>
                            <span>$29</span>
                        </div>
                        <p>Carne , Patatas , Arroz , Tomate</p>
                    </div>
                </div>
                <div className='menus'>
                    <img src={imgMenu3} alt="menu" />
                    <div className='textCardMenu'>
                        <div className='flex'>
                            <h5>Fuente de carne asada</h5>
                            <span>$29</span>
                        </div>
                        <p>Carne , Patatas , Arroz , Tomate</p>
                    </div>
                </div>
            </div>


            <div className='cardMenu'>
                <h4>ALMUERZO</h4>
                <div className='menus'>
                    <img src={imgMenu4} alt="menu" />
                    <div className='textCardMenu'>
                        <div className='flex'>
                            <h5>Fuente de carne asada</h5>
                            <span>$29</span>
                        </div>
                        <p>Carne , Patatas , Arroz , Tomate</p>
                    </div>
                </div>
                <div className='menus'>
                    <img src={imgMenu5} alt="menu" />
                    <div className='textCardMenu'>
                        <div className='flex'>
                            <h5>Fuente de carne asada</h5>
                            <span>$29</span>
                        </div>
                        <p>Carne , Patatas , Arroz , Tomate</p>
                    </div>
                </div>
                <div className='menus'>
                    <img src={imgMenu6} alt="menu" />
                    <div className='textCardMenu'>
                        <div className='flex'>
                            <h5>Fuente de carne asada</h5>
                            <span>$29</span>
                        </div>
                        <p>Carne , Patatas , Arroz , Tomate</p>
                    </div>
                </div>
            </div>

            <div className='cardMenu'>
                <h4>CENA</h4>
                <div className='menus'>
                    <img src={imgMenu7} alt="menu" />
                    <div className='textCardMenu'>
                        <div className='flex'>
                            <h5>Fuente de carne asada</h5>
                            <span>$29</span>
                        </div>
                        <p>Carne , Patatas , Arroz , Tomate</p>
                    </div>
                </div>
                <div className='menus'>
                    <img src={imgMenu8} alt="menu" />
                    <div className='textCardMenu'>
                        <div className='flex'>
                            <h5>Fuente de carne asada</h5>
                            <span>$29</span>
                        </div>
                        <p>Carne , Patatas , Arroz , Tomate</p>
                    </div>
                </div>
                <div className='menus'>
                    <img src={imgMenu9} alt="menu" />
                    <div className='textCardMenu'>
                        <div className='flex'>
                            <h5>Fuente de carne asada</h5>
                            <span>$29</span>
                        </div>
                        <p>Carne , Patatas , Arroz , Tomate</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
