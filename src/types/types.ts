export interface Episodes {
    id: number
    href: string
    img: string
    title: string
    tags: string[]
    category?: string
    audio?: string
    name?: string
    date?: string
}

export interface Blogs {
    href: string
    name?: string
    img: string
    title: string
    date?: string
    tags: string[]
    id: number
    category?: string
}

export interface EpisodeImg {
    img: string
    icons: string
    title: string
}
