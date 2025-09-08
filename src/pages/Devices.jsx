import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../components/css/Devices.css';

const Devices = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100
        });

        document.body.classList.add('light-theme');

        return () => {
            document.body.classList.remove('light-theme');
        };
    }, []);

    const devices = [
        {
            id: 'marble',
            name: 'Poco F5 (Marble)',
            image: '/img/marble.png',
            maintainer: {
                name: 'MaulsXSMGReborn',
                telegram: 'https://t.me/Maulanariaddy'
            },
            downloadUrl: 'https://sourceforge.net/projects/horizondroid/files/marble/',
            delay: 100
        },
        {
            id: 'davinci',
            name: 'Mi 9T (Davinci)',
            image: '/img/davinci.png',
            maintainer: {
                name: 'superxorn',
                telegram: 'https://t.me/superxorn'
            },
            downloadUrl: 'https://sourceforge.net/projects/horizondroid/files/davinci/',
            delay: 150
        },
        {
            id: 'stone',
            name: 'Poco X5 5G/Redmi Note 12 5G (Stone)',
            image: '/img/stone.webp',
            maintainer: {
                name: 'Jarvis',
                telegram: 'https://t.me/itz_me_jarvis'
            },
            downloadUrl: 'https://sourceforge.net/projects/horizondroid/files/stone/',
            delay: 200
        },
        {
            id: 'gale',
            name: 'Redmi 13C/POCO C65 (Gale)',
            image: '/img/gale.jpg',
            maintainer: {
                name: 'SuperVannXツ',
                telegram: 'https://t.me/panzzxz'
            },
            downloadUrl: 'https://sourceforge.net/projects/horizondroid/files/gale/',
            delay: 250
        },
        {
            id: 'miatoll',
            name: 'Redmi Note 9 Pro (Miatoll)',
            image: '/img/miatoll.png',
            maintainer: {
                name: 'Afif',
                telegram: 'https://t.me/Afifmomin12'
            },
            downloadUrl: 'https://sourceforge.net/projects/horizondroid/files/miatoll/',
            delay: 300
        },
        {
            id: 'garnet',
            name: 'Redmi Note 13 Pro 5G/Poco X6 (Garnet)',
            image: '/img/garnet.webp',
            maintainer: {
                name: 'SoniHikari',
                telegram: 'https://t.me/StartTrueDreams'
            },
            downloadUrl: 'https://sourceforge.net/projects/horizondroid/files/garnet/',
            delay: 350
        },
        {
            id: 'sweet',
            name: 'Redmi Note 10 Pro (Sweet)',
            image: '/img/sweet.png',
            maintainer: {
                name: 'Djampt',
                telegram: 'https://t.me/Djampt'
            },
            downloadUrl: 'https://sourceforge.net/projects/horizondroid/files/sweet/',
            delay: 400
        }
    ];

    return (
        <div className="page-content" id="devices">
            <div className="container">
                <div className="section">
                    <h1 className="section-title" data-aos="fade-up">
                        Device Downloads
                    </h1>
                    
                    <p className="devices-intro" data-aos="fade-up">
                        Download HorizonDroid for your device. Select your device from the
                        list below to get the latest ROM.
                    </p>

                    <div className="device-grid">
                        {devices.map((device) => (
                            <div 
                                key={device.id}
                                className="device-card" 
                                data-aos="fade-up" 
                                data-aos-delay={device.delay}
                            >
                                <div className="device-image">
                                    <img 
                                        src={device.image} 
                                        alt={device.name}
                                        loading="lazy"
                                    />
                                </div>
                                <div className="device-info">
                                    <h3>{device.name}</h3>
                                    <p className="maintainer-info">
                                        Maintainer: <a 
                                            href={device.maintainer.telegram} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                        >
                                            {device.maintainer.name}
                                        </a>
                                    </p>
                                    <div className="device-actions">
                                        <a 
                                            href={device.downloadUrl} 
                                            className="btn btn-download"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="fas fa-download"></i> 
                                            Download
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Devices;
