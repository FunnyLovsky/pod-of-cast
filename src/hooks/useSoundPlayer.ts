import { useState, useRef, useEffect } from 'react'
import useSound from 'use-sound'
import { Episodes } from '../types/types'

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

export function useSoundPlayer(episodeAudio: Episodes) {
    const [play, { pause, duration, sound }] = useSound(episodeAudio.audio)
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
            console.log(isPlaying)
        }
    }

    return { sound, currTime, fullTime, togglePlayback, range }
}
