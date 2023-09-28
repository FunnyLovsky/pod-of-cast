import React from 'react'
import styles from './container.module.scss'

interface Props {
    children: string | JSX.Element | JSX.Element[]
}

const Container = ({ children }: Props) => {
    return <div className={styles.container}>{children}</div>
}

export default Container
