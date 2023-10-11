import React from 'react'
import styles from './userPlatform.module.scss'

interface Props {
    avatar: string
    name: string
    icon: string
    text: string
    aling: string
}

const UserPlatform = ({ avatar, name, icon, text, aling }: Props) => {
    return (
        <div className={styles.users} style={{ justifyContent: aling }}>
            <div className={styles.item}>
                <img src={avatar} alt="" />
                <h4 className={styles.name}>{name}</h4>
            </div>
            <div className={styles.item}>
                <img src={icon} alt="" />
                <h4>{text}</h4>
            </div>
        </div>
    )
}

export default UserPlatform
