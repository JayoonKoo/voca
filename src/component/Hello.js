import World from './World'
import styles from './Hello.module.css';

export default function Hello() {
	return (
	<div>
		<h1 style={{
			color: "red",
			margin: "50px 0",
		}}>Hello</h1>
		<World />
		<World />
		<div className={styles.box}>Hello</div>
	</div>
	);
}
