import React from 'react'
import './Developer.css'

import logo from '../../img/logo-juan-rivera-developer.png'
export default function Developer() {
    return (
        <div className='developerContain'>
            <p>
                Desarrollado por
            </p>

            <img src={logo} alt="juan-rivera-developer" className='logo-juan-rivera-developer' />



        </div>
    )
}
