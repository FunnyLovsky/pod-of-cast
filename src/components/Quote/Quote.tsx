import React from 'react'
import styles from './quote.module.scss'
import AVATAR from '../../assets/images/photos/avatar.png'
import ICON from '../../assets/images/icons/spotife_icon.svg'
import STAR from '../../assets/images/vectors/star.svg'
import VECTOR_1 from '../../assets/images/vectors/vector_1.svg'

const Quote = () => {
    return (
        <div className={styles.quote}>
            <div className={styles.elem}>“</div>
            <h4 className={styles.title}>
                One of the best daily podcasts that covers every topic on
                Spotify.
            </h4>
            <div className={styles.users}>
                <div className={styles.item}>
                    <img src={AVATAR} alt="" />
                    <h4 className={styles.name}>John Smith,</h4>
                </div>
                <div className={styles.item}>
                    <img src={ICON} alt="" />
                    <h4>Social Community Manager</h4>
                </div>
            </div>
            <img src={STAR} alt="star" className={styles.star} />
            <img src={VECTOR_1} alt="vector" className={styles.vector} />
        </div>
    )
}

export default Quote
