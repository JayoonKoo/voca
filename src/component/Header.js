import styles from '../css/Header.module.css'
import {Link} from 'react-router-dom'

export default function Header() {
	return (
		<header>
			<Link to="/">
				<h1 className={styles.header__logo}>토익 영단어(고급)</h1>
			</Link>
			<ul className={styles.header__menu}>
				<li className={styles["header__menu-item"]}><button className={styles["header__menu-button"]}>단어 추가</button></li>
				<li className={styles["header__menu-item"]}><button className={styles["header__menu-button"]}>Day 추가</button></li>
			</ul>
		</header>
	)
}
