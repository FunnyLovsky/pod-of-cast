import React, { useEffect } from 'react'
import NotFound from './NotFound/NotFound'

const Error = () => {
    useEffect(() => {
        document.title = '404 - Pod of Cast'
    }, [])

    return <NotFound />
}

export default Error
