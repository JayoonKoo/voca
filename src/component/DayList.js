import data from "../db/data.json";
import styles from "../css/DayList.module.css";
import {Link} from 'react-router-dom'

export default function DataList() {
  const { days } = data;
  return (
    <>
      <ul className={styles["day-list"]}>
        {days.map((day) => (
          <li className={styles["day-list__day"]} key={day.id}>
						<Link to={`/day/${day.day}`}>Day {day.day}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
