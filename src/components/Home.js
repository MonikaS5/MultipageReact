// Home.js
import React from 'react';
// Import CSS file for component styles
import './Style.css';

const Home = () => {
    return (
        <div className="home">
            <div className="container">
                <h2>Welcome to React </h2>
                <p>React is a popular library used to create user interfaces. It was built at Facebook to address some of the challenges associated with large-scale, data-driven websites.
                </p>
                <p>React is a JavaScript library for building user interfaces.

                    React is used to build single-page applications.

                    React allows us to create reusable UI components.</p>
                <ul>
                    <li>React is a JavaScript library for building user interfaces.
                    </li>
                    <li>React is used to build single-page applications.

                    </li>
                    <li>React allows us to create reusable UI components.
                    </li>
                    <li>React creates a VIRTUAL DOM in memory.


                    </li>
                </ul>
                <p>JavaScript library created by Facebook.
                </p>
                <button className="action-button">More Info</button>
            </div>
        </div>
    );
}

export default Home;
