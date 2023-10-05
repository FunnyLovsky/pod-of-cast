import React from 'react'
import styles from './filterPosts.module.scss'
import Container from '../../components/ui/Container/Container'
import Search from '../../components/ui/Search/Search'
import { blogs } from '../../components/BlogCard/data/blogs'
import BlogCard from '../../components/BlogCard/BlogCard'

const FilterPosts = () => {
    return (
        <div className={styles.filter}>
            <Search />
            <Container>
                <h1 className={styles.title}>Latest Posts</h1>
                <div className={styles.categories}>
                    <div className={styles.inner}>
                        <button>All</button>
                        <button>Business</button>
                        <button>News</button>
                        <button>Tips & Trick</button>
                        <button>Podcast</button>
                        <button>Productivity</button>
                    </div>
                    <div className={styles.stroke}></div>
                </div>
                <div className={styles.post_inner}>
                    {blogs.map((elem, index) => (
                        <BlogCard
                            key={index}
                            img={elem.img}
                            name={elem.name}
                            title={elem.title}
                            tags={elem.tags}
                            date={elem.date}
                            href={elem.href}
                        />
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default FilterPosts
