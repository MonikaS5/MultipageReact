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
            <div className="container">
                <h3>ReactJS </h3>
                <p>React. js is an open-source JavaScript library, crafted with precision by Facebook, that aims to simplify the intricate process of building interactive user interfaces. Imagine a user interface built with React as a collection of components, each responsible for outputting a small, reusable piece of HTML code.
                </p>
                <p>A key advantage of React is that it only rerenders those parts of the page that have changed, avoiding unnecessary rerendering of unchanged DOM elements.</p>
                <h4>React Hooks</h4>
                <p>Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.

</p>
                <ul>
                    <li>Hooks can only be called inside React function components.

                    </li>
                    <li>Hooks can only be called at the top level of a component.

                    </li>
                    <li>Hooks cannot be conditional

                    </li>
                    
                </ul>
                
                <button className="action-button">More Info</button>
                <h3>Props</h3>
                <p>Props are arguments passed into React components.

Props are passed to components via HTML attributes.</p>
            </div>
        </div>
    );
}

export default Home;
