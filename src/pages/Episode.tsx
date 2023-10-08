import React, { useEffect } from 'react'

import IntroTitle from '../layout/IntroTitle/IntroTitile'
import Filter from '../layout/Filter/Filter'
import App from '../layout/App/App'
import Footer from '../layout/Footer/Footer'

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
