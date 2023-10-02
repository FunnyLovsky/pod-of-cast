import React, { FC } from 'react'
import Container from '../../components/ui/Container/Container'
import styles from './episodes.module.scss'
import Title from '../../components/ui/Title/Title'
import Scribble from '../../components/ui/Scribble/Scribe'
import Button from '../../components/ui/Button/Button'
import AVATAR from '../../assets/images/photos/avatar_5.png'
import AVATAR_1 from '../../assets/images/photos/avatar_6.png'
import SPARKLE from '../../assets/images/vectors/sparkle_1.svg'
import { items } from './data/episodes'
import { Link } from 'react-router-dom'

const Episodes: FC = () => {
    return (
        <div className={styles.episodes}>
            <Scribble type="black" />

            <Container>
                <Title
                    title="Recent Episodess"
                    subtitle="Available on your favorite platform"
                />
                <img src={SPARKLE} alt="scribble" className={styles.sparkie} />

                <div className={styles.inner}>
                    {items.map((elem, index) => (
                        <Link
                            className={styles.card}
                            key={index}
                            to={elem.href}
                        >
                            <div className={styles.cover}>
                                <img
                                    src={elem.img}
                                    alt="images"
                                    className={styles.cover_img}
                                />
                                <div className={styles.cover_title}>
                                    <h3 className={styles.number}>
                                        Eps. {elem.id}
                                    </h3>
                                    <h1 className={styles.title}>
                                        {elem.title}
                                    </h1>
                                    <div className={styles.stroke}></div>
                                    <h3 className={styles.subtitle}>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Curabitur ac ultrices
                                        odio.
                                    </h3>
                                </div>
                            </div>
                            <div className={styles.tag_inner}>
                                <div className={styles.tags_item}>
                                    {elem.tags.map((item, index) => (
                                        <div className={styles.tag} key={index}>
                                            {item}
                                        </div>
                                    ))}
                                </div>
                                <div className={styles.hostes_item}>
                                    <h4 className={styles.hostes_title}>
                                        Hosted by:
                                    </h4>
                                    <img src={AVATAR} alt="hostes" />
                                    <img
                                        src={AVATAR_1}
                                        alt="hostes"
                                        className={styles.hostes_img}
                                    />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <Button>
                    <Link to="/episode">BROWSE ALL EPISODES</Link>
                </Button>
            </Container>
        </div>
    )
}

export default Episodes
