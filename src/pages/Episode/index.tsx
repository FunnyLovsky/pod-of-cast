import React, { useEffect } from 'react'

import IntroTitle from '../../components/global/IntroTitle/IntroTitile'
import Filter from './Filter/Filter'
import App from '../../components/global/App/App'
import Footer from '../../components/global/Footer/Footer'

const Episode = () => {
    useEffect(() => {
        document.title = 'Episode - Pod of Cast'
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <IntroTitle title="Podcasts of" span="Episodes" long={false} />
            <Filter />
            <App />
            <Footer />
        </>
    )
}

export default Episode
