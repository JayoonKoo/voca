import { useState } from "react";

interface IProps {
	word: IWord;
}

export interface IWord {
	day: string;
	eng: string;
	kor: string;
	isDone: boolean;
	id: number;
}

export default function Word({ word: w } : IProps) {
	const [word, setWord] = useState(w);
  const { eng, kor } = word;
  const [isShow, setIsShow] = useState(false);
	const [isDone, setIsDone] = useState(word.isDone);

  function toggleButton() {
    setIsShow(!isShow);
  }

	function toggleDone() {
		fetch(`http://localhost:3001/words/${word.id}`, {
			method: 'PUT',
			headers : {
				'Content-Type' : 'application/json'
			},
			body: JSON.stringify({
				...word,
				isDone: !isDone,
			})
		})
			.then(res => {
				if (res.ok) {
					setIsDone(!isDone)
				}
			})
	}

	function del() {
		if (window.confirm('삭제 하시겠습니까?')) {
			fetch(`http://localhost:3001/words/${word.id}`, {
				method: 'DELETE'
			})
				.then(res => {
					if (res.ok) {
						setWord({
							...word,
							id: 0
						});
					}
				})
		}
	}

	if (word.id === 0) {
		return null;
	}

  return (
    <tr className={isDone? "off": ""}>
      <td>
        <input type="checkbox" checked={isDone} onChange={toggleDone}></input>
      </td>
      <td className="eng">{eng}</td>
      <td className="kor">{isShow && kor}</td>
      <td>
        <button onClick={toggleButton}>뜻 {isShow ? "숨기기" : "보기"}</button>
        <button className="del" onClick={del}>삭제</button>
      </td>
    </tr>
  );
}
