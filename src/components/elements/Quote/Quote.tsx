import React from 'react'
import styles from './quote.module.scss'
import AVATAR from '../../../assets/images/photos/avatar.png'
import ICON from '../../../assets/images/icons/spotife_icon.svg'
import STAR from '../../../assets/images/vectors/star.svg'
import VECTOR_1 from '../../../assets/images/vectors/vector_1.svg'
import UserPlatform from '../UserPlatform/UserPlatform'

const Quote = () => {
    return (
        <div className={styles.quote}>
            <div className={styles.elem}>“</div>
            <h4 className={styles.title}>
                One of the best daily podcasts that covers every topic on
                Spotify.
            </h4>
            <UserPlatform
                avatar={AVATAR}
                name="John Smith,"
                icon={ICON}
                text="Social Community Manager"
                aling="center"
            />
            <img src={STAR} alt="star" className={styles.star} />
            <img src={VECTOR_1} alt="vector" className={styles.vector} />
        </div>
    )
}

export default Quote
