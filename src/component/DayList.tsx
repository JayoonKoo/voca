import styles from "../css/DayList.module.css";
import {Link} from 'react-router-dom'
import useFecth from "../hooks/useFetch";

interface IDay {
	id: number;
	day: number;
}

export default function DataList() {
	const url = 'http://localhost:3001/days';
	const days: IDay[] = useFecth(url);

	if (days.length === 0) {
		return <span>Loading...</span>;
	}

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
