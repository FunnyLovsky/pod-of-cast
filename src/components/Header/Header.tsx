import React, { useCallback, useEffect, useState } from 'react'
import styles from './header.module.scss'
import Container from '../ui/Container/Container'
import NavButton from '../ui/NavButton/NavButton'
import NavLink from '../ui/NavLink/NavLink'
import LOGO from '../../assets/images/icons/logo.svg'
import ArrowDown from '../../assets/images/vectors/arrowDown.svg'
import { Outlet, Link } from 'react-router-dom'

const Header = () => {
    const [isActive, setIsActive] = useState(false)

    const handleHeader = useCallback(() => {
        const scrollY = window.scrollY ?? 0
        setIsActive(scrollY > 74)
        console.log('scroll')
    }, [])

    useEffect(() => {
        handleHeader()

        window.addEventListener('scroll', handleHeader)
        return () => {
            window.removeEventListener('scroll', handleHeader)
        }
    }, [handleHeader])

    const headerClassName = [styles.header, isActive ? styles.active : ''].join(
        ' '
    )

    return (
        <>
            <header className={headerClassName}>
                <Container>
                    <nav className={styles.nav}>
                        <div className="item">
                            <Link to="/">
                                <img
                                    src={LOGO}
                                    alt="logo"
                                    width="74px"
                                    height="74px"
                                />
                            </Link>
                        </div>
                        <div className="item">
                            <NavLink href="/episode">Episode</NavLink>
                            <NavLink href="/about">About</NavLink>
                            <NavLink href="/more">
                                <span>More</span>
                                <img src={ArrowDown} alt="arrow" />
                            </NavLink>
                        </div>
                        <div className="item">
                            <NavButton type="light">Recent Episode</NavButton>
                            <NavButton type="dark">Subscribe</NavButton>
                        </div>
                    </nav>
                </Container>
            </header>
            <Outlet />
        </>
    )
}

export default Header
