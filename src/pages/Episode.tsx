import React, { useEffect } from 'react'

import IntroTitle from '../layout/IntroTitle/IntroTitile'
import FilterEpisode from '../layout/FilterEpisode/FilterEpisode'
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
            <FilterEpisode />
            <App />
            <Footer />
        </>
    )
}

export default Episode
