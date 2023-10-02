import React, { FC } from 'react'
import Container from '../../components/ui/Container/Container'
import styles from './pricing.module.scss'
import Title from '../../components/ui/Title/Title'
import Scribble from '../../components/ui/Scribble/Scribe'
import { items } from './data/pricing'
import STAR from '../../assets/images/vectors/star.svg'
import Button from '../../components/ui/Button/Button'
import SPARKLE from '../../assets/images/vectors/sparkle_1.svg'
import VECTOR from '../../assets/images/vectors/vector_3.svg'

const Pricing: FC = () => {
    return (
        <div className={styles.pricing}>
            <Scribble type="black" />

            <Container>
                <img src={SPARKLE} alt="sparkle" className={styles.sparkle} />
                <Title
                    title="Become our sponsor"
                    subtitle="Get exclusive episodes, merch and more"
                />

                <div className={styles.inner}>
                    <img src={STAR} alt="star" className={styles.star} />
                    {items.map((elem, index) => (
                        <div className={styles.item} key={index}>
                            <div className={styles.price} style={elem.style}>
                                <h1 className={styles.title}>
                                    {elem.title}
                                    {elem.special ? (
                                        <div className={styles.special}>
                                            MOST POPULAR
                                        </div>
                                    ) : null}
                                </h1>

                                <h3 className={styles.subtitle}>
                                    Lorem ipsum dolor sit amet consectet cing
                                    elit, sed do eiusmod tempor.
                                </h3>
                                <div className={styles.btn_inner}>
                                    <Button>SUBSCRIBE</Button>
                                    <div className={styles.cost_inner}>
                                        <div className={styles.cost}>
                                            ${elem.cost}
                                        </div>
                                        <div className={styles.month}>
                                            /month
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.benefit} style={elem.style}>
                                <h3 className={styles.benefit_title}>
                                    What’s included:
                                </h3>
                                <ul>
                                    {elem.benefit.map((item, index) => (
                                        <li
                                            key={index}
                                            className={styles.li}
                                            style={{
                                                fontWeight: `${item.style}`,
                                            }}
                                        >
                                            {item.text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                    <img src={VECTOR} alt="vector" className={styles.vector} />
                </div>
            </Container>
        </div>
    )
}

export default Pricing
