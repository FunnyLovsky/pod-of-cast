import React, { useEffect } from 'react'
import IntroTitle from '../../components/global/IntroTitle/IntroTitile'

import FilterPosts from './FilterPosts/FilterPosts'
import App from '../../components/global/App/App'
import Footer from '../../components/global/Footer/Footer'

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
