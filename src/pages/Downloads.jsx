import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Downloads = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div className="page-content" id="downloads">
            <div className="container">
                <div className="section">
                    <h1 className="section-title" data-aos="fade-up">Downloads</h1>
                    <div className="device-grid">
                        {/* Device Cards */}
                        <div className="device-card" data-aos="fade-up">
                            <div className="device-image">
                                <img src="/img/marble.png" alt="Poco F5" />
                            </div>
                            <div className="device-info">
                                <h3>Poco F5 (Marble)</h3>
                                <p>Maintainer: MaulsXSMGReborn</p>
                                <a href="#" className="btn">Download</a>
                            </div>
                        </div>
                        <div className="device-card" data-aos="fade-up" data-aos-delay="200">
                            <div className="device-image">
                                <img src="/img/davinci.png" alt="Mi 9T" />
                            </div>
                            <div className="device-info">
                                <h3>Mi 9T (Davinci)</h3>
                                <p>Maintainer: superxorn</p>
                                <a href="#" className="btn">Download</a>
                            </div>
                        </div>
                        {/* Add other devices here */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Downloads;
