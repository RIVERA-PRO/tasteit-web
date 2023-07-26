import React, { useRef, useEffect } from 'react';
import './Hero.css';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import 'swiper/swiper-bundle.css';
import img1 from '../../img/bg_1.jpg';
import img2 from '../../img/bg_2.jpg';


SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function Hero() {
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.autoplay.start();
        }
    }, []);

    const handleNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const handlePrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    return (
        <div className='HeroConatin'>
            <Swiper
                effect='coverflow'
                grabCursor={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{ clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                id='swiper_container'
            >
                <SwiperSlide id='SwiperSlide'>
                    <div className='card-scroll'>
                        <img src={img1} alt='img' />
                        <div className='text-scroll'>
                            <h2 id='up'>RESTAURANTE TEASTE.IT</h2>
                            <h1 id='up'> Mejor calidad</h1>
                            <div className='text-hr' id='up'>
                                <hr />
                                <h4>Alimento</h4>
                                <hr />
                            </div>
                        </div>

                    </div>
                </SwiperSlide>

                <SwiperSlide id='SwiperSlide'>
                    <div className='card-scroll'>
                        <img src={img2} alt='img' />
                        <div className='text-scroll'>
                            <h2 id='up'>RESTAURANTE TEASTE.IT</h2>
                            <h1 id='up'> Cocinando desde</h1>
                            <div className='text-hr' id='up'>
                                <hr />
                                <h4>2023</h4>
                                <hr />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>



            </Swiper>
        </div>
    );
}
