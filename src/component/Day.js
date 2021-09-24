import dummy from '../db/data.json'
import styles from '../css/Day.module.css'
import {useParams} from 'react-router-dom'
import Word from './Word';

export default function Day() {
	const {day} =  useParams();
	const {words} = dummy;
	const wordList = words.filter(word => word.day === Number(day));

	return (
		<>
		<h2>Day {day}</h2>
		<table>
			<tbody>
				{wordList.map(word => (
					<Word word={word} key={word.id} />
				))}
			</tbody>
		</table>
		</>
	)
}