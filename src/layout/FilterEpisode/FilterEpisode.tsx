import React from 'react'
import styles from './filterEpisode.module.scss'
import Container from '../../components/ui/Container/Container'
import Search from '../../components/ui/Search/Search'
import { episodes } from '../../data/episodes'
import EpisodeCard from '../../components/EpisodeCard/EpisodeCard'

const FilterEpisode = () => {
    return (
        <div className={styles.filter}>
            <Search array={episodes} />
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
                    {episodes.map((elem, index) => (
                        <EpisodeCard
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
