import React, { useState } from 'react'
import styles from './recom.module.scss'
import Container from '../../components/ui/Container/Container'
import UserPlatform from '../../components/UserPlatform/UserPlatform'
import AVATAR_1 from '../../assets/images/photos/avatar_2.png'
import AVATAR_2 from '../../assets/images/photos/avatar_3.png'
import AVATAR_3 from '../../assets/images/photos/avatar_4.png'
import ICON from '../../assets/images/icons/spotife_icon.svg'

const Recom = () => {
    const [item] = useState([
        {
            id: 1,
            avatar: AVATAR_1,
            name: 'Luna lovegood,',
            icon: ICON,
            text: 'Spotify',
        },
        {
            id: 2,
            avatar: AVATAR_2,
            name: 'Emily Blunt,',
            icon: ICON,
            text: 'Spotify',
        },
        {
            id: 3,
            avatar: AVATAR_3,
            name: 'Mia Winters,',
            icon: ICON,
            text: 'Spotify',
        },
    ])

    return (
        <div className={styles.recom}>
            <Container>
                <h1 className={styles.title}>What our listeners say</h1>
                <h4 className={styles.subtitle}>
                    Their experience throughout every platform
                </h4>
                <div className={styles.slider}>
                    {item.map((elem) => (
                        <div key={elem.id} className={styles.item}>
                            <div className={styles.elem}>“</div>
                            <div className={styles.text}>
                                Lorem ipsum dolor sit amet consectet piscing
                                elit, sed do eiusmod tempor incidi ut labore et
                                dolore magna aliqua.
                            </div>
                            <UserPlatform
                                avatar={elem.avatar}
                                name={elem.name}
                                icon={elem.icon}
                                text={elem.text}
                                aling="left"
                            />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Recom
