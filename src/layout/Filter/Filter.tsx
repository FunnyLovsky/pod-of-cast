import React from 'react'
import styles from './filter.module.scss'
import Container from '../../components/ui/Container/Container'
import Search from '../../components/ui/Search/Search'
import BlogCard from '../../components/BlogCard/BlogCard'
import { items } from '../../components/PodCastCard/data/episodes'
import { blogs } from '../../components/BlogCard/data/blogs'
import PodCastCard from '../../components/PodCastCard/PodCastCard'

interface Props {
    type: string
}

const Filter = ({ type }: Props) => {
    const innerType = type == 'Episodes'

    return (
        <div className={styles.filter}>
            <Search />
            <Container>
                <h1 className={styles.title}>Latest {type}</h1>
                <div className={styles.categories}>
                    <div className={styles.inner}>
                        <button>All</button>
                        <button>Business</button>
                        <button>Comedy</button>
                        <button>Education</button>
                        <button>Health</button>
                        <button>News</button>
                        <button>Tech</button>
                    </div>
                    <div className={styles.stroke}></div>
                </div>
                {innerType ? (
                    <div className={styles.post_inner}>
                        {items.map((elem, index) => (
                            <PodCastCard
                                key={index}
                                id={elem.id}
                                href={elem.href}
                                img={elem.img}
                                title={elem.title}
                                tags={elem.tags}
                            />
                        ))}
                    </div>
                ) : (
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
                )}
            </Container>
        </div>
    )
}

export default Filter
