import React from 'react'
import './header.scss'

export default function Header() {
  return (
    <header>
        <h1>Название</h1>

        <div className="buttons">
            <button className='btns-button'>Меню</button>
            <button className='btns-button'>Филиаллы</button>
            <button className='btns-button'>Заказать Сейчас</button>
        </div>
    </header>   
  )
}
