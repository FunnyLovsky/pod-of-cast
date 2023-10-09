import { useEffect, useState } from 'react'
import useSound from 'use-sound'
import styles from './soundPlayer.module.scss'
import { Episodes } from '../../types/types'

interface Props {
    id: number
    episodes: Episodes[]
    getTime: ({ min, sec, duration }: Time) => void
}

interface Time {
    min: number
    sec: number
    duration: number
}
const formatTime = (seconds: number) => {
    if (seconds === 0) {
        return {
            min: 0,
            sec: 0,
        }
    } else {
        const min = Math.floor(seconds / 60)
        const sec = Math.floor(seconds % 60)
        return {
            min,
            sec,
        }
    }
}

const SoundPlayer = ({ id, episodes, getTime }: Props) => {
    const [play, { pause, duration, sound }] = useSound(episodes[id].audio)
    const [isPlaying, setIsPlaying] = useState(false)
    const [currTime, setCurrTime] = useState(formatTime(0))
    const [fullTime, setFullTime] = useState({
        min: 0,
        sec: 0,
        duration: 0,
    })

    useEffect(() => {
        getTime(fullTime)
    }, [getTime, fullTime, duration])

    useEffect(() => {
        if (duration) {
            const sec = duration / 1000
            setFullTime({
                ...formatTime(sec),
                duration: sec,
            })
        }
    }, [duration])

    useEffect(() => {
        const interval = setInterval(() => {
            if (sound) {
                const currentTime = sound.seek([])
                setCurrTime(formatTime(currentTime))
            }
        }, 10)
        return () => clearInterval(interval)
    }, [sound])

    useEffect(() => {
        return () => {
            pause()
            setIsPlaying(false)
        }
    }, [pause])

    const togglePlayback = () => {
        if (isPlaying) {
            pause()
            setIsPlaying(false)
            console.log(isPlaying)
        } else {
            play()
            setIsPlaying(true)
            console.log(isPlaying)
        }
    }

    return (
        <div className={styles.music_player}>
            <div className={styles.music_info}>
                <img src={episodes[id].img} alt="" />
                <div className={styles.music_title}>
                    <h5>{episodes[id].title}</h5>
                    <div className={styles.music_hostes}>
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
                </div>
            </div>
            <div className={styles.controls_inner}>
                {sound ? (
                    <>
                        <input
                            type="range"
                            min="0"
                            max={fullTime.duration}
                            value={currTime.min * 60 + currTime.sec}
                            className={styles.timeline}
                            onChange={(e) =>
                                sound.seek([Number(e.target.value)])
                            }
                        />
                        <div className={styles.time}>
                            <h6 className={styles.current}>
                                {currTime.min}:{currTime.sec}
                            </h6>
                            <h6 className={styles.full}>
                                {fullTime.min}:{fullTime.sec}
                            </h6>
                        </div>
                        <div className={styles.controls}>
                            <button onClick={togglePlayback}>
                                {isPlaying ? 'Pause' : 'Play'}
                            </button>
                        </div>
                    </>
                ) : (
                    <h1>Loading...</h1>
                )}
            </div>
        </div>
    )
}

export default SoundPlayer
