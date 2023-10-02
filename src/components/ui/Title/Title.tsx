import React from 'react'
import styles from './title.module.scss'

interface Props {
    title: string
    subtitle: string
}

const Title = ({ title, subtitle }: Props) => {
    return (
        <>
            <h1 className={styles.title}>{title}</h1>
            <h4 className={styles.subtitle}>{subtitle}</h4>
        </>
    )
}

export default Title
