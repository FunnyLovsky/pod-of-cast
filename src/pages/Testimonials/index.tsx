import React, { useEffect } from 'react'

import IntroTitle from '../../components/global/IntroTitle/IntroTitile'
import Footer from '../../components/global/Footer/Footer'
import App from '../../components/global/App/App'
import Recom from './Recom/Recom'

const Testimonials = () => {
    useEffect(() => {
        document.title = 'Testimonials - Pod of Cast'
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <IntroTitle title="Testimonials" span=" Pod of Cast" long={true} />
            <Recom />
            <App />
            <Footer />
        </>
    )
}

export default Testimonials
