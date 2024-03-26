import React from 'react'

function SideBar() {
    return (
        <div className="sidebar">  
            <ul id="sidebar-menu-opciones">
                <a className='sidebar-inicio-link' href="/">
                    <li className='sidebar-opcion'>
                        Inicio
                    </li>
                </a>

                <a className='sidebar-pedidos-link' href="/">
                    <li className='sidebar-opcion jc-between'>
                        Pedidos
                        <i className="bi bi-chevron-down"></i>
                    </li>
                </a>

                <a className='sidebar-productos-link' href="/">
                    <li className='sidebar-opcion jc-between'>
                        Productos
                        <i className="bi bi-chevron-down"></i>
                    </li>
                </a>

                <a className='sidebar-usuarios-link' href="/">
                    <li className='sidebar-opcion jc-between'>
                        Usuarios
                        <i className="bi bi-chevron-down"></i>
                    </li>
                </a>

                <a className='sidebar-estadisticas-link' href="/">
                    <li className='sidebar-opcion jc-between'>
                        Estadísticas
                        <i className="bi bi-chevron-down"></i>
                    </li>
                </a>
            </ul>
        </div>
    )
}

export default SideBar