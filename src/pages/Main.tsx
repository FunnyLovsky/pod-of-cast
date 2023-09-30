import React, { useEffect } from 'react'

import Intro from '../layout/Intro/Intro'
import About from '../layout/About/About'
import Recom from '../layout/Recom/Recom'

const Main = () => {
    useEffect(() => {
        document.title = 'Pod of Cast'
    }, [])

    return (
        <>
            <Intro />
            <About />
            <Recom />
        </>
    )
}

export default Main
