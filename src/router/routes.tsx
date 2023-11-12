import About from '../pages/About'
import Blog from '../pages/Blog'
import BLogItem from '../pages/BlogItem'
import Episode from '../pages/Episode'
import EpisodeItem from '../pages/EpisodeItem'
import Features from '../pages/Features'
import Main from '../pages/Main'
import Pricing from '../pages/Pricing'
import Testimonials from '../pages/Testimonials'

interface RouteType {
    path: string
    element: React.ReactNode
    page: string
}

export enum ROUTES {
    MAIN = '/',
    ABOUT = '/about',
    EPISODE = '/episode',
    BLOG = '/blog',
    FEATURES = '/features',
    PRICING = '/pricing',
    TESTIMONIALS = '/testimonials',
    EPISODE_ITEM = '/episode/:id',
    BLOG_ITEM = '/blog/:id',
}

export enum PAGES {
    EPISODE = 'Episode',
    ABOUT = 'About',
    BLOG = 'Blog',
    FEATURES = 'Features',
    PRICING = 'Pricing',
    TESTIMONIALS = 'Testimonials',
}

export const routes: RouteType[] = [
    {
        path: ROUTES.MAIN,
        element: <Main />,
        page: '',
    },
    {
        path: ROUTES.EPISODE,
        element: <Episode />,
        page: PAGES.EPISODE,
    },
    {
        path: ROUTES.ABOUT,
        element: <About />,
        page: PAGES.ABOUT,
    },
    {
        path: ROUTES.BLOG,
        element: <Blog />,
        page: PAGES.BLOG,
    },
    {
        path: ROUTES.FEATURES,
        element: <Features />,
        page: PAGES.FEATURES,
    },
    {
        path: ROUTES.PRICING,
        element: <Pricing />,
        page: PAGES.PRICING,
    },
    {
        path: ROUTES.TESTIMONIALS,
        element: <Testimonials />,
        page: PAGES.TESTIMONIALS,
    },
    {
        path: ROUTES.EPISODE_ITEM,
        element: <EpisodeItem />,
        page: '',
    },
    {
        path: ROUTES.BLOG_ITEM,
        element: <BLogItem />,
        page: '',
    },
]
