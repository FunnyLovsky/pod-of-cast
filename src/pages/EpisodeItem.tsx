import React, { useEffect } from 'react'
import App from '../layout/App/App'
import Footer from '../layout/Footer/Footer'
import Episodes from '../layout/Episodes/Episodes'
import IntroElement from '../layout/IntroElement/IntroElement'
import { episodes } from '../data/episodes'
import { useParams } from 'react-router-dom'
import NotFound from '../layout/NotFound/NotFound'

const EpisodeItem = () => {
    const { id } = useParams()
    const num = Number(id) - 1
    const title = episodes[num] ? episodes[num].title : 'Not Found'

    useEffect(() => {
        document.title = `${title} - Pod of Cast`
        window.scrollTo(0, 0)
    }, [title])

    return (
        <>
            {episodes[num] ? (
                <>
                    <IntroElement id={num} />
                    <Episodes />
                    <App />
                    <Footer />
                </>
            ) : (
                <NotFound />
            )}
        </>
    )
}

export default EpisodeItem
