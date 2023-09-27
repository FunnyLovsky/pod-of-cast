import React from 'react'
import styles from './intro.module.css'
import Container from '../../ui/Container/Container'
const Intro = () => {
    return (
        <>
            <div className={styles.intro}>
                <Container>
                    <div className={styles.item}>
                        <h1 className="title">Your Daily Podcast</h1>
                        <h4 className="subtitle">
                            We cover all kinds of categories and a weekly
                            special guest.
                        </h4>
                        <button>Subscribe</button>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Intro
