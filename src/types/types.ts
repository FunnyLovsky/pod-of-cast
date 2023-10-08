export interface Episodes {
    id: number
    href: string
    img: string
    title: string
    tags: string[]
    category?: string
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
