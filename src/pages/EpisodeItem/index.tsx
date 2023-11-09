import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import App from '../../components/global/App/App'
import Footer from '../../components/global/Footer/Footer'
import Episodes from '../../components/global/Episodes/Episodes'
import IntroElement from './IntroElement/IntroElement'
import NotFound from '../Error/NotFound/NotFound'
import { useAppSelector } from '../../store/hooks/hook'

const EpisodeItem = () => {
    const { episodes } = useAppSelector((state) => state.episodeReducer)
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
