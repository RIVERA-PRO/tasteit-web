import React, { useState, useEffect } from 'react'
import './BgTile.css'
export default function BgTile() {

    const [scrolled, setScrolled] = useState(false);

    // Cambio de color en navbar al hacer scroll
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 500) {
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
        <div className='BgTileContain'>

            <div className={scrolled ? "bgText scrolledBG" : "bgText"}>
                <h4>AHORA RESERVANDO</h4>
                <h2>Cenas privadas y horas felices</h2>
            </div>

        </div>
    )
}
