import React, { useEffect } from 'react'

import IntroTitle from '../layout/IntroTitle/IntroTitile'
import Footer from '../layout/Footer/Footer'
import App from '../layout/App/App'

const About = () => {
    useEffect(() => {
        document.title = 'About - Pod of Cast'
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <IntroTitle title="About" span=" Pod of Cast" long={true} />
            <App />
            <Footer />
        </>
    )
}

export default About
