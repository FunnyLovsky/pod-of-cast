import React, { FC } from 'react'
import Container from '../../../components/ui/Container/Container'
import styles from './features.module.scss'
import Title from '../../../components/ui/Title/Title'
import Scribble from '../../../components/ui/Scribble/Scribe'

import { features } from '../../../data/features'
import SCRIBBLE from '../../../assets/images/vectors/scribble_1.svg'
import Links from '../../../components/ui/Links/Links'

const Features: FC = () => {
    return (
        <div className={styles.features}>
            <Scribble type="black" />

            <Container>
                <Title
                    title="Membership benefits"
                    subtitle="Become our sponsor and get all benefits"
                />
                <img
                    src={SCRIBBLE}
                    alt="scribble"
                    className={styles.scribble}
                />
                <div className={styles.inner}>
                    {features.map((elem, index) => (
                        <div className={styles.item} key={index}>
                            <img src={elem.icon} alt="s" />
                            <h3>{elem.title}</h3>
                            <h5>
                                Lorem ipsum dolor sit amet consectet pis cing
                                elit, sed do eiusmod tempor.
                            </h5>
                        </div>
                    ))}
                </div>
                <Links href="/#price">SEE PRICING</Links>
            </Container>
        </div>
    )
}

export default Features
