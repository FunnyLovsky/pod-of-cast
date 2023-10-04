import React from 'react'
import styles from './header.module.scss'
import './style.scss'
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
                            <NavLink to="/episode" className="link">
                                Episode
                            </NavLink>
                            <NavLink to="/about" className="link">
                                About
                            </NavLink>
                            <div className={styles.dropdown}>
                                <div className={styles.head_link}>
                                    <span>More</span>
                                    <img src={ArrowDown} alt="arrow" />
                                </div>
                                <div className={styles.drop_menu}>
                                    <NavLink to="/blog" className="link">
                                        Blog
                                    </NavLink>
                                    <NavLink to="/features" className="link">
                                        Features
                                    </NavLink>
                                    <NavLink to="/pricing" className="link">
                                        Pricing
                                    </NavLink>
                                    <NavLink
                                        to="/testimonials"
                                        className="link"
                                    >
                                        Testimonials
                                    </NavLink>
                                </div>
                            </div>
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
