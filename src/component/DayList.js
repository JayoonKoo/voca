import styles from "../css/DayList.module.css";
import {Link} from 'react-router-dom'
import useFecth from "../hooks/useFetch";

export default function DataList() {
	const url = 'http://localhost:3001/days';
	const days = useFecth(url);

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
