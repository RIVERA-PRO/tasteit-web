import React from 'react'
import './FormReserva.css'
export default function FormReserva() {
    return (
        <form action="" className='formReserva'>
            <label htmlFor="">Reserva tu mesa</label>
            <input type="text" placeholder='Nombre' />
            <input type="email" placeholder='Correo electronico' />
            <input type="number" placeholder='Teléfono' />
            <input type="date" placeholder='Registrarse' />
            <input type="time" placeholder='Tiempo' />
            <select name="" id="">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
            </select>
            <button>Reserva tu mesa </button>
        </form>
    )
}
