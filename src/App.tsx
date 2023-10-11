import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './assets/styles/style.scss'
import Main from './pages/Main'
import Header from './components/global/Header/Header'
import About from './pages/About'
import Episode from './pages/Episode'
import Blog from './pages/Blog'
import EpisodeItem from './pages/EpisodeItem'
import Error from './pages/Error'

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Header />}>
                        <Route path="/" element={<Main />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/episode" element={<Episode />} />
                        <Route path="/episode/:id" element={<EpisodeItem />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/blog/:id" element={<Blog />} />
                    </Route>
                    <Route path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
