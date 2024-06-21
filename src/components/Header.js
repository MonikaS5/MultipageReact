// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition }
    from 'react-transition-group';
import logo from './logo.png';



const Header = () => {
    return (
        <CSSTransition in={true} appear={true}
            timeout={500} classNames="fade">
            <header className="header">
                <div className="container">
                    <h1 className="logo"><img src={logo} className="App-logo" alt="logo" />

                        React Tutorial</h1>
                    <nav className="nav">
                        <ul>
                            <li><Link to="/"
                                className="link">Home</Link></li>
                            <li><Link to="/docs"
                                className="link">Docs</Link></li>
                            <li><Link to="/tutorial"
                                className="link">Tutorial</Link></li>
                            <li><Link to="/about"
                                className="link">About</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </CSSTransition>
    );
}

export default Header;
