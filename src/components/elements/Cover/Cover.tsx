import React, { useEffect } from 'react'
import styles from './cover.module.scss'
import { episodeImg } from '../../../data/episodeImg'
import Image from '../../ui/Image/Image'
import Button from '../../ui/Button/Button'
import { AiOutlineDown } from '@react-icons/all-files/ai/AiOutlineDown'
import { useAdaptiveElem } from '../../../hooks/useAdaptiveElem'

const Cover = () => {
    const {
        isAdaptive,
        countImg,
        nameBtn,
        handleAdaptiveCover,
        showAdaptiveCover,
    } = useAdaptiveElem(650, 2, 6)

    useEffect(() => {
        showAdaptiveCover()
        window.addEventListener('resize', showAdaptiveCover)

        return () => window.removeEventListener('resize', showAdaptiveCover)
    }, [showAdaptiveCover])

    return (
        <>
            {!isAdaptive && (
                <div className={styles.cover}>
                    {episodeImg.map((elem, index) => (
                        <Image key={index} elem={elem} text={true} />
                    ))}
                </div>
            )}

            {isAdaptive && (
                <>
                    <div className={styles.cover}>
                        {episodeImg.slice(0, countImg).map((elem, index) => (
                            <Image key={index} elem={elem} text={true} />
                        ))}
                    </div>
                    <Button onClick={() => handleAdaptiveCover()}>
                        {nameBtn} <AiOutlineDown />
                    </Button>
                </>
            )}
        </>
    )
}

export default Cover
