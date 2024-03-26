import React from 'react'
import '../App.css'
import SideBar from './SideBar'
import NavBar from './NavBar'

export function IndexStart() {
    return (
        <main className='index'>
            <NavBar/>
            <div className="index-body">
                <SideBar/>
                <div className="index-main">
                    <div className='index-divisor-rosa'>
                    </div>
                    <div className="contenedor">
                        
                    </div>
                </div>
            </div>
        </main>
    )
}
