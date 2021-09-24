import styles from '../css/Header.module.css'

export default function Header() {
	return (
		<header>
			<a href="#">
				<h1 className={styles.header__logo}>토익 영단어(고급)</h1>
			</a>
			<ul className={styles.header__menu}>
				<li className={styles["header__menu-item"]}><button className={styles["header__menu-button"]}>단어 추가</button></li>
				<li className={styles["header__menu-item"]}><button className={styles["header__menu-button"]}>Day 추가</button></li>
			</ul>
		</header>
	)
}
