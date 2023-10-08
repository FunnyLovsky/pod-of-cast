import IMG_1 from '../assets/images/photos/img_1.png'
import IMG_2 from '../assets/images/photos/img_2.png'
import { Blogs } from '../types/types'

export const blogs: Blogs[] = [
    {
        img: IMG_1,
        name: 'PODCAST',
        title: 'Setup your own podcast',
        tags: ['business', 'startup'],
        date: 'Sep 14, 2021',
        href: '/blog',
        id: 1,
        category: 'business',
    },
    {
        img: IMG_2,
        name: 'TIPS & TRICK',
        title: 'Doodle artwork 101',
        tags: ['art', 'creative', 'tips and trick'],
        date: 'Sep 12, 2021',
        href: '/blog',
        id: 2,
        category: 'tips & trick',
    },
    {
        img: IMG_2,
        name: 'NEWS',
        title: 'Mother Nature Taking Over',
        tags: ['news', 'nature'],
        date: 'Sep 10, 2021',
        href: '/blog',
        id: 3,
        category: 'news',
    },
    {
        img: IMG_2,
        name: 'PRODUCTIVITY',
        title: 'How to Be Productive',
        tags: ['productivity', 'mindset'],
        date: 'Sep 8, 2021',
        href: '/blog',
        id: 4,
        category: 'productivity',
    },
]

export const blogsCategory: string[] = [
    'All',
    'Business',
    'News',
    'Tips & Trick',
    'Podcast',
    'Productivity',
]
