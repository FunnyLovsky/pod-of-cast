import React from 'react'
import styles from './navlink.module.scss'

interface Props {
    children: string | JSX.Element | JSX.Element[]
    href: string
}

const NavLink = ({ children, href }: Props) => {
    return (
        <a href={href} className={styles.link}>
            {children}
        </a>
    )
}

export default NavLink
