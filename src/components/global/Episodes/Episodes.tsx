import React, { FC, useEffect } from 'react'
import Container from '../../ui/Container/Container'
import styles from './episodes.module.scss'
import Title from '../../ui/Title/Title'
import Scribble from '../../ui/Scribble/Scribe'
import Button from '../../ui/Button/Button'
import SPARKLE from '../../../assets/images/vectors/sparkle_1.svg'
import { episodes } from '../../../data/episodes'
import { Link } from 'react-router-dom'
import EpisodeCard from '../../elements/EpisodeCard/EpisodeCard'
import { useAdaptiveElem } from '../../../hooks/useAdaptiveElem'

const Episodes: FC = () => {
    const { isAdaptive, showAdaptiveCover } = useAdaptiveElem(700)

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

                {!isAdaptive && (
                    <div className={styles.inner}>
                        {episodes.map((elem, index) => (
                            <EpisodeCard
                                key={index}
                                id={elem.id}
                                href={elem.href}
                                img={elem.img}
                                title={elem.title}
                                tags={elem.tags}
                            />
                        ))}
                    </div>
                )}

                {isAdaptive && (
                    <div className={styles.inner}>
                        {episodes.slice(0, 3).map((elem, index) => (
                            <EpisodeCard
                                key={index}
                                id={elem.id}
                                href={elem.href}
                                img={elem.img}
                                title={elem.title}
                                tags={elem.tags}
                            />
                        ))}
                    </div>
                )}

                <Button>
                    <Link to="/episode">BROWSE ALL EPISODES</Link>
                </Button>
            </Container>
        </div>
    )
}

export default Episodes
