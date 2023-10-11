import React from 'react'
import styles from './introTitle.module.scss'
import Container from '../../ui/Container/Container'
import VECTOR_1 from '../../../assets/images/vectors/vector_4.svg'
import VECTOR_2 from '../../../assets/images/vectors/vector_2.svg'

interface Props {
    title: string
    span: string
    long: boolean
}

const IntroTitle = ({ title, span, long }: Props) => {
    return (
        <>
            <div
                className={styles.intro}
                style={long ? {} : { paddingBottom: '177px' }}
            >
                <Container>
                    <div className={styles.item}>
                        <h1 className={styles.title}>
                            {title}
                            <h1
                                className={styles.title}
                                style={{ color: '#CD4631' }}
                            >
                                {span}
                            </h1>
                        </h1>
                        <h4 className={styles.subtitle}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam–quis.
                        </h4>
                        {long ? (
                            <div>
                                <button>BECOME SPONSOR</button>{' '}
                                <button>Subscribe</button>
                            </div>
                        ) : null}
                    </div>
                    <img src={VECTOR_1} alt="" className={styles.vector} />
                    <img src={VECTOR_2} alt="" className={styles.vector_2} />
                </Container>
            </div>
        </>
    )
}

export default IntroTitle
