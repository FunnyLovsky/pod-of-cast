import React from 'react'
import styles from './button.module.scss'

type Button = {
    children: string | JSX.Element
}

const Button = ({ children }: Button) => {
    return <button className={styles.btn}>{children}</button>
}

export default Button
