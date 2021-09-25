import {useParams} from 'react-router-dom';
import styles from '../css/Day.module.css';
import Word from './Word';
import {useState, useEffect} from 'react'

export default function Day() {
	const {day} =  useParams();

	const [wordList, setWordList] = useState([]);

	useEffect(() => {
		fetch(`http://localhost:3001/words?day=${day}`)
			.then(res => res.json())
			.then(words => setWordList(words));
	}, [day]);

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
