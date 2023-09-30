import React from 'react'
import styles from './navlink.module.scss'
import { NavLink } from 'react-router-dom'

interface Props {
    children: string | JSX.Element | JSX.Element[]
    href: string
}

const NavLinks = ({ children, href }: Props) => {
    return (
        <NavLink to={href} className={styles.link}>
            {children}
        </NavLink>
    )
}

export default NavLinks
