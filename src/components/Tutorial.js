// Tutorial.js
import React from 'react';
import './Style.css';

const Tutorial = () => {
	return (
		<div className="tutorials">
			<div className="container">
				<h2>Intro to React</h2>
				<div className="tutorial">
					<h3>What Is React?</h3>
					<p>React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.</p>
				</div>
				<div className="tutorial">
					<h3>How does React Work?</h3>
					<p>Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.</p>
				</div>
			</div>
		</div>
	);
}

export default Tutorial;
