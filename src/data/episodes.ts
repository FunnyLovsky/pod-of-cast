import IMG_1 from '../assets/images/photos/cover_1.png'
import IMG_2 from '../assets/images/photos/cover_6.png'
import IMG_3 from '../assets/images/photos/cover_5.png'
import IMG_4 from '../assets/images/photos/cover_3.png'
import IMG_5 from '../assets/images/photos/cover_4.png'
import IMG_6 from '../assets/images/photos/cover_2.png'
import { Episodes } from '../types/types'

export const episodes: Episodes[] = [
    {
        id: 1,
        href: '/episode',
        img: IMG_6,
        title: `Are you a Perplexed Mind Person?`,
        tags: ['mind-behaviour', 'health'],
        category: 'health',
    },
    {
        id: 2,
        href: '/episode',
        img: IMG_5,
        title: 'Type of Social Classes of People',
        tags: ['social class', 'wealth'],
        category: 'business',
    },
    {
        id: 3,
        href: '/episode',
        img: IMG_4,
        title: 'How to Deal with Self–Confidence',
        tags: ['self-esteem', 'health'],
        category: 'health',
    },
    {
        id: 4,
        href: '/episode',
        img: IMG_3,
        title: `Women's Rights? Is it alright?`,
        tags: ['women’s rights'],
        category: 'education',
    },
    {
        id: 5,
        href: '/episode',
        img: IMG_2,
        title: 'Tesla Autopilot Controversy',
        tags: ['automation', 'tech'],
        category: 'tech',
    },
    {
        id: 6,
        href: '/episode',
        img: IMG_1,
        title: 'Pandemic Becoming Endemic',
        tags: ['covid-19', 'health'],
        category: 'health',
    },
]

export const episodeCategory: string[] = [
    'All',
    'Business',
    'Comedy',
    'Education',
    'Health',
    'News',
    'Tech',
]
