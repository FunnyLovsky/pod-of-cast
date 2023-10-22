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

export const routes: RouteType[] = [
    {
        path: ROUTES.MAIN,
        element: <Main />,
    },
    {
        path: ROUTES.ABOUT,
        element: <About />,
    },
    {
        path: ROUTES.EPISODE,
        element: <Episode />,
    },
    {
        path: ROUTES.BLOG,
        element: <Blog />,
    },
    {
        path: ROUTES.FEATURES,
        element: <Features />,
    },
    {
        path: ROUTES.PRICING,
        element: <Pricing />,
    },
    {
        path: ROUTES.TESTIMONIALS,
        element: <Testimonials />,
    },
    {
        path: ROUTES.EPISODE_ITEM,
        element: <EpisodeItem />,
    },
    {
        path: ROUTES.BLOG_ITEM,
        element: <BLogItem />,
    },
]
