import React from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from '../components/Home.js'
import Folder from '../Explorer/Folder.js'
import About from '../components/About.js'
import Nopage from '../components/Nopage.js'
import '../Styles/App.css'

const App = () => {
    return(
        <BrowserRouter>
        <nav className='nav-bar'>
            <h1>Projects</h1>
            <ul>
                <li><Link className='ul-bar' to='/'>Home</Link></li>
                <li><Link className='ul-bar' to='/explorer'>Explorer</Link></li>
                <li><Link className='ul-bar' to='/about'>About</Link></li>
            </ul>
        </nav>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/explorer' element={<Folder />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='*' element={<Nopage />}></Route>
        </Routes>
        </BrowserRouter>
    )
}

export default App