import React, { useState, useEffect } from 'react';

function App() {
	// Count = our State
	// setCount = the function we'll use to update State
	// Our default State value = 0
	const [count, setCount] = useState(0);

	// Functions that allow us to manipulate setCount to then affect State.
	function decreaseCount() {
		setCount((preCount) => preCount - 1);
	}
	function increaseCount() {
		setCount((preCount) => preCount + 1);
	}

	// useEffect = perform side effects in function components. Whenever state changes, useEffect will be re-rendered.
	useEffect(() => {
		console.log(count);
	});

	return (
		// What we render to the browser. Here, we invoke State (count) and our two functions that use setCount (decreaseCount and increaseCount).
		<>
			<div id="scratch-container" className="container">
				<h1>BASIC REACT HOOKS FROM SCRATCH</h1>
				<div>
					<button onClick={decreaseCount}>-</button>
					<span>{count}</span>
					<button onClick={increaseCount}>+</button>
				</div>
			</div>
		</>
	);
}

export default App;
