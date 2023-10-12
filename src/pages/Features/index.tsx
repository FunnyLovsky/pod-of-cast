import React, { useEffect } from 'react'

import IntroTitle from '../../components/global/IntroTitle/IntroTitile'
import Footer from '../../components/global/Footer/Footer'
import App from '../../components/global/App/App'
import Benefit from './Benefit/Benefit'

const Features = () => {
    useEffect(() => {
        document.title = 'Features - Pod of Cast'
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <IntroTitle title="Features" span=" Pod of Cast" long={true} />
            <Benefit />
            <App />
            <Footer />
        </>
    )
}

export default Features
