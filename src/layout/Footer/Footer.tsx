import React, { FC } from 'react'
import Container from '../../components/ui/Container/Container'
import styles from './footer.module.scss'
import { Link } from 'react-router-dom'
import LOGO from '../../assets/images/icons/logo.svg'
import GOOGLE from '../../assets/images/icons/google_podcast.svg'
import SPOTIFY from '../../assets/images/icons/spotify.svg'
import YOUTUBE from '../../assets/images/icons/youtube.svg'
import APP_STORE from '../../assets/images/icons/app_store.svg'
import PLAY_MARKET from '../../assets/images/icons/google_play.svg'
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter'
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram'
import { SiTiktok } from '@react-icons/all-files/si/SiTiktok'

const Footer: FC = () => {
    return (
        <div className={styles.footer}>
            <Container>
                <div className={styles.inner}>
                    <div className={styles.item}>
                        <div className={styles.logo}>
                            <img src={LOGO} alt="logo" />
                            <h5 className={styles.year}>©2021.</h5>
                        </div>
                        <h3 className={styles.subtitle}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </h3>
                        <div className={styles.icons_inner}>
                            <Link to="https://twitter.com" target="_blank">
                                <FaTwitter />
                            </Link>
                            <Link to="https://instagram.com" target="_blank">
                                <FaInstagram />
                            </Link>
                            <Link to="https://tiktok.com" target="_blank">
                                <SiTiktok />
                            </Link>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.menu_inner}>
                            <div className={styles.menu}>
                                <Link to="/about">About</Link>
                                <Link to="/testimonials">Testimonials</Link>
                                <Link to="/features">Features</Link>
                            </div>
                            <div className={styles.menu}>
                                <Link to="/episode">Episodes</Link>
                                <Link to="/pricing">Pricing</Link>
                                <Link to="/blog">Blog</Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <h3 className={styles.plat_subtitle}>
                            Listen to episodes on your fav platform:
                        </h3>
                        <div className={styles.platform}>
                            <Link
                                to="https://podcast.google.com"
                                target="_blank"
                            >
                                <img src={GOOGLE} alt="podcast" />
                            </Link>
                            <Link to="https://spotify.com" target="_blank">
                                <img src={SPOTIFY} alt="spotify" />
                            </Link>
                            <Link to="https://youtube.com" target="_blank">
                                <img src={YOUTUBE} alt="youtube" />
                            </Link>
                        </div>
                        <h3 className={styles.app_title}>App available on:</h3>
                        <div className={styles.app}>
                            <Link
                                to="https://apple.com/app-store/"
                                target="_blank"
                            >
                                <img src={APP_STORE} alt="app_store" />
                            </Link>
                            <Link to="https://play.google.com" target="_blank">
                                <img src={PLAY_MARKET} alt="play_market" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.stroke}></div>
                <div className={styles.footnote}>
                    <h5 className={styles.reserved}>
                        ©2022. All Rights Reserved.{' '}
                        <span style={{ color: '#CD4631' }}>Pod of Cast</span>
                    </h5>
                    <div className={styles.frame}>
                        <Link to="/terms">Terms</Link>
                        <div>•</div>
                        <Link to="/privacy">Privacy</Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer
