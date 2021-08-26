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

	// Set "decreaseCount" to make sure we don't go below 1.
	function decreaseCount() {
		count <= 1 ? setCount(1) : setCount((preCount) => preCount - 1);
	}
	function increaseCount() {
		setCount((preCount) => preCount + 1);
	}

	// Trigger our "fetchData" function after the initial State renders, so we can actually make our API call.
	useEffect(() => {
		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [count]);

	return (
		<>
			<div id="pokemon-container" className="container">
				<h1>UPDATING OUR API GET REQUEST BASED ON STATE</h1>

				<div className="counter">
					<button onClick={decreaseCount}>-</button>
					<span>{count}</span>
					<button onClick={increaseCount}>+</button>
				</div>

				<div className="wrapper">
					<div className="content">
						<div className="pokemon">
							<h2>{pokemon.name}</h2>
							{pokemon.length === 0 ? (
								<p>loading ...</p>
							) : (
								<img alt="pokemon" src={pokemon.sprites.front_default} />
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Pokemon;
