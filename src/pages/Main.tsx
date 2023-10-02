import React, { useEffect } from 'react'

import Intro from '../layout/Intro/Intro'
import About from '../layout/About/About'
import Recom from '../layout/Recom/Recom'
import Features from '../layout/Features/Features'
import Episodes from '../layout/Episodes/Episodes'
import Pricing from '../layout/Pricing/Pricing'

const Main = () => {
    useEffect(() => {
        document.title = 'Pod of Cast'
    }, [])

    return (
        <>
            <Intro />
            <About />
            <Recom />
            <Features />
            <Episodes />
            <Pricing />
        </>
    )
}

export default Main
