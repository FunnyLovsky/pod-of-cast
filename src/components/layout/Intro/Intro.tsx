import React, { useState } from 'react'
import styles from './intro.module.scss'
import Container from '../../ui/Container/Container'
import Button from '../../ui/Button/Button'
import VECTOR_1 from '../../../assets/images/vector_4.svg'
import VECTOR_2 from '../../../assets/images/vector_2.svg'

const Intro = () => {
    const [cover] = useState([
        {
            img: VECTOR_1,
            title: 's',
        },
    ])

    return (
        <>
            <div className={styles.intro}>
                <Container>
                    <div className={styles.item}>
                        <h1 className={styles.title}>
                            Your Daily{' '}
                            <span className={styles.orange}>Podcast</span>
                        </h1>
                        <h4 className={styles.subtitle}>
                            We cover all kinds of categories and a weekly
                            special guest.
                        </h4>
                        <Button>Subscribe</Button>
                    </div>
                    <img src={VECTOR_2} alt="" className={styles.vector_2} />
                </Container>
                <img src={VECTOR_1} alt="" className={styles.vector} />
                <div className={styles.cover}>
                    {cover.map((elem) => (
                        <div key={elem.img}>
                            <h4>{elem.title}</h4>
                            <img src={elem.img} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Intro
