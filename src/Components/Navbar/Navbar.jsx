import React, { useState, useEffect } from 'react'
import './Navbar.css'

import { Link as Anchor, useNavigate, useLocation } from "react-router-dom";



export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false);

    // Cambio de color en navbar al hacer scroll
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 130) {
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
        <header className={scrolled ? "navbar scrolled " : "navbar"}>
            <nav >

                <div className='logo'>
                    <Anchor to={`/`} >Tease. <span>IT</span></Anchor>
                </div>
                <div className={`nav_toggle  ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className={`nav_items ${isOpen && "open"}`} >

                    <div className="cerrar-nav" onClick={() => setIsOpen(!isOpen)}>
                        x
                    </div>
                    <div className='logo-nav'>
                        <Anchor to={`/`} >Tease. <span>IT</span></Anchor>
                    </div>

                    <div className='enlaces'>
                        <Anchor to={`/`} >Hogar</Anchor>
                        <Anchor to={`/`} >Acerca de</Anchor>
                        <Anchor to={`/`} >Cocinero</Anchor>
                        <Anchor to={`/`} >Menú</Anchor>
                        <Anchor to={`/`} >Blog</Anchor>
                        <Anchor to={`/`} >Conacto</Anchor>
                    </div>



                </div>







            </nav>


        </header>
    );
}
