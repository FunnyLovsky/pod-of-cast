import React from 'react'
import styles from './scribble.module.scss'
import SCRIBBLE_ORANGE from '../../../assets/images/vectors/scribble_orange.svg'
import SCRIBBLE_BLACK from '../../../assets/images/vectors/scribble_black.svg'

interface Props {
    type: string
}

const Scribble = ({ type }: Props) => {
    return (
        <img
            src={type == 'orange' ? SCRIBBLE_ORANGE : SCRIBBLE_BLACK}
            alt="scribble"
            className={styles.scribe}
        />
    )
}

export default Scribble
