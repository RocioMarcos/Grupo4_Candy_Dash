import React from 'react'

function SideBar() {
    return (
        <div className="sidebar">  
            <ul id="menu-opciones">
                <li><a href="/">Inicio</a></li>
                <li><a href="/">Pedidos</a></li>
                <li><a href="/">Productos</a></li>
                <li><a href="/">Usuarios</a></li>
                <li><a href="/">Estadísticas</a></li>
            </ul>
        </div>
    )
}

export default SideBar