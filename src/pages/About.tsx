import React, { useEffect } from 'react'

const About = () => {
    useEffect(() => {
        document.title = 'About - Pod of Cast'
    }, [])

    return (
        <>
            <h1>About</h1>
        </>
    )
}

export default About
