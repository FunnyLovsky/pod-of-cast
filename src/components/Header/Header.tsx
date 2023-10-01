import React from 'react'
import styles from './header.module.scss'
import Container from '../ui/Container/Container'
import NavButton from '../ui/NavButton/NavButton'
import NavLink from '../ui/NavLink/NavLink'
import LOGO from '../../assets/images/icons/logo.svg'
import ArrowDown from '../../assets/images/vectors/arrowDown.svg'
import { Outlet, Link } from 'react-router-dom'
import { useStrikyHeader } from '../../hooks/useStrikyHeader'

const Header = () => {
    const headerClassName = useStrikyHeader()

    const scrollSmooth = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        })
    }

    return (
        <>
            <header className={headerClassName}>
                <Container>
                    <nav className={styles.nav}>
                        <div className="item">
                            <Link to="/" onClick={() => scrollSmooth()}>
                                <img
                                    src={LOGO}
                                    className={styles.logo}
                                    alt="logo"
                                    title="Pod of Cast"
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
