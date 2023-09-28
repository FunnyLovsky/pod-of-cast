import React from 'react'
import styles from './header.module.scss'
import Container from '../../ui/Container/Container'
import NavButton from '../../ui/NavButton/NavButton'
import NavLink from '../../ui/NavLink/NavLink'
import LOGO from '../../../assets/images/logo.svg'
import ArrowDown from '../../../assets/images/arrowDown.svg'

const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <nav className={styles.nav}>
                    <div className="item">
                        <a href="/">
                            <img
                                src={LOGO}
                                alt="logo"
                                width="74px"
                                height="74px"
                            />
                        </a>
                    </div>
                    <div className="item">
                        <NavLink href="/a">Episode</NavLink>
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
    )
}

export default Header
