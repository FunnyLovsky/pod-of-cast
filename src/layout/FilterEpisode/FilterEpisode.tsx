import React from 'react'
import styles from './filterEpisode.module.scss'
import Container from '../../components/ui/Container/Container'
import Search from '../../components/ui/Search/Search'
import { items } from '../../components/PodCastCard/data/episodes'
import PodCastCard from '../../components/PodCastCard/PodCastCard'

const FilterEpisode = () => {
    return (
        <div className={styles.filter}>
            <Search />
            <Container>
                <h1 className={styles.title}>Latest Episodes</h1>
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
            </Container>
        </div>
    )
}

export default FilterEpisode
