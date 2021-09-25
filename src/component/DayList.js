import styles from "../css/DayList.module.css";
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'

export default function DataList() {
	const [days, setDays] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3001/days')
			.then(res => res.json())
			.then(days => setDays(days));
	}, []);

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
