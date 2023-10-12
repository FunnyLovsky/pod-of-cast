import React, { FC, useEffect } from 'react'
import Container from '../../../components/ui/Container/Container'
import styles from './features.module.scss'
import Title from '../../../components/ui/Title/Title'
import Scribble from '../../../components/ui/Scribble/Scribe'

import { features } from '../../../data/features'
import SCRIBBLE from '../../../assets/images/vectors/scribble_1.svg'
import Links from '../../../components/ui/Links/Links'
import { useAdaptiveElem } from '../../../hooks/useAdaptiveElem'
import Button from '../../../components/ui/Button/Button'

const Features: FC = () => {
    const {
        isAdaptive,
        countImg,
        nameBtn,
        handleAdaptiveCover,
        showAdaptiveCover,
    } = useAdaptiveElem(450, 2, 6)

    useEffect(() => {
        window.addEventListener('resize', showAdaptiveCover)

        return () => window.removeEventListener('resize', showAdaptiveCover)
    }, [showAdaptiveCover])
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
                {!isAdaptive && (
                    <>
                        <div className={styles.inner}>
                            {features.map((elem, index) => (
                                <div className={styles.item} key={index}>
                                    <img src={elem.icon} alt="s" />
                                    <h3>{elem.title}</h3>
                                    <h5>
                                        Lorem ipsum dolor sit amet consectet pis
                                        cing elit, sed do eiusmod tempor.
                                    </h5>
                                </div>
                            ))}
                        </div>
                        <Links href="/#price">SEE PRICING</Links>
                    </>
                )}

                {isAdaptive && (
                    <>
                        <div className={styles.inner}>
                            {features.slice(0, countImg).map((elem, index) => (
                                <div className={styles.item} key={index}>
                                    <img src={elem.icon} alt="s" />
                                    <h3>{elem.title}</h3>
                                    <h5>
                                        Lorem ipsum dolor sit amet consectet pis
                                        cing elit, sed do eiusmod tempor.
                                    </h5>
                                </div>
                            ))}
                        </div>
                        <Button onClick={() => handleAdaptiveCover()}>
                            {nameBtn}
                        </Button>
                    </>
                )}
            </Container>
        </div>
    )
}

export default Features
