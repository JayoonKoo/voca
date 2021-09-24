import data from '../db/data.json'

export default function DataList() {
	const {days} = data;
	return (
		<>
		<ul className="day-list">
			{days.map(day => {
				return <li className="day-list__day" key={day.id}>Day {day.day}</li>
			})}
		</ul>
		</>
	)
}
