import React from 'react'
import styles from './search.module.scss'
import SEARCH from '../../../assets/images/icons/search.svg'

const Search = () => {
    return (
        <div className={styles.inner}>
            <div className={styles.input}>
                <img src={SEARCH} alt="seacrh" />
                <input type="text" placeholder="Search..." />
            </div>
        </div>
    )
}

export default Search
