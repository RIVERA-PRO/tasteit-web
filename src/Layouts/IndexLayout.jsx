import React from 'react'
import Header from '../Pages/Header/Header'
import Footer from '../Components/Footer/Footer'
import Developer from '../Components/Developer/Developer'
import Hero from '../Components/Hero/Hero'
export default function IndexLayout() {
    return (
        <div>
            <Header />
            <Hero />
            <Footer />
            <Developer />
        </div>
    )
}
