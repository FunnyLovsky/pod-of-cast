import React from 'react'
import styles from './header.module.css'
import Container from '../../ui/Container/Container'
import NavButton from '../../ui/NavButton/NavButton'

const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <nav className={styles.nav}>
                    <div className="item">
                        <img src="/" alt="logo" />
                    </div>
                    <div className="item">
                        <a href="/a">Episode</a>
                        <a href="/about">About</a>
                        <a href="/more">More</a>
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
