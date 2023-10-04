import React, { useEffect } from 'react'

import Intro from '../layout/Intro/Intro'
import About from '../layout/About/About'
import Recom from '../layout/Recom/Recom'
import Features from '../layout/Features/Features'
import Episodes from '../layout/Episodes/Episodes'
import Pricing from '../layout/Pricing/Pricing'
import Blog from '../layout/Blog/Blog'
import App from '../layout/App/App'
import Footer from '../layout/Footer/Footer'

const Main = () => {
    useEffect(() => {
        document.title = 'Pod of Cast'
    }, [])

    return (
        <>
            <Intro />
            <About />
            <Recom />
            <Features />
            <Episodes />
            <Pricing />
            <Blog />
            <App />
            <Footer />
        </>
    )
}

export default Main
