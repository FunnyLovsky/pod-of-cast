import { Link } from 'react-router-dom'
import styles from './podCastCard.module.scss'
import AVATAR from '../../assets/images/photos/avatar_5.png'
import AVATAR_1 from '../../assets/images/photos/avatar_6.png'

interface Props {
    id: number
    href: string
    img: string
    title: string
    tags: string[]
}

const PodCastCard = ({ id, href, img, title, tags }: Props) => {
    return (
        <Link className={styles.card} to={`${href}/${id}`}>
            <div className={styles.cover}>
                <img src={img} alt="images" className={styles.cover_img} />
                <div className={styles.cover_title}>
                    <h3 className={styles.number}>Eps. {id}</h3>
                    <h1 className={styles.title}>{title}</h1>
                    <div className={styles.stroke}></div>
                    <h3 className={styles.subtitle}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur ac ultrices odio.
                    </h3>
                </div>
            </div>
            <div className={styles.tag_inner}>
                <div className={styles.tags_item}>
                    {tags.map((item, index) => (
                        <div className={styles.tag} key={index}>
                            {item}
                        </div>
                    ))}
                </div>
                <div className={styles.hostes_item}>
                    <h4 className={styles.hostes_title}>Hosted by:</h4>
                    <img src={AVATAR} alt="hostes" />
                    <img
                        src={AVATAR_1}
                        alt="hostes"
                        className={styles.hostes_img}
                    />
                </div>
            </div>
        </Link>
    )
}

export default PodCastCard
