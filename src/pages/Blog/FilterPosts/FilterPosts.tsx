import React from 'react'
import styles from './filterPosts.module.scss'
import Container from '../../../components/ui/Container/Container'
import Search from '../../../components/elements/Search/Search'
import { blogs, blogsCategory } from '../../../data/blogs'
import BlogCard from '../../../components/elements/BlogCard/BlogCard'
import { useFilter } from '../../../hooks/useFilter'
import NOT_FOUND from '../../../assets/images/icons/not_found.png'

const FilterPosts = () => {
    const { activeCategory, filterItems, filterArray } = useFilter(
        blogs,
        blogsCategory
    )
    return (
        <div className={styles.filter}>
            <Search array={blogs} />
            <Container>
                <h1 className={styles.title}>Latest Posts</h1>
                <div className={styles.categories}>
                    <div className={styles.inner}>
                        {blogsCategory.map((category, index) => (
                            <button
                                key={index}
                                onClick={() => filterItems(category)}
                                className={
                                    category === activeCategory
                                        ? styles.active
                                        : ''
                                }
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                    <div className={styles.stroke}></div>
                </div>
                <div className={styles.post_inner}>
                    {filterArray.length != 0 ? (
                        filterArray.map((elem, index) => (
                            <BlogCard
                                key={index}
                                img={elem.img}
                                name={elem.name}
                                title={elem.title}
                                tags={elem.tags}
                                date={elem.date}
                                href={elem.href}
                                id={elem.id}
                            />
                        ))
                    ) : (
                        <div className={styles.not_found}>
                            <img src={NOT_FOUND} alt="not_found" />
                            <h1>Posts not found</h1>
                        </div>
                    )}
                </div>
            </Container>
        </div>
    )
}

export default FilterPosts
