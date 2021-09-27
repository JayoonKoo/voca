import {useParams} from 'react-router-dom';
import styles from '../css/Day.module.css';
import Word from './Word';
import useFecth from '../hooks/useFetch';

export default function Day() {
	const {day} =  useParams();
	const url = `http://localhost:3001/words?day=${day}`;
	const wordList = useFecth(url);

	return (
		<>
		<h2>Day {day}</h2>
		{wordList.length === 0 && <span>Loading...</span>}
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
