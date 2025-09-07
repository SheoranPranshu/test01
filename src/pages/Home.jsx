import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div className="page-content" id="home">
            <div className="hero">
                <div className="container">
                    <h1 data-aos="fade-up">Welcome to HorizonDroid</h1>
                    <p data-aos="fade-up" data-aos-delay="200">
                        Experience a clean, fast, and beautiful Android ROM.
                    </p>
                    <Link to="/downloads" className="btn" data-aos="fade-up" data-aos-delay="400">
                        Get Started
                    </Link>
                </div>
            </div>

            <div className="section" id="features">
                <div className="container">
                    <h2 className="section-title" data-aos="fade-up">Why Choose HorizonDroid?</h2>
                    <div className="features">
                        <div className="feature-card" data-aos="fade-up">
                            <div className="feature-icon"><i className="fas fa-leaf"></i></div>
                            <h3>Lightweight</h3>
                            <p>A bloat-free experience for maximum performance.</p>
                        </div>
                        <div className="feature-card" data-aos="fade-up" data-aos-delay="200">
                            <div className="feature-icon"><i className="fas fa-bolt"></i></div>
                            <h3>Fast & Smooth</h3>
                            <p>Optimized for speed and responsiveness.</p>
                        </div>
                        <div className="feature-card" data-aos="fade-up" data-aos-delay="400">
                            <div className="feature-icon"><i className="fas fa-palette"></i></div>
                            <h3>Customizable</h3>
                            <p>Make your device truly yours with our customization options.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
