import SCRIBBLE from '../../../assets/images/vectors/scribble.svg'
import SHINING_STAR from '../../../assets/images/vectors/shining_stars.svg'
import FACE_1 from '../../../assets/images/vectors/face_1.svg'
import FACE_5 from '../../../assets/images/vectors/face_5.svg'
import FIRE from '../../../assets/images/vectors/fire.svg'
import STAR from '../../../assets/images/vectors/star_lil.svg'

interface Prop {
    icon: string
    title: string
}

export const item: Prop[] = [
    {
        icon: SCRIBBLE,
        title: 'Topic by Request',
    },
    {
        icon: SHINING_STAR,
        title: 'Exclusive Content',
    },
    {
        icon: FACE_1,
        title: 'Join the Community',
    },
    {
        icon: FACE_5,
        title: 'Livestreaming Access',
    },
    {
        icon: FIRE,
        title: 'Exclusive Episodes & Merch',
    },
    {
        icon: STAR,
        title: 'And much more!',
    },
]
