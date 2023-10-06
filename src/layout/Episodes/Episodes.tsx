import React, { FC } from 'react'
import Container from '../../components/ui/Container/Container'
import styles from './episodes.module.scss'
import Title from '../../components/ui/Title/Title'
import Scribble from '../../components/ui/Scribble/Scribe'
import Button from '../../components/ui/Button/Button'
import SPARKLE from '../../assets/images/vectors/sparkle_1.svg'
import { episodes } from '../../data/episodes'
import { Link } from 'react-router-dom'
import EpisodeCard from '../../components/EpisodeCard/EpisodeCard'

const Episodes: FC = () => {
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

                <Button>
                    <Link to="/episode">BROWSE ALL EPISODES</Link>
                </Button>
            </Container>
        </div>
    )
}

export default Episodes
