import React, { useEffect } from 'react'

import IntroTitle from '../../components/global/IntroTitle/IntroTitile'
import Footer from '../../components/global/Footer/Footer'
import App from '../../components/global/App/App'

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
