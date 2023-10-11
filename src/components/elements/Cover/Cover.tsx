import React from 'react'
import styles from './cover.module.scss'
import { episodeImg } from '../../../data/episodeImg'
import Image from '../../ui/Image/Image'

const Cover = () => {
    return (
        <>
            <div className={styles.cover}>
                {episodeImg.map((elem, index) => (
                    <Image key={index} elem={elem} text={true} />
                ))}
            </div>
        </>
    )
}

export default Cover
