import React, { useEffect } from 'react'

import IntroTitle from '../layout/IntroTitle/IntroTitile'
import Filter from '../layout/Filter/Filter'

const Episode = () => {
    useEffect(() => {
        document.title = 'Episode - Pod of Cast'
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <IntroTitle title="Podcasts of" span="Episodes" long={false} />
            <Filter type="Episodes" />
        </>
    )
}

export default Episode
