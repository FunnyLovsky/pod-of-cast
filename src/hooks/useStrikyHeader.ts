import { useCallback, useEffect, useState } from 'react'
import styles from '../components/Header/header.module.scss'

export function useStrikyHeader(): string {
    const [isActive, setIsActive] = useState(false)

    const strikyHeader = useCallback(() => {
        const scrollY = window.scrollY ?? 0
        setIsActive(scrollY > 74)
    }, [])

    useEffect(() => {
        strikyHeader()

        window.addEventListener('scroll', strikyHeader)
        return () => {
            window.removeEventListener('scroll', strikyHeader)
        }
    }, [strikyHeader])

    return [styles.header, isActive ? styles.active : ''].join(' ')
}
