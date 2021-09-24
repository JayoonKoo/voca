import {useState} from 'react'


export default function Hello({age}) {
	const [name, setName] = useState('koo');
	const [propAge, setAge] = useState(age);
	const msg = age > 19 ? "성인입니다." : "미성년자 입니다.";

	function changeName() {
		setName(name === 'koo' ? 'jaYoon' : 'koo');
	}

	return (
	<div>
		<h2>{name}({propAge}): {msg}</h2>
		<button onClick={()=> {
			changeName();
			setAge(propAge + 1);
		}}>ShowName</button>
	</div>
	);
}
