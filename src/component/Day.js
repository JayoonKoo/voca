import dummy from '../db/data.json'
import styles from '../css/Day.module.css'

export default function Day() {
	const day = 3;
	const {words} = dummy;
	const wordList = words.filter(word => word.day === day);

	return (
		<table>
			<tbody>
				{wordList.map(word => {
					const {id, eng, kor} = word;
					return (
						<tr key={id}>
							<td className={styles.eng}>{eng}</td>
							<td className={styles.kor}>{kor}</td>
						</tr>);
				})}
			</tbody>
		</table>
	)
}
