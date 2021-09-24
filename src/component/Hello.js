import {useState} from 'react'


export default function Hello() {
	const [name, setName] = useState('koo');

	function changeName() {
		setName(name === 'koo' ? 'jaYoon' : 'koo');
	}

	return (
	<div>
		<h2>{name}</h2>
		<button onClick={changeName}>ShowName</button>
	</div>
	);
}
