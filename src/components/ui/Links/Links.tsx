import React from 'react'
import styles from './links.module.scss'
import { Link } from 'react-router-dom'

interface Props {
    children: string | JSX.Element | JSX.Element[]
    href: string
}

const Links = ({ children, href }: Props) => {
    return (
        <div className={styles.cont}>
            <Link to={href} className={styles.link}>
                {children}
            </Link>
        </div>
    )
}

export default Links
