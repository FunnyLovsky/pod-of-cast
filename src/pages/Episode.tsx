import React, { useEffect } from 'react'
import Intro from '../layout/Intro/Intro'

const Episode = () => {
    useEffect(() => {
        document.title = 'Episode - Pod of Cast'
    }, [])

    return (
        <>
            <Intro />
        </>
    )
}

export default Episode
