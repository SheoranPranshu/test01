import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Build = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div className="page-content" id="build">
            <div className="container">
                <div className="section">
                    <h1 className="section-title" data-aos="fade-up">Build HorizonDroid</h1>
                    <div className="build-content" data-aos="fade-up">
                        <h2>Source Code</h2>
                        <p>Our source code is available on GitHub. You can find the repositories under the HorizonV2 organization.</p>
                        <a href="https://github.com/horizonv2" className="btn" target="_blank" rel="noopener noreferrer">
                            View on GitHub
                        </a>

                        <h2 style={{ marginTop: '40px' }}>Building Guide</h2>
                        <p>We have a comprehensive guide to help you build HorizonDroid for your device.</p>
                        <a href="#" className="btn">
                            Read the Guide
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Build;
