import { useEffect, useState, useRef } from 'react'
import useSound from 'use-sound'
import styles from './soundPlayer.module.scss'
import { Episodes } from '../../types/types'
import { GiPauseButton } from '@react-icons/all-files/gi/GiPauseButton'
import { FaPlay } from '@react-icons/all-files/fa/FaPlay'

interface Style {
    display: string
}

interface Props {
    id: number
    episodes: Episodes[]
    getTime: ({ min, sec, duration }: Time) => void
    style: Style
}

interface Time {
    min: number
    sec: string
    duration: number
}
const formatTime = (seconds: number) => {
    if (seconds === 0) {
        return {
            min: 0,
            sec: '00',
        }
    } else {
        const min = Math.floor(seconds / 60)
        const formSec = Math.floor(seconds % 60)
        const sec =
            String(formSec).length == 1
                ? '0' + String(formSec)
                : String(formSec)
        return {
            min,
            sec,
        }
    }
}

const SoundPlayer = ({ id, episodes, getTime, style }: Props) => {
    const [play, { pause, duration, sound }] = useSound(episodes[id].audio)
    const [isPlaying, setIsPlaying] = useState(false)
    const [currTime, setCurrTime] = useState(formatTime(0))
    const [fullTime, setFullTime] = useState({
        min: 0,
        sec: '00',
        duration: 0,
    })
    const range = useRef<HTMLInputElement | null>(null)

    const handleInputBack = () => {
        if (range.current) {
            const min = Number(range.current.min)
            const max = Number(range.current.max)
            const val = Number(range.current.value)
            const result = ((val - min) * 100) / (max - min)
            range.current.style.backgroundSize = String(result) + '% 100%'
        }
    }

    useEffect(() => {
        getTime(fullTime)
    }, [fullTime, getTime])

    useEffect(() => {
        if (duration) {
            const sec = duration / 1000
            setFullTime({
                ...formatTime(sec),
                duration: sec,
            })
        }

        if (duration == 0) {
            setIsPlaying(false)
        }
    }, [duration])

    useEffect(() => {
        const interval = setInterval(() => {
            if (sound) {
                const currentTime = sound.seek([])
                setCurrTime(formatTime(currentTime))
            }
            handleInputBack()
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
            sound.seek([])
            console.log(isPlaying)
        }
    }

    return (
        <div className={styles.music_player} style={style}>
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
                            max={Math.floor(fullTime.duration)}
                            value={sound.seek([])}
                            className={styles.timeline}
                            onChange={(e) => {
                                sound.seek([e.target.value])
                                handleInputBack()
                            }}
                            ref={range}
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
                                {isPlaying ? <GiPauseButton /> : <FaPlay />}
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
