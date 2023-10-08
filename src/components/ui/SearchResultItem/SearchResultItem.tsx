import React from 'react'
import styles from './searchResultItem.module.scss'
import { Blogs, Episodes } from '../../../types/types'
import { Link } from 'react-router-dom'
import SEARCH from '../../../assets/images/icons/search.svg'

interface SearchResultItemProps {
    item: Episodes | Blogs
    value: string
}

const SearchResultItem: React.FC<SearchResultItemProps> = ({ item, value }) => (
    <Link to={`${item.href}/${item.id}`} className={styles.item}>
        <img src={SEARCH} alt="search" />
        <h3 className={styles.title}>
            <span style={{ fontWeight: '700' }}>
                {item.title.slice(0, value.length).toLowerCase()}
            </span>
            {item.title.slice(value.length).toLowerCase()}
        </h3>
    </Link>
)

export default SearchResultItem
