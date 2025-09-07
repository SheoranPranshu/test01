import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} HorizonDroid. All Rights Reserved.</p>
                <div className="credit">
                    Website by <a href="https://glitchwraith.vercel.app/" target="_blank" rel="noopener noreferrer">Glitch Wraith</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
