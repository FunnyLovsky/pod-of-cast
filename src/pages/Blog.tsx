import React, { useEffect } from 'react'
import IntroTitle from '../layout/IntroTitle/IntroTitile'

import FilterPosts from '../layout/FilterPosts/FilterPosts'
import App from '../layout/App/App'
import Footer from '../layout/Footer/Footer'

const Blog = () => {
    useEffect(() => {
        document.title = 'Blog - Pod of Cast'
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <IntroTitle title="Article and" span="News" long={false} />
            <FilterPosts />
            <App />
            <Footer />
        </>
    )
}

export default Blog
