import React from 'react'
import styles from './navButton.module.scss'

interface Button {
    children: string
    type: string
}

const NavButton = ({ children, type }: Button) => {
    return (
        <button className={[styles[type], styles.btn].join(' ')}>
            {children}
        </button>
    )
}

export default NavButton
