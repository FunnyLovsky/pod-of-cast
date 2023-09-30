import React from 'react'
import './assets/styles/style.scss'
import Main from './pages/Main'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import About from './pages/About'
import Episode from './pages/Episode'
import Blog from './pages/Blog'
import NotFound from './layout/NotFound/NotFound'

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Header />}>
                        <Route
                            path="/"
                            element={<Main />}
                            errorElement={<NotFound />}
                        />
                        <Route path="/about" element={<About />} />
                        <Route path="/episode" element={<Episode />} />
                        <Route path="/blog" element={<Blog />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
