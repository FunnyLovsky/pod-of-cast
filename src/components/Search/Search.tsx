import React, { useState } from 'react'
import styles from './search.module.scss'
import SEARCH from '../../assets/images/icons/search.svg'
import { Episodes, Blogs } from '../../types/types'
import SearchResultItem from '../ui/SearchResultItem/SearchResultItem'
import { useSearch } from '../../hooks/useSearch'

interface ArrayProps {
    array: (Episodes | Blogs)[]
}

const Search: React.FC<ArrayProps> = ({ array }) => {
    const { value, setValue, searchResult } = useSearch(array)
    const [isFocus, setIsFocus] = useState(false)

    return (
        <div className={styles.inner}>
            <form className={styles.input} onSubmit={(e) => e.preventDefault()}>
                <img src={SEARCH} alt="search" />
                <input
                    type="text"
                    placeholder="Search..."
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setTimeout(() => setIsFocus(false), 100)}
                />
            </form>

            {isFocus && searchResult.length > 0 && (
                <div className={styles.result_search}>
                    {searchResult.map((item, index) => (
                        <SearchResultItem
                            key={index}
                            item={item}
                            value={value}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Search
