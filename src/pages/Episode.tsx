import React, { useEffect } from 'react'
import Intro from '../layout/Intro/Intro'

const Episode = () => {
    useEffect(() => {
        document.title = 'Episode - Pod of Cast'
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Intro />
        </>
    )
}

export default Episode
