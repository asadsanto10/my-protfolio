import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="Footer container text-center pt-5 pb-3">
            <div className="social-links my-3">
                <a href="https://github.com/asadsanto10" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/asadsanto10" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                        <a href="https://asadsanto10.medium.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-medium-m"></i></a>
                        <a href="https://www.facebook.com/Asad.santo.10" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://twitter.com/asad_santo_10" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            </div>
            <p className="main"><span><i className="far fa-star"></i>STAR</span> <span><i className="fas fa-code-branch"></i>FORK</span> BY <a href="https://github.com/asadsanto10">Asaduzzaman Santo</a></p>
        </div>
    );
};

export default Footer;