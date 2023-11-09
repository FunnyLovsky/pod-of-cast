import React, { useEffect, useState } from 'react'
import styles from './introElement.module.scss'
import Container from '../../../components/ui/Container/Container'
import VECTOR_1 from '../../../assets/images/vectors/vector_4.svg'
import VECTOR_2 from '../../../assets/images/vectors/vector_2.svg'

import AVATAR from '../../../assets/images/photos/avatar_5.png'
import Tag from '../../../components/ui/Tag/Tag'
import { FaPlay } from '@react-icons/all-files/fa/FaPlay'
import { CgClose } from '@react-icons/all-files/cg/CgClose'
import SoundPlayer from '../SoundPlayer/SoundPlayer'
import { useAppSelector } from '../../../store/hooks/hook'
import { URL_SERVER } from '../../../constans/const'

interface Props {
    id: number
}

interface Time {
    min: number
    sec: string
    duration: number
}

const IntroElement = ({ id }: Props) => {
    const { episodes } = useAppSelector((state) => state.episodeReducer)
    const [player, setPlayer] = useState(false)
    const [time, setTime] = useState({
        min: 0,
        sec: '00',
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
                        <img src={URL_SERVER + episodes[id].img} alt="" />
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
                                        <div className={styles.btn_inner}>
                                            <CgClose />
                                            <h3>Close</h3>
                                        </div>
                                    </button>
                                ) : (
                                    <button onClick={() => setPlayer(true)}>
                                        <div className={styles.btn_inner}>
                                            <FaPlay />
                                            <h3>
                                                LISTEN NOW{' '}
                                                <span
                                                    style={{
                                                        color: '#CD4631',
                                                        textTransform:
                                                            'lowercase',
                                                    }}
                                                >
                                                    ({time.min}:{time.sec} min)
                                                </span>
                                            </h3>
                                        </div>
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
                    style={player ? { display: 'flex' } : { display: 'none' }}
                />
            ) : null}
        </>
    )
}

export default IntroElement
