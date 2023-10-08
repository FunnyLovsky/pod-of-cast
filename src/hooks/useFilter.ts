import { useState } from 'react'
import { Blogs, Episodes } from '../types/types'

export function useFilter(
    array: (Episodes | Blogs)[],
    categoryArray: string[]
) {
    const [filterArray, setFilterArray] = useState<(Episodes | Blogs)[]>(array)
    const [activeCategory, setActiveCategory] = useState(categoryArray[0])

    const filterItems = (category: string) => {
        if (category.toLowerCase() === 'all') {
            setFilterArray(array)
        } else {
            setFilterArray([
                ...array.filter(
                    (item) => item.category === category.toLowerCase()
                ),
            ])
        }

        setActiveCategory(category)
    }

    return { activeCategory, filterItems, filterArray }
}
