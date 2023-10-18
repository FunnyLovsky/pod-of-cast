import React, { useEffect } from 'react'

import Intro from './Intro/Intro'
import About from './About/About'
// import Recom from './Recom/Recom'
// import Features from './Features/Features'
import Episode from '../../components/global/Episodes/Episodes'
// import Pricing from './Pricing/Pricing'
import Blog from './Blog/Blog'
import App from '../../components/global/App/App'
import Footer from '../../components/global/Footer/Footer'

const Main = () => {
    useEffect(() => {
        document.title = 'Pod of Cast'
    }, [])

    return (
        <>
            <Intro />

            <About />
            {/* <Recom /> */}
            {/* <Features /> */}
            <Episode />
            {/* <Pricing /> */}
            <Blog />
            <App />
            <Footer />
        </>
    )
}

export default Main
