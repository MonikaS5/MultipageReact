// Docs.js
import React from 'react';
// Import CSS file for component styles
import './Style.css';

const Docs = () => {
	return (
		<div className="docs">
			<div className="container">
				<h2>Getting Started</h2>
				<div className="doc">
					<h3>Learn React</h3>
					<p>React is a JavaScript library for building user interfaces.</p>
				</div>
				<div className="doc">
					<h3>Create a New React App</h3>
					<p>When starting a React project, a simple HTML page with script tags might still be the best option. </p>
				</div>
			</div>
		</div>
	);
}

export default Docs;
