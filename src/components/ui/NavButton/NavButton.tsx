import React from 'react'
import styles from './navButton.module.css'

interface Button {
    children: string
    type: string
}

const NavButton = ({ children, type }: Button) => {
    return <button className={styles[type]}>{children}</button>
}

export default NavButton
