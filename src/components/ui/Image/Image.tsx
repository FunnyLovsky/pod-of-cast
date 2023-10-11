import { EpisodeImg } from '../../../types/types'
import styles from './image.module.scss'

interface Props {
    elem: EpisodeImg
    text: boolean
}

const Image: React.FC<Props> = ({ elem, text }) => {
    return (
        <div className={styles.item}>
            {text ? <h4 className={styles.title}>{elem.title}</h4> : null}
            <img src={elem.icons} alt="platform" className={styles.icons} />
            <img
                src={elem.img}
                alt={elem.title}
                className={styles.background}
            />
        </div>
    )
}

export default Image
