import React, { useEffect } from 'react'
import IntroTitle from '../layout/IntroTitle/IntroTitile'
import Filter from '../layout/Filter/Filter'

const Blog = () => {
    useEffect(() => {
        document.title = 'Blog - Pod of Cast'
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <IntroTitle title="Article and" span="News" long={false} />
            <Filter type="Posts" />
        </>
    )
}

export default Blog
