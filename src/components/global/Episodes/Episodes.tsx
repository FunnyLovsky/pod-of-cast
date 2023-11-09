/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect } from 'react'
import Container from '../../ui/Container/Container'
import styles from './episodes.module.scss'
import Title from '../../ui/Title/Title'
import Scribble from '../../ui/Scribble/Scribe'
import Button from '../../ui/Button/Button'
import SPARKLE from '../../../assets/images/vectors/sparkle_1.svg'
import { Link } from 'react-router-dom'
import EpisodeCard from '../../elements/EpisodeCard/EpisodeCard'
import { useAdaptiveElem } from '../../../hooks/useAdaptiveElem'
import EpisodeLoad from '../../elements/EpisodeLoad/EpidoseLoad'
import { useAppDispatch, useAppSelector } from '../../../store/hooks/hook'
import { fetchEpisodes } from '../../../store/action-creators/fetchEpisodes'
import { URL_SERVER } from '../../../constans/const'

const Episode: FC = () => {
    const { isAdaptive, showAdaptiveCover } = useAdaptiveElem(700)
    const dispatch = useAppDispatch()
    const { episodes, isLoading, error } = useAppSelector(
        (state) => state.episodeReducer
    )

    useEffect(() => {
        dispatch(fetchEpisodes())
    }, [])

    useEffect(() => {
        showAdaptiveCover()
        window.addEventListener('resize', showAdaptiveCover)

        return () => window.removeEventListener('resize', showAdaptiveCover)
    }, [showAdaptiveCover])

    return (
        <div className={styles.episodes}>
            <Scribble type="black" />

            <Container>
                <Title
                    title="Recent Episodess"
                    subtitle="Available on your favorite platform"
                />
                <img src={SPARKLE} alt="scribble" className={styles.sparkie} />

                <div className={styles.inner}>
                    {!isLoading &&
                        episodes
                            .slice(0, isAdaptive ? 3 : episodes.length)
                            .map((elem, index) => (
                                <EpisodeCard
                                    key={index}
                                    id={elem.id}
                                    href={elem.href}
                                    img={URL_SERVER + elem.img}
                                    title={elem.title}
                                    tags={elem.tags}
                                />
                            ))}

                    {isLoading && (
                        <>
                            <EpisodeLoad />
                            <EpisodeLoad />
                            <EpisodeLoad />
                            <EpisodeLoad />
                            <EpisodeLoad />
                            <EpisodeLoad />
                        </>
                    )}

                    {error && <h1>{error}</h1>}
                </div>

                <Button>
                    <Link to="/episode">BROWSE ALL EPISODES</Link>
                </Button>
            </Container>
        </div>
    )
}

export default Episode
