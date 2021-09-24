export default function Hello() {
	function showName() {
		console.log('koo');
	}

	function showAge(age) {
		console.log(age);
	}

	return (
	<div>
		<h1>Hello</h1>
		<button onClick={showName}>ShowName</button>
		<button onClick={()=> {showAge(30)}}>ShowAge</button>
		<input onChange={(e)=> {
			console.log(e.target.value);
		}}></input>
	</div>
	);
}
