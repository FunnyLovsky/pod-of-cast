import { useState } from 'react'

export function useAdaptiveElem(width: number, min?: number, max?: number) {
    const [isAdaptive, setIsAdaptive] = useState(false)
    const [countImg, setCountImg] = useState(min)
    const [nameBtn, setNameBtn] = useState('See more')

    const showAdaptiveCover = () => {
        if (document.documentElement.offsetWidth <= width) {
            setIsAdaptive(true)
        } else {
            setIsAdaptive(false)
            setCountImg(min)
            setNameBtn('See more')
        }
    }

    const handleAdaptiveCover = () => {
        if (countImg == min) {
            setCountImg(max)
            setNameBtn('Close more')
        } else {
            setCountImg(min)
            setNameBtn('See more')
        }
    }

    return {
        isAdaptive,
        countImg,
        nameBtn,
        handleAdaptiveCover,
        showAdaptiveCover,
    }
}
