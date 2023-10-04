import React from 'react'
import styles from './header.module.scss'
import Container from '../ui/Container/Container'
import LOGO from '../../assets/images/icons/logo.svg'
import ArrowDown from '../../assets/images/vectors/arrowDown.svg'
import { Outlet, Link, NavLink } from 'react-router-dom'
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
                            <NavLink to="/episode" className={styles.link}>
                                Episode
                            </NavLink>
                            <Link to="/about" className={styles.link}>
                                About
                            </Link>
                            <Link to="/more" className={styles.link}>
                                <span>More</span>
                                <img src={ArrowDown} alt="arrow" />
                            </Link>
                        </div>
                        <div className="item">
                            <button
                                className={[styles.btn, styles.light].join(' ')}
                            >
                                Recent Episode
                            </button>
                            <button
                                className={[styles.btn, styles.dark].join(' ')}
                            >
                                Subscribe
                            </button>
                        </div>
                    </nav>
                </Container>
            </header>
            <Outlet />
        </>
    )
}

export default Header
