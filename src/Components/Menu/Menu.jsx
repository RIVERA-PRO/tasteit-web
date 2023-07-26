import React from 'react'
import './Menu.css'
import MenuComidas from './MenuComidas'
import MenuBebidas from './MenuBebidas'
export default function Menu() {
    return (
        <div className='MenuContain'>
            <h1>Nuestro menú</h1>
            <MenuComidas />
            <MenuBebidas />

        </div>
    )
}
