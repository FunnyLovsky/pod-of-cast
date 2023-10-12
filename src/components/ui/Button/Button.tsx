import React from 'react'
import styles from './button.module.scss'

type Button = {
    children: React.ReactNode
    onClick?: () => void
}

const Button = ({ children, onClick }: Button) => {
    return (
        <button onClick={onClick} className={styles.btn}>
            {children}
        </button>
    )
}

export default Button
