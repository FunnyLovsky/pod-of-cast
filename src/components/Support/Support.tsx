import React from 'react'
import stules from './support.module.scss'
import GOOGLE_POD from '../../assets/images/icons/google_podcast.svg'
import SPOTIFY from '../../assets/images/icons/spotify.svg'
import YOUTUBE from '../../assets/images/icons/youtube.svg'

const Support = () => {
    return (
        <>
            <div className={stules.support}>
                <div className={stules.stroke}></div>
                <div className={stules.container}>
                    <h3 className={stules.title}>Supported by:</h3>
                    <a
                        href="https://spotify.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={SPOTIFY} alt="" />
                    </a>
                    <a
                        href="https://podcasts.google.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={GOOGLE_POD} alt="" />
                    </a>
                    <a
                        href="https://youtube.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={YOUTUBE} alt="" />
                    </a>
                </div>
                <div className={stules.stroke}></div>
            </div>
        </>
    )
}

export default Support
