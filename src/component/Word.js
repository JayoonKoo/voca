import { useState } from "react";

export default function Word({ word }) {
  const { eng, kor } = word;
  const [isShow, setIsShow] = useState(false);
	const [isDone, setIsDone] = useState(word.isDone);

  function toggleButton() {
    setIsShow(!isShow);
  }

	function toggleDone() {
		setIsDone(!isDone);
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
        <button className="del">삭제</button>
      </td>
    </tr>
  );
}
