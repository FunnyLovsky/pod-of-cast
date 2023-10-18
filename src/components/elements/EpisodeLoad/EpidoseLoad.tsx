import styles from './episodeLoad.module.scss'

const EpisodeLoad = () => {
    return (
        <div className={styles.card}>
            <div className={styles.cover}>
                <div className={styles.cover_img}></div>
                <div className={styles.cover_title}>
                    <div className={styles.number}></div>
                    <div className={styles.title}></div>
                    <div className={styles.stroke}></div>
                    <div className={styles.subtitle}></div>
                    <div className={styles.subtitle}></div>
                </div>
            </div>
            <div className={styles.tag_inner}>
                <div className={styles.tags_item}>
                    <div className={styles.tag}></div>
                    <div className={styles.tag}></div>
                </div>
                <div className={styles.hostes_item}>
                    <div className={styles.hostes_title}></div>
                    <div></div>
                    <div className={styles.hostes_img}></div>
                </div>
            </div>
        </div>
    )
}

export default EpisodeLoad
