import React, { ChangeEvent, useEffect, useState } from 'react'
import styles from './search.module.scss'
import SEARCH from '../../../assets/images/icons/search.svg'
import { Link } from 'react-router-dom'
import { Episodes, Blogs } from '../../../types/types'

interface ArrayProps {
    array: (Episodes | Blogs)[]
}

const Search: React.FC<ArrayProps> = ({ array }) => {
    const [value, setValue] = useState('')
    const [searchResult, setSearchResult] = useState<(Episodes | Blogs)[]>([])

    useEffect(() => {
        if (value.trim() === '') {
            setSearchResult([])
            return
        }

        const result = array.filter((search) =>
            search.title.toLowerCase().includes(value.toLowerCase(), 0)
        )
        setSearchResult(result)
    }, [value, array])

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value
        setValue(inputValue)
    }

    return (
        <div className={styles.inner}>
            <form className={styles.input} onSubmit={(e) => e.preventDefault()}>
                <img src={SEARCH} alt="search" />
                <input
                    type="text"
                    placeholder="Search..."
                    value={value}
                    onChange={handleChange}
                />
            </form>

            {searchResult.length > 0 && (
                <div className={styles.result_search}>
                    {searchResult.map((item, index) => (
                        <Link
                            to={`${item.href}/${item.id}`}
                            key={index}
                            className={styles.item}
                        >
                            <img src={SEARCH} alt="search" />
                            <h3>{item.title.toLowerCase()}</h3>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Search
