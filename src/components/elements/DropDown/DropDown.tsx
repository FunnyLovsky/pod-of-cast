import { NavLink } from 'react-router-dom'
import styles from './dropDown.module.scss'
import ArrowDown from '../../../assets/images/vectors/arrowDown.svg'

const DropDown = () => {
    return (
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
                <NavLink to="/testimonials" className="link">
                    Testimonials
                </NavLink>
            </div>
        </div>
    )
}

export default DropDown
