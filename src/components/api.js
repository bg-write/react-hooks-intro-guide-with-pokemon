import React, { useState, useEffect } from 'react';
import axios from 'axios';

// The REST API endpoint.
const API_URL = `https://jsonplaceholder.typicode.com/posts`;

function Api() {
	// Set State!
	const [posts, setPosts] = useState([]);

	// Define the function that'll fetch data from our API; we include "setPosts" so that we can update State with the posts we pull from our API.
	const fetchData = async () => {
		const { data } = await axios.get(API_URL);
		setPosts(data);
	};

	// Trigger our "fetchData" function after the initial State renders.
	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			<h1>MAKING ONE API GET REQUEST</h1>

			<div className="wrapper">
				{posts.length > 0 ? (
					<div className="content">
						{posts.map((post) => (
							<div className="post" key={post.id}>
								<h2>{post.title}</h2>
								<p>{post.body}</p>
							</div>
						))}
					</div>
				) : (
					<p className="loading">Loading ...</p>
				)}
			</div>
		</>
	);
}

export default Api;
