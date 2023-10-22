import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './assets/styles/style.scss'

import AppRouter from './components/global/AppRouter/AppRouter'

const App = () => {
    return (
        <>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </>
    )
}

export default App
