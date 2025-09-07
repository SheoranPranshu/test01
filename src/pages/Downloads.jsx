import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Downloads = () => {
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

  return (
    <div className="page-content" id="downloads">
      <div className="container">
        <div className="section">
          <h1 className="section-title" data-aos="fade-up">Device Downloads</h1>
          <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 50px' }} data-aos="fade-up">
            Download HorizonDroid for your device. Select your device from the
            list below to get the latest ROM.
          </p>

          <div className="device-grid">
            {/* Device Cards */}
            <div className="device-card" data-aos="fade-up" data-aos-delay="100">
              <div className="device-image">
                <img src="/img/marble.png" alt="Poco F5 (Marble)" />
              </div>
              <div className="device-info">
                <h3>Poco F5 (Marble)</h3>
                <p className="maintainer-info">Maintainer: <a href="https://t.me/Maulanariaddy" target="_blank">MaulsXSMGReborn</a></p>
                <div className="device-actions">
                  <a href="https://sourceforge.net/projects/horizondroid/files/marble/" className="btn btn-download"><i className="fas fa-download"></i> Download</a>
                </div>
              </div>
            </div>
            {/* Repeat for other devices */}
             <div className="device-card" data-aos="fade-up" data-aos-delay="150">
                <div className="device-image">
                    <img src="/img/davinci.png" alt="Mi 9T (Davinci)" />
                </div>
                <div className="device-info">
                    <h3>Mi 9T (Davinci)</h3>
                    <p className="maintainer-info">Maintainer: <a href="https://t.me/superxorn" target="_blank">superxorn</a></p>
                    <div className="device-actions">
                        <a href="https://sourceforge.net/projects/horizondroid/files/davinci/" className="btn btn-download"><i className="fas fa-download"></i> Download</a>
                    </div>
                </div>
            </div>
            <div className="device-card" data-aos="fade-up" data-aos-delay="200">
                <div className="device-image">
                    <img src="/img/stone.webp" alt="Poco X5 5G/Redmi Note 12 5G (Stone)" />
                </div>
                <div className="device-info">
                    <h3>Poco X5 5G/Redmi Note 12 5G (Stone)</h3>
                    <p className="maintainer-info">Maintainer: <a href="https://t.me/itz_me_jarvis" target="_blank">Jarvis</a></p>
                    <div className="device-actions">
                        <a href="https://sourceforge.net/projects/horizondroid/files/stone/" className="btn btn-download"><i className="fas fa-download"></i> Download</a>
                    </div>
                </div>
            </div>
            <div className="device-card" data-aos="fade-up" data-aos-delay="250">
                <div className="device-image">
                    <img src="/img/gale.jpg" alt="Redmi 13C/POCO C65 (Gale)" />
                </div>
                <div className="device-info">
                    <h3>Redmi 13C/POCO C65 (Gale)</h3>
                    <p className="maintainer-info">Maintainer: <a href="https://t.me/panzzxz" target="_blank">SuperVannXツ</a></p>
                    <div className="device-actions">
                        <a href="https://sourceforge.net/projects/horizondroid/files/gale/" className="btn btn-download"><i className="fas fa-download"></i> Download</a>
                    </div>
                </div>
            </div>
             <div className="device-card" data-aos="fade-up" data-aos-delay="300">
                <div className="device-image">
                    <img src="/img/miatoll.png" alt="Redmi Note 9 Pro (Miatoll)" />
                </div>
                <div className="device-info">
                    <h3>Redmi Note 9 Pro (Miatoll)</h3>
                    <p className="maintainer-info">Maintainer: <a href="https://t.me/Afifmomin12" target="_blank">Afif</a></p>
                    <div className="device-actions">
                        <a href="https://sourceforge.net/projects/horizondroid/files/miatoll/" className="btn btn-download"><i className="fas fa-download"></i> Download</a>
                    </div>
                </div>
            </div>
            <div className="device-card" data-aos="fade-up" data-aos-delay="350">
                <div className="device-image">
                    <img src="/img/garnet.webp" alt="Redmi Note 13 Pro 5G/Poco X6 (Garnet)" />
                </div>
                <div className="device-info">
                    <h3>Redmi Note 13 Pro 5G/Poco X6 (Garnet)</h3>
                    <p className="maintainer-info">Maintainer: <a href="https://t.me/StartTrueDreams" target="_blank">SoniHikari</a></p>
                    <div className="device-actions">
                        <a href="https://sourceforge.net/projects/horizondroid/files/garnet/" className="btn btn-download"><i className="fas fa-download"></i> Download</a>
                    </div>
                </div>
            </div>
            <div className="device-card" data-aos="fade-up" data-aos-delay="400">
                <div className="device-image">
                    <img src="/img/sweet.png" alt="Redmi Note 10 Pro (Sweet)" />
                </div>
                <div className="device-info">
                    <h3>Redmi Note 10 Pro (Sweet)</h3>
                    <p className="maintainer-info">Maintainer: <a href="https://t.me/Djampt">Djampt</a></p>
                    <div className="device-actions">
                        <a href="https://sourceforge.net/projects/horizondroid/files/sweet/" className="btn btn-download"><i className="fas fa-download"></i> Download</a>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Downloads;
