import React from 'react'
import styles from './blogCard.module.scss'

import { Link } from 'react-router-dom'
import Tag from '../../ui/Tag/Tag'
import { Blogs } from '../../../types/types'

const BlogCard = ({ img, name, title, tags, date, href, id }: Blogs) => {
    return (
        <Link to={`${href}/${id}`} className={styles.item}>
            <img src={img} alt="img" />
            <h3 className={styles.name}>{name}</h3>
            <h1 className={styles.title}>{title}</h1>
            <h3 className={styles.subtitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minimvel iam, quis nostrud exercitation ullamco
                laboris...
            </h3>
            <div className={styles.stroke}></div>
            <div className={styles.tags_inner}>
                <div className={styles.tags}>
                    {tags.map((tag, index) => (
                        <Tag key={index}>{tag}</Tag>
                    ))}
                </div>
                <h5 className={styles.date}>{date}</h5>
            </div>
        </Link>
    )
}

export default BlogCard
