import React from 'react'
import styles from './notFound.module.scss'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className={styles.error}>
            <div className={styles.item}>
                <h1>404</h1>
                <h3>Oops, page not found!</h3>
                <Link to="/">Back to page</Link>
            </div>
        </div>
    )
}

export default NotFound
