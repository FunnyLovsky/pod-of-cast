import React, { useEffect, useState } from 'react'
import styles from './header.module.scss'
import './style.scss'
import Container from '../../ui/Container/Container'
import LOGO from '../../../assets/images/icons/logo.svg'

import { Outlet, Link, NavLink } from 'react-router-dom'
import { useStrikyHeader } from '../../../hooks/useStrikyHeader'
import { HiMenuAlt3 } from '@react-icons/all-files/hi/HiMenuAlt3'
import BurgerMenu from '../../elements/BurgerMenu/BurgerMenu'
import DropDown from '../../elements/DropDown/DropDown'

const Header = () => {
    const headerClassName = useStrikyHeader()
    const [isActiveBurger, setIsAcctiveBurger] = useState(false)

    const scrollSmooth = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        })
    }

    const openBurgerMenu = () => {
        setIsAcctiveBurger(true)
        document.body.style.overflow = 'hidden'
        // document.body.style.paddingRight = '15px'
    }

    const closeBurgerMenu = () => {
        setIsAcctiveBurger(false)
        document.body.style.overflow = 'auto'
        // document.body.style.paddingRight = '0'
    }
    const handleBurgerMenu = () => {
        if (document.documentElement.offsetWidth >= 850) {
            setIsAcctiveBurger(false)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleBurgerMenu)

        return () => window.removeEventListener('resize', handleBurgerMenu)
    }, [])

    return (
        <>
            <header data-name="header" className={headerClassName}>
                <Container>
                    <nav className={styles.nav}>
                        <div className={styles.item}>
                            <Link to="/" onClick={() => scrollSmooth()}>
                                <img
                                    src={LOGO}
                                    className={styles.logo}
                                    alt="logo"
                                    title="Pod of Cast"
                                />
                            </Link>
                        </div>
                        <div className={styles.item}>
                            <NavLink to="/episode" className="link">
                                Episode
                            </NavLink>
                            <NavLink to="/about" className="link">
                                About
                            </NavLink>
                            <DropDown />
                        </div>
                        <div className={styles.item}>
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
                        <div className={styles.burger_icon}>
                            <button onClick={() => openBurgerMenu()}>
                                <HiMenuAlt3 />
                            </button>
                        </div>
                    </nav>
                </Container>
            </header>
            {isActiveBurger ? (
                <BurgerMenu closeBurgerMenu={closeBurgerMenu} />
            ) : null}

            <Outlet />
        </>
    )
}

export default Header
