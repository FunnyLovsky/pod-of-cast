import React, { FC, useEffect, useState } from 'react'
import Container from '../../ui/Container/Container'
import styles from './episodes.module.scss'
import Title from '../../ui/Title/Title'
import Scribble from '../../ui/Scribble/Scribe'
import Button from '../../ui/Button/Button'
import SPARKLE from '../../../assets/images/vectors/sparkle_1.svg'
// import { episodes } from '../../../data/episodes'
import { Link } from 'react-router-dom'
import EpisodeCard from '../../elements/EpisodeCard/EpisodeCard'
import { useAdaptiveElem } from '../../../hooks/useAdaptiveElem'
import { Episodes } from '../../../types/types'
import EpisodeLoad from '../../elements/EpisodeLoad/EpidoseLoad'

const Episode: FC = () => {
    const { isAdaptive, showAdaptiveCover } = useAdaptiveElem(700)
    const [isLoad, setIsLoad] = useState(false)

    const [episodes, setEpisodes] = useState<Episodes[]>([])
    const url = 'https://podcast-server-mu.vercel.app/'
    useEffect(() => {
        fetch(`${url}api/episodes`)
            .then((res) => res.json())
            .then((episode) => {
                setEpisodes(episode)
                setIsLoad(true)
            })
            .catch((e) => console.log(e))
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
                    {isLoad &&
                        episodes
                            .slice(0, isAdaptive ? 3 : episodes.length)
                            .map((elem, index) => (
                                <EpisodeCard
                                    key={index}
                                    id={elem.id}
                                    href={elem.href}
                                    img={url + elem.img}
                                    title={elem.title}
                                    tags={elem.tags}
                                />
                            ))}

                    {!isLoad && (
                        <>
                            <EpisodeLoad />
                            <EpisodeLoad />
                            <EpisodeLoad />
                            <EpisodeLoad />
                            <EpisodeLoad />
                            <EpisodeLoad />
                        </>
                    )}
                </div>

                <Button>
                    <Link to="/episode">BROWSE ALL EPISODES</Link>
                </Button>
            </Container>
        </div>
    )
}

export default Episode
