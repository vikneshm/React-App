import React from 'react'
import {createRoot} from 'react-dom/client'
import App from '../components/App.js'

const container = document.getElementById('App')
const root = createRoot(container)
root.render(<App />)