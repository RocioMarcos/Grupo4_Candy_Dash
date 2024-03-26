import React from 'react'
import '../App.css'
import SideBar from './SideBar'
import NavBar from './NavBar'

function IndexStart() {
    return (
        <main className='index'>
            <NavBar/>
            <div className="index-body">
                <SideBar/>
                <div className='index-divisor-rosa'>
                </div>
            </div>
        </main>
    )
}

export default IndexStart