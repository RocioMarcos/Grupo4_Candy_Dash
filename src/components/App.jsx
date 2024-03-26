import { useState } from 'react'
import '../App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { IndexStart } from './IndexStart';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <IndexStart/> } /> 

            </Routes>
        

        </BrowserRouter>
    )
}

export default App
