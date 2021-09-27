import { useHistory } from "react-router";
import useFecth from "../hooks/useFetch"

export default function CreateDay() {
	const days =  useFecth('http://localhost:3001/days');
	const history = useHistory();

	function onClick() {
		fetch('http://localhost:3001/days', {
			method: 'POST',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				day: days.length + 1
			})
		})
			.then(res => {
				if (res.ok) {
					alert("생성이 완료 되었습니다.");
					history.push('/')
				}
			})
	}
	return (
		<div>
			<h3>현제 일수 : {days.length}일</h3>
			<button onClick={onClick}>Day 추가</button>
		</div>
	)
}
