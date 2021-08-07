import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Pokemon() {
	// Set State!
	const [count, setCount] = useState(1);
	const [pokemon, setPokemon] = useState([]);

	// Define the function that'll fetch data from our API; we include "setPokemon" so that we can update State with the pokemon we pull from our API.
	const fetchData = async () => {
		const { data } = await axios.get(
			`https://pokeapi.co/api/v2/pokemon/${count}`
		);
		setPokemon(data);
	};

	function decreaseCount() {
		setCount((preCount) => preCount - 1);
	}
	function increaseCount() {
		setCount((preCount) => preCount + 1);
	}

	// Trigger our "fetchData" function after the initial State renders, so we can actually make our API call.
	useEffect(() => {
		fetchData();
	}, [count]);

	return (
		<>
			<h1>UPDATING API GET REQUEST BASED ON STATE</h1>

			<div className="counter">
				<button onClick={decreaseCount}>-</button>
				<span>{count}</span>
				<button onClick={increaseCount}>+</button>
			</div>

			<div className="wrapper">
				<div className="content">
					<div className="pokemon">
						<h2>{pokemon.name}</h2>
						{/* ICEBOX: image does not load on refresh. TypeError: Cannot read property 'front_default' of undefined */}
						<img alt="pokemon" src={pokemon.sprites.front_default} />
					</div>
				</div>
			</div>
		</>
	);
}

export default Pokemon;