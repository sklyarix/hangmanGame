import styles from './Menu.module.scss'
import {Link} from "react-router-dom";
const Menu = () => {
    return (
        <nav className={styles.nav}>
            <Link to="/game">Начать игру</Link>
        </nav>
    )
};

export default Menu;