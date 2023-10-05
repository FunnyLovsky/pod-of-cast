import React, { useEffect } from 'react'
import App from '../layout/App/App'
import Footer from '../layout/Footer/Footer'
import Episodes from '../layout/Episodes/Episodes'
import IntroElement from '../layout/IntroElement/IntroElement'
import { items } from '../components/PodCastCard/data/episodes'
import { useParams } from 'react-router-dom'

const EpisodeItem = () => {
    const { id } = useParams()
    const num = Number(id) - 1
    const title = items[num] ? items[num].title : 'Not Found'

    useEffect(() => {
        document.title = `${title} - Pod of Cast`
        window.scrollTo(0, 0)
    }, [title])

    return (
        <>
            {items[num] ? (
                <>
                    <IntroElement id={num} />
                    <Episodes />
                    <App />
                    <Footer />
                </>
            ) : (
                <Footer />
            )}
        </>
    )
}

export default EpisodeItem
