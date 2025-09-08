import React from 'react';
import '../components/css/Build.css';

const Build = () => {

    return (
        <div className="page-content" id="build">
            <div className="container">
                <div className="section">
                    <div className="build-content">
                        
                        {/* Hero Header Section */}
                        <div className="build-section">
                            <h1>Looking for building/maintaining?</h1>
                            <p style={{color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', marginBottom: 0}}>
                                Join the HorizonDroid development community and contribute to the future of custom Android ROMs.
                            </p>
                        </div>
                        
                        {/* Source Section */}
                        <div className="build-section">
                            <h2>
                                <i className="fas fa-code-branch"></i> Source Code
                            </h2>
                            <p>
                                Get started with HorizonDroid development by accessing our source code. 
                                You can find the complete source by searching <b>
                                    <a 
                                        href="https://github.com/horizonv2/android" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        HorizonV2
                                    </a>
                                </b> on GitHub.
                            </p>
                        </div>
                        
                        {/* Building Guide Section */}
                        <div className="build-section">
                            <h2>
                                <i className="fas fa-book"></i> Building Guide
                            </h2>
                            <p>
                                Learn how to build custom ROMs from scratch with our comprehensive tutorial series. 
                                Perfect for both beginners and experienced developers looking to enhance their skills.
                            </p>
                            <a 
                                href="https://www.youtube.com/playlist?list=PLrDdnF-jkUITWPgIDbmKuYrNgybmLM4WR" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="btn"
                            >
                                <i className="fab fa-youtube"></i> Watch Tutorial Series
                            </a>
                        </div>
                        
                        {/* Maintainership Requirements */}
                        <div className="build-section">
                            <h2>
                                <i className="fas fa-user-check"></i> Maintainership Requirements
                            </h2>
                            <div className="requirements-box">
                                <p>To become an official maintainer for HorizonDroid, you must meet these essential requirements:</p>
                                <ul>
                                    <li>You <b>MUST</b> own the device you want to maintain. Blind and untested builds aren't allowed.</li>
                                    <li>You must have solid knowledge of basic git operations (cherry-pick, squash, rebase, etc).</li>
                                    <li>Your device trees should be <b>clean</b> with <b>proper authorships</b> and <b>meaningful commit messages</b>.</li>
                                    <li>Your device sources <b>MUST</b> be completely open source and publicly available.</li>
                                    <li>Your build <b>MUST</b> be running SELinux in enforcing mode.</li>
                                    <li>Prebuilt kernels are only allowed <b>if proper kernel sources are unavailable</b>.</li>
                                    <li>You should have experience reading logcats and debugging device-related issues.</li>
                                    <li>You must not maintain more than 3 ROMs simultaneously (including HorizonDroid).</li>
                                    <li>You <b>MUST</b> provide an unofficial build with your maintainership application.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Device Requirements */}
                        <div className="build-section">
                            <h2>
                                <i className="fas fa-mobile-alt"></i> Device Requirements
                            </h2>
                            <div className="requirements-box">
                                <p>All devices must meet these technical standards for official support:</p>
                                <ul>
                                    <li><b>Audio:</b> Full support for media playback, in-call audio, and speaker functionality.</li>
                                    <li><b>Connectivity:</b> Working RIL for calls/data, Wi-Fi with correct MAC address, and emergency calling support.</li>
                                    <li><b>Hardware:</b> Proper USB/MTP functionality and tethering capabilities where applicable.</li>
                                    <li><b>Location:</b> GPS must work if supported by stock OS.</li>
                                    <li><b>Camera:</b> Both front and rear cameras must function with video recording support.</li>
                                    <li><b>Biometrics:</b> Fingerprint sensors must work on Marshmallow+ devices.</li>
                                    <li><b>Sensors:</b> All basic sensors (accelerometer, gyroscope, proximity, light) must function.</li>
                                    <li><b>Security:</b> SELinux enforcing mode is mandatory (exceptions may be granted).</li>
                                    <li><b>Display:</b> LiveDisplay support recommended where possible.</li>
                                    <li><b>Source Code:</b> Kernel sources must be publicly available and properly maintained.</li>
                                </ul>
                                <br />
                                <p>
                                    <i className="fas fa-info-circle" style={{color: 'var(--primary)', marginRight: '8px'}}></i>
                                    This document incorporates requirements from LineageOS' 
                                    <a 
                                        href="https://github.com/LineageOS/charter/blob/master/device-support-requirements.md" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        style={{marginLeft: '4px'}}
                                    >
                                        device support standards
                                    </a> (CC-BY-3.0) with HorizonDroid-specific modifications.
                                </p>
                            </div>
                        </div>

                        {/* Application Section */}
                        <div className="build-section">
                            <h2>
                                <i className="fas fa-paper-plane"></i> Ready to Apply?
                            </h2>
                            <p>
                                If you meet all the requirements and are ready to contribute to the HorizonDroid project, 
                                we'd love to have you on our team! Click below to start your maintainership application process.
                            </p>
                            <a 
                                href="https://t.me/superxorn" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="btn"
                            >
                                <i className="fas fa-rocket"></i> Submit Application
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Build;
