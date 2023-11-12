import { AiOutlineClose } from '@react-icons/all-files/ai/AiOutlineClose'
import styles from './burgerMenu.module.scss'
import { NavLink } from 'react-router-dom'
import { routes } from '../../../router/routes'

interface Props {
    closeBurgerMenu: () => void
}

const BurgerMenu: React.FC<Props> = ({ closeBurgerMenu }) => {
    return (
        <div
            className={styles.burger_menu}
            onClick={() => closeBurgerMenu()}
            onKeyDown={() => closeBurgerMenu()}
            aria-hidden="true"
        >
            <div
                className={styles.burger_inner}
                onClick={(event) => event.stopPropagation()}
                aria-hidden="true"
            >
                <div className={styles.burger_item}>
                    <button onClick={() => closeBurgerMenu()}>
                        <AiOutlineClose />
                    </button>
                </div>
                <div className={styles.burger_item}>
                    {routes.map((item, index) => (
                        <NavLink
                            to={item.path}
                            key={index}
                            className="link"
                            onClick={() => closeBurgerMenu()}
                        >
                            {item.page}
                        </NavLink>
                    ))}
                </div>
                <div className={styles.burder_item}>
                    <div className={styles.item}>
                        <button
                            className={[styles.btn, styles.light].join(' ')}
                        >
                            Recent Episode
                        </button>
                        <button className={[styles.btn, styles.dark].join(' ')}>
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BurgerMenu
