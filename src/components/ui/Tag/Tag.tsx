import React, { FC } from 'react'
import styles from './tag.module.scss'

interface Prop {
    children: string | JSX.Element
}

const Tag: FC<Prop> = ({ children }: Prop) => {
    return <div className={styles.tag}>{children}</div>
}

export default Tag
