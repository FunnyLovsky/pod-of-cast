import React, { useRef } from 'react'
import styles from './recom.module.scss'
import Container from '../../../components/ui/Container/Container'
import UserPlatform from '../../../components/elements/UserPlatform/UserPlatform'
import Scribble from '../../../components/ui/Scribble/Scribe'
import SPARCKLE from '../../../assets/images/vectors/sparkle.svg'
import Title from '../../../components/ui/Title/Title'
import { AiOutlineRightCircle } from '@react-icons/all-files/ai/AiOutlineRightCircle'
import { AiOutlineLeftCircle } from '@react-icons/all-files/ai/AiOutlineLeftCircle'
import { recom } from '../../../data/recom'

const Recom = () => {
    const sliderRef = useRef<HTMLDivElement>(null)

    let itemWidth = 0

    const slideRight = () => {
        if (sliderRef.current && itemWidth < 570 * 2) {
            itemWidth += 570
            sliderRef.current.style.transform = `translateX(-${itemWidth}px)`
            console.log(itemWidth, sliderRef.current.offsetWidth)
        }
    }

    const slideLeft = () => {
        if (sliderRef.current && itemWidth != 0) {
            itemWidth -= 570
            sliderRef.current.style.transform = `translateX(-${itemWidth}px)`
            console.log(itemWidth, sliderRef.current.offsetWidth)
        }
    }

    return (
        <div className={styles.cont}>
            <div className={styles.recom}>
                <Scribble type="black" />
                <Container>
                    <img src={SPARCKLE} alt="" className={styles.decor} />
                    <Title
                        title="What our listeners say"
                        subtitle="Their experience throughout every platform"
                    />

                    <div className={styles.slider} ref={sliderRef}>
                        {recom.map((elem) => (
                            <div key={elem.id} className={styles.item}>
                                <div className={styles.elem}>“</div>
                                <div className={styles.text}>
                                    Lorem ipsum dolor sit amet consectet piscing
                                    elit, sed do eiusmod tempor incidi ut labore
                                    et dolore magna aliqua.
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
                    <div className={styles.arrows}>
                        <button onClick={() => slideLeft()}>
                            <AiOutlineLeftCircle />
                        </button>
                        <button onClick={() => slideRight()}>
                            <AiOutlineRightCircle />
                        </button>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Recom
