import React, { FC } from 'react'
import Container from '../../ui/Container/Container'
import styles from './app.module.scss'
import Title from '../../ui/Title/Title'
import Scribble from '../../ui/Scribble/Scribe'
import Button from '../../ui/Button/Button'
import { Link } from 'react-router-dom'
import { SiGooglepodcasts } from '@react-icons/all-files/si/SiGooglepodcasts'
import { FaSpotify } from '@react-icons/all-files/fa/FaSpotify'
import { FaYoutube } from '@react-icons/all-files/fa/FaYoutube'

const App: FC = () => {
    return (
        <div className={styles.app}>
            <Scribble type="orange" />
            <Container>
                <div className={styles.cont}>
                    <div className={styles.special}>BETA</div>
                    <Title
                        title="Available now Pod of Cast App"
                        subtitle="We just launched our podcast app!"
                    />
                </div>
                <div className={styles.inner}>
                    <Button>DOWNLOAD NOW</Button>
                    <h3 className={styles.subtitle}>
                        Content also available on:
                    </h3>
                    <div className={styles.icon_inner}>
                        <Link to="https://podcast.google.com" target="_blank">
                            <SiGooglepodcasts />
                        </Link>
                        <Link to="https://spotify.com" target="_blank">
                            <FaSpotify />
                        </Link>
                        <Link to="https://youtube.com" target="_blank">
                            <FaYoutube />
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default App
