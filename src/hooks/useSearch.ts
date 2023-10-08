import { useEffect, useState } from 'react'
import { Blogs, Episodes } from '../types/types'

export function useSearch(array: (Blogs | Episodes)[]) {
    const [value, setValue] = useState('')
    const [searchResult, setSearchResult] = useState<(Episodes | Blogs)[]>([])

    useEffect(() => {
        if (value.trim() === '') {
            setSearchResult([])
        } else {
            setSearchResult([
                ...array.filter(
                    (search) =>
                        search.title.toLowerCase().slice(0, value.length) ===
                        value.toLowerCase()
                ),
            ])
        }
    }, [value, array])

    return { value, setValue, searchResult }
}
