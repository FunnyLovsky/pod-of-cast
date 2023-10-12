import React, { useEffect } from 'react'

import IntroTitle from '../../components/global/IntroTitle/IntroTitile'
import Footer from '../../components/global/Footer/Footer'
import App from '../../components/global/App/App'
import Sponsor from './Sponsor/Sponsor'

const Pricing = () => {
    useEffect(() => {
        document.title = 'Pricing - Pod of Cast'
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <IntroTitle title="Pricing" span=" Pod of Cast" long={true} />
            <Sponsor />
            <App />
            <Footer />
        </>
    )
}

export default Pricing
