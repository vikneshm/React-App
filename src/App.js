import React from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './Home.js'
import Folder from '../components/Explorer/Folder.js'
import Practice from '../components/Practice/Practice.js'
import Nopage from './Nopage.js'
import Timer from '../components/Timer/Timer.js'
import Todolist from '../components/Todolist/Todolist.js'
import '../assets/Styles/App.css'

const App = () => {
    return(
        <BrowserRouter>
        <nav className='nav-bar'>
            <h1>Projects</h1>
            <ul>
                <li><Link className='ul-bar' to='/'>Home</Link></li>
                <li><Link className='ul-bar' to='/practice'>Practice</Link></li>
                <li><Link className='ul-bar' to='/explorer'>Explorer</Link></li>
                <li><Link className='ul-bar' to='/timer'>Timer</Link></li>
                <li><Link className='ul-bar' to='/todolist'>Todolist</Link></li>
            </ul>
        </nav>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/explorer' element={<Folder />}></Route>
            <Route path='/practice' element={<Practice />}></Route>
            <Route path='/timer' element={<Timer />}></Route>
            <Route path='/todolist' element={<Todolist />}></Route>
            <Route path='*' element={<Nopage />}></Route>
        </Routes>
        </BrowserRouter>
    )
}

export default App