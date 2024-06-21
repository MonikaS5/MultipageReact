// Footer.js
import React from 'react';
import './Style.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="contact-info">
                        <h3>Contact Us</h3>
                        <div>
                            <p>Email: abc@info.com</p>
                            <p>Phone: 123-45-789</p>
                        </div>
                    </div>
                    <div className="social-media">
                        <h3>Connect With Us</h3>
                        <ul>
                            <li>
                                <a href="https://facebook.com">Facebook</a>
                            </li>
                            <li>
                                <a href="https://twitter.com">Twitter</a>
                            </li>
                            <li>
                                <a href="https://instagram.com">Instagram
                                </a></li>
                        </ul>
                    </div>
                </div>
                <div className="copyright">
                    <p>Copyright© 2024 Multipage Website by <span className='myName'>Monika</span>.</p>
                </div>

            </div>

        </footer>
    );
}

export default Footer;
