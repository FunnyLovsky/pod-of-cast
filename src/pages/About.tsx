import React, { useEffect } from 'react'

import IntroTitle from '../layout/IntroTitle/IntroTitile'

const About = () => {
    useEffect(() => {
        document.title = 'About - Pod of Cast'
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <IntroTitle title="About" span=" Pod of Cast" long={true} />
        </>
    )
}

export default About
