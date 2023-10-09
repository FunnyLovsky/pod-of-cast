import React, { useEffect, useState } from 'react'
import styles from './introElement.module.scss'
import Container from '../../components/ui/Container/Container'
import VECTOR_1 from '../../assets/images/vectors/vector_4.svg'
import VECTOR_2 from '../../assets/images/vectors/vector_2.svg'
import { episodes } from '../../data/episodes'
import AVATAR from '../../assets/images/photos/avatar_5.png'
import Tag from '../../components/ui/Tag/Tag'

import SoundPlayer from '../../components/SoundPlayer/SoundPlayer'

interface Props {
    id: number
}

interface Time {
    min: number
    sec: number
    duration: number
}

const IntroElement = ({ id }: Props) => {
    const [player, setPlayer] = useState(false)
    const [time, setTime] = useState({
        min: 0,
        sec: 0,
    })

    useEffect(() => {
        setPlayer(false)
    }, [id])

    const getTimeSound = (fullTime: Time) => {
        setTime(fullTime)
    }

    return (
        <>
            <div className={styles.intro}>
                <Container>
                    <div className={styles.inner}>
                        <img src={episodes[id].img} alt="" />
                        <div className={styles.info}>
                            <div className={styles.details}>
                                <h3 className={styles.number_episode}>
                                    Episode {episodes[id].id}
                                </h3>
                                <h3 className={styles.features}>
                                    FEATURED EPISODE
                                </h3>
                            </div>
                            <h1 className={styles.title}>
                                {episodes[id].title}
                            </h1>
                            <div className={styles.stroke}></div>
                            <h2 className={styles.subtitle}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud.
                            </h2>
                            <div className={styles.footnote}>
                                <div className={styles.hostes}>
                                    <img src={AVATAR} alt="s" />
                                    <h5>
                                        Hosted by:{' '}
                                        <span
                                            style={{
                                                color: '#CD4631',
                                                fontWeight: '700',
                                            }}
                                        >
                                            Jane Doe
                                        </span>
                                    </h5>
                                </div>
                                <h5 className={styles.date}>Sep 22, 2021</h5>
                            </div>
                            <div className={styles.buttons}>
                                <button>SUBSCRIBE</button>
                                {player ? (
                                    <button onClick={() => setPlayer(false)}>
                                        Close
                                    </button>
                                ) : (
                                    <button onClick={() => setPlayer(true)}>
                                        LISTEN NOW ({time.min}:{time.sec} min)
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className={styles.tags}>
                        <h3>Tags:</h3>
                        {episodes[id].tags.map((tag, index) => (
                            <Tag key={index}>{tag}</Tag>
                        ))}
                    </div>
                </Container>
                <img src={VECTOR_1} alt="" className={styles.vector} />
                <img src={VECTOR_2} alt="" className={styles.vector_2} />
            </div>
            {player ? (
                <SoundPlayer
                    id={id}
                    episodes={episodes}
                    getTime={getTimeSound}
                />
            ) : null}
        </>
    )
}

export default IntroElement
