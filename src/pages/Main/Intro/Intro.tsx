import React from 'react'
import styles from './intro.module.scss'
import Container from '../../../components/ui/Container/Container'
import VECTOR_1 from '../../../assets/images/vectors/vector_4.svg'
import VECTOR_2 from '../../../assets/images/vectors/vector_2.svg'
import Cover from '../../../components/elements/Cover/Cover'
import Support from '../../../components/elements/Support/Support'

const Intro = () => {
    return (
        <>
            <div data-name="intro" className={styles.intro}>
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
                        <button>Subscribe</button>
                    </div>
                    <img src={VECTOR_1} alt="" className={styles.vector} />
                    <img src={VECTOR_2} alt="" className={styles.vector_2} />
                </Container>
                <Cover />
                <Container>
                    <Support />
                </Container>
            </div>
        </>
    )
}

export default Intro
