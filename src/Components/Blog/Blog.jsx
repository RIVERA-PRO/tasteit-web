import React, { useState, useEffect } from 'react'
import { Link as Anchor, useNavigate, useLocation } from "react-router-dom";
import './Blog.css'
import img from '../../img/image_1.jpg'
import img2 from '../../img/image_2.jpg'
import img3 from '../../img/image_3.jpg'
import img4 from '../../img/image_4.jpg'
export default function Blog() {
    const [scrolled, setScrolled] = useState(false);

    // Cambio de color en navbar al hacer scroll
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 4300) {
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
        <div className='containBlog'>
            <h2>Blog reciente</h2>

            <div className={scrolled ? "blogCards scrolledBlog " : "blogCards"}>

                <div className='BlogCARD'>
                    <img src={img} alt="img" />

                    <div className='textCardBlog'>
                        <p>3 DE AGOSTO DE 2020 ADMINISTRACIÓN</p>
                        <h4>Incluso el todopoderoso Señalador no tiene control sobre los textos ciegos.</h4>
                        <Anchor to={`/`} >Leer más</Anchor>
                    </div>

                </div>

                <div className='BlogCARD'>
                    <img src={img2} alt="img" />

                    <div className='textCardBlog'>
                        <p>3 DE AGOSTO DE 2020 ADMINISTRACIÓN</p>
                        <h4>Incluso el todopoderoso Señalador no tiene control sobre los textos ciegos.</h4>
                        <Anchor to={`/`} >Leer más</Anchor>
                    </div>

                </div>

                <div className='BlogCARD'>
                    <img src={img3} alt="img" />

                    <div className='textCardBlog'>
                        <p>3 DE AGOSTO DE 2020 ADMINISTRACIÓN</p>
                        <h4>Incluso el todopoderoso Señalador no tiene control sobre los textos ciegos.</h4>
                        <Anchor to={`/`} >Leer más</Anchor>
                    </div>

                </div>

                <div className='BlogCARD'>
                    <img src={img4} alt="img" />

                    <div className='textCardBlog'>
                        <p>3 DE AGOSTO DE 2020 ADMINISTRACIÓN</p>
                        <h4>Incluso el todopoderoso Señalador no tiene control sobre los textos ciegos.</h4>
                        <Anchor to={`/`} >Leer más</Anchor>
                    </div>

                </div>


            </div>

        </div>
    )
}
