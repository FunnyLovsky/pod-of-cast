import React, { useState } from 'react'
import styles from './cover.module.scss'
import ICONS from '../../assets/images/vectors/platform.svg'
// import COVER_1 from '../../../assets/images/photos/cover_1.png'
import COVER_2 from '../../assets/images/photos/cover_2.png'
import COVER_3 from '../../assets/images/photos/cover_3.png'
import COVER_4 from '../../assets/images/photos/cover_4.png'
import COVER_5 from '../../assets/images/photos/cover_5.png'
import COVER_6 from '../../assets/images/photos/cover_6.png'

const Cover = () => {
    const [cover] = useState([
        // {
        //     img: COVER_1,
        //     title: 'COVID-19 Endemic',
        // },
        {
            img: COVER_2,
            title: 'Perplexed Mind',
        },
        {
            img: COVER_3,
            title: 'Self–confidence',
        },
        {
            img: COVER_4,
            title: 'Social Classe',
        },
        {
            img: COVER_5,
            title: 'Women’s Rights',
        },
        {
            img: COVER_6,
            title: 'Tesla Autopilot',
        },
    ])
    return (
        <>
            <div className={styles.cover}>
                {cover.map((elem) => (
                    <div key={elem.img} className={styles.item}>
                        <h4 className={styles.title}>{elem.title}</h4>
                        <img
                            src={ICONS}
                            alt="platform"
                            className={styles.icons}
                        />
                        <img
                            src={elem.img}
                            alt={elem.title}
                            className={styles.background}
                        />
                    </div>
                ))}
            </div>
        </>
    )
}

export default Cover
