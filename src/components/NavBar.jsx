import React from 'react'
import logo from '../assets/img/candyshop-sm.png'

function NavBar() {
    return (
        <nav id="navbar" className="navbar">
            <img className='navbar-img' src={ logo } alt="Logo de CandyShop"/> 
            <a className="navbar-session-out">
                <i className="bi bi-box-arrow-right"></i>
            </a>
        </nav>
    )
}

export default NavBar