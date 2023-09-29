import React from 'react'
import SCRIBBLE from '../../assets/images/vectors/scribble.svg'
import styles from './about.module.scss'
import Container from '../../components/ui/Container/Container'
import ILLUST_1 from '../../assets/images/vectors/illust_1.svg'
import ILLUST_2 from '../../assets/images/vectors/illust_2.svg'
import Quote from '../../components/Quote/Quote'

const About = () => {
    return (
        <div className={styles.about}>
            <Container>
                <img src={SCRIBBLE} alt="scribble" className={styles.scribe} />
                <h1 className={styles.title}>
                    Talk. Listen. Get inspired by every minute of it.
                </h1>
                <div className={styles.container}>
                    <div className={styles.item}>
                        <img src={ILLUST_1} alt="illustration" />
                        <h4>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Curabitur ac ultrices odio.
                        </h4>
                    </div>
                    <div className={styles.item}>
                        <img src={ILLUST_2} alt="illustration" />
                        <h4>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Curabitur ac ultrices odio.
                        </h4>
                    </div>
                </div>
                <Quote />
            </Container>
        </div>
    )
}

export default About
