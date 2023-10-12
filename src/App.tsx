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
import Features from './pages/Features'
import Pricing from './pages/Pricing'
import Testimonials from './pages/Testimonials'
import BLogItem from './pages/BlogItem'

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Header />}>
                        <Route path="/" element={<Main />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/episode" element={<Episode />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/features" element={<Features />} />
                        <Route path="/pricing" element={<Pricing />} />
                        <Route
                            path="/testimonials"
                            element={<Testimonials />}
                        />
                        <Route path="/episode/:id" element={<EpisodeItem />} />
                        <Route path="/blog/:id" element={<BLogItem />} />
                    </Route>
                    <Route path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
