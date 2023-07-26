import React from 'react'
import Header from '../Pages/Header/Header'
import Footer from '../Components/Footer/Footer'
import Developer from '../Components/Developer/Developer'
import Hero from '../Components/Hero/Hero'
import ButonScroll from '../Components/ButonScroll/ButonScroll'
import Main from '../Components/Main/Main'
import BgTile from '../Components/BgTile/BgTile'
import Menu from '../Components/Menu/Menu'
import Testimonios from '../Components/Testimonios/Testimonios'
import Chefs from '../Components/Chefs/Chefs'
export default function IndexLayout() {
    return (
        <div>
            <Header />
            <Hero />
            <Main />
            <BgTile />
            <Menu />
            <Testimonios />
            <Chefs />
            <Footer />
            <Developer />
            <ButonScroll />
        </div>
    )
}
