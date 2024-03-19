import React from 'react'
import { logo } from '../assets/img/candyshop-sm.png'

function NavBar() {
    return (
        <header>
            <nav id="navbar" className="sombra-sm">
                <div>
                    <img src={ logo } alt="Logo de CandyShop" width="66px"/>
                </div>
                <div className="horizontal">
                    <button type="button" onclick="opencloseMenu()">
                        <i className="bi bi-list"></i> Cerrar Sesión
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default NavBar