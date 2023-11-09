import React from 'react'
import styles from './filter.module.scss'
import Container from '../../../components/ui/Container/Container'
import Search from '../../../components/elements/Search/Search'
import EpisodeCard from '../../../components/elements/EpisodeCard/EpisodeCard'
import NOT_FOUND from '../../../assets/images/icons/not_found.png'
import { useFilter } from '../../../hooks/useFilter'
import { episodeCategory } from '../../../data/episodes'
import { useAppSelector } from '../../../store/hooks/hook'
import { URL_SERVER } from '../../../constans/const'

const Filter = () => {
    const { episodes } = useAppSelector((state) => state.episodeReducer)

    const { activeCategory, filterItems, filterArray } = useFilter(
        episodes,
        episodeCategory
    )

    return (
        <div className={styles.filter}>
            <Search array={episodes} />
            <Container>
                <h1 className={styles.title}>Latest Episodes</h1>
                <div className={styles.categories}>
                    <div className={styles.inner}>
                        {episodeCategory.map((category, index) => (
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
                            <EpisodeCard
                                key={index}
                                id={elem.id}
                                href={elem.href}
                                img={URL_SERVER + elem.img}
                                title={elem.title}
                                tags={elem.tags}
                            />
                        ))
                    ) : (
                        <div className={styles.not_found}>
                            <img src={NOT_FOUND} alt="not_found" />
                            <h1>Episodes not found</h1>
                        </div>
                    )}
                </div>
            </Container>
        </div>
    )
}

export default Filter
