import data from '../db/data.json'
import styles from '../css/DayList.module.css';

export default function DataList() {
	const {days} = data;
	return (
		<>
		<ul className={styles["day-list"]}>
			{days.map(day => {
				return <li className={styles["day-list__day"]} key={day.id}>Day {day.day}</li>
			})}
		</ul>
		</>
	)
}
