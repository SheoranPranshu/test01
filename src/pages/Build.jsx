import React, { useEffect } from 'react';
import '../components/css/Build.css';

const Build = () => {
    useEffect(() => {
        const sections = document.querySelectorAll('.build-section');
        sections.forEach((section, index) => {
            setTimeout(() => {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, []);

    return (
        <div className="page-content" id="build">
            <div className="container">
                <div className="section">
                    <div className="build-content">
                        
                        {/* Header Section */}
                        <div className="build-section">
                            <h1>Looking for building/maintaining?</h1>
                        </div>
                        
                        {/* Source Section */}
                        <div className="build-section">
                            <h2>
                                <i className="fas fa-code-branch"></i> Source
                            </h2>
                            <p>
                                You can get source by searching <b>
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
                        
                        <hr />
                        
                        {/* Building Guide Section */}
                        <div className="build-section">
                            <h2>
                                <i className="fas fa-book"></i> Building Guide
                            </h2>
                            <p>Here's a comprehensive tutorial on creating custom ROMs for beginners and advanced users.</p>
                            <a 
                                href="https://www.youtube.com/playlist?list=PLrDdnF-jkUITWPgIDbmKuYrNgybmLM4WR" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="btn"
                            >
                                <i className="fab fa-youtube"></i> YouTube Tutorial
                            </a>
                        </div>
                        
                        {/* Maintainership Requirements */}
                        <div className="build-section">
                            <h2>
                                <i className="fas fa-tasks"></i> Maintainership Requirements
                            </h2>
                            <div className="requirements-box">
                                <p>To become an official maintainer for HorizonDroid, you must meet the following requirements:</p>
                                <ul>
                                    <li>You <b>MUST</b> own the device. Blind and untested builds aren't allowed. Unified, and devices with minimal hardware changes are also allowed to be maintained.</li>
                                    <li>You must have basic git (cherry-pick, squash, etc) knowledge.</li>
                                    <li>Your trees should be <b>clean</b> and should have <b>proper authorships</b> and <b>commit names</b>.</li>
                                    <li>Your device sources <b>MUST</b> be open source for us.</li>
                                    <li>You <b>MUST</b> be on SELinux enforcing.</li>
                                    <li>Prebuilt kernels are only allowed <b>if your device does not have proper kernel sources</b>. You <b>MUSTN'T</b> ship a prebuilt kernel if you have working kernel sources available just because you save 5 minutes of build time.</li>
                                    <li>You should have some basic knowledge of reading logcats and managing most device related errors/bugs.</li>
                                    <li>You must not maintain more than 3 ROMs including HorizonDroid (applies for both official and unofficial) and also XDA threads are recommended but not mandatory.</li>
                                    <li>You should release an unofficial build and <b>MUST</b> attach a link in the maintainership form.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Device Requirements */}
                        <div className="build-section">
                            <h2>
                                <i className="fas fa-mobile-alt"></i> Device Requirements
                            </h2>
                            <div className="requirements-box">
                                <p>All devices must meet these technical requirements:</p>
                                <ul>
                                    <li>All devices <b>MUST</b> support audio playback for media content.</li>
                                    <li>Phones <b>MUST</b> support in-call audio.</li>
                                    <li>Phones <b>MUST</b> support speaker audio.</li>
                                    <li>Tablet devices capable of in-call audio/speaker audio <b>MUST</b> support in-call/speaker audio.</li>
                                    <li>All devices <b>SHOULD</b> support any additional audio configuration inherent to their device (eg. echo cancellation, extra mics, etc).</li>
                                    <li>All devices <b>MUST</b> support any other audio output supported by their stock OS (eg. headphone jack, USB-C, BT).</li>
                                    <li>All devices with RIL supported in their stock OS <b>MUST</b> support RIL for phone calls & data.</li>
                                    <li>All devices with RIL supported in their stock OS <b>MUST</b> support emergency calling with a SIM inserted (112/911).</li>
                                    <li>Data-only devices (defined as devices that have a RIL but do not support telephony stack due to hardware/firmware restrictions) are <b>EXEMPTED</b> from phone & emergency dialing requirements.</li>
                                    <li>All devices with Wi-Fi supported in their stock OS <b>MUST</b> support Wi-Fi.</li>
                                    <li>All devices with Wi-Fi <b>MUST</b> report same MAC address as on stock OS.</li>
                                    <li>All devices with Wi-Fi hotspot capabilities <b>MUST</b> support Wi-Fi tethering.</li>
                                    <li>All devices with a USB port <b>MUST</b> support file access via MTP.</li>
                                    <li>All devices with USB tethering supported on their stock OS <b>MUST</b> support USB tethering.</li>
                                    <li>All devices with a USB port & Data <b>SHOULD</b> support USB tethering.</li>
                                    <li>All devices with GPS supported in their stock OS <b>MUST</b> support GPS.</li>
                                    <li>All devices with Camera supported in their stock OS <b>MUST</b> support Camera, in both front facing and rear camera configurations.</li>
                                    <li>All devices with Dual (or more) Rear Cameras <b>SHOULD</b> support all rear cameras.</li>
                                    <li>All devices with Dual (or more) Front Facing Cameras <b>SHOULD</b> support all front cameras.</li>
                                    <li>All Camera HAL versions accessible with the device's Camera HAL <b>MUST</b> comply with the Camera and Video Recording requirements.</li>
                                    <li>All devices with Video Recording supported in their stock OS <b>MUST</b> support Video Recording, in both front facing and rear camera configurations.</li>
                                    <li>All devices with a Fingerprint Sensor <b>MUST</b> support the Fingerprint Sensor if the stock OS supports it with Marshmallow or higher Android versions.</li>
                                    <li>All devices with a Fingerprint Sensor <b>SHOULD</b> support the Fingerprint Sensor if the stock OS supports it for all other Android versions.</li>
                                    <li>All devices with an accelerometer <b>MUST</b> support the accelerometer.</li>
                                    <li>All devices with a gyroscope <b>MUST</b> support the gyroscope.</li>
                                    <li>All devices with a proximity sensor <b>MUST</b> support the proximity sensor.</li>
                                    <li>All devices with a light sensor <b>MUST</b> support the light sensor.</li>
                                    <li>All other sensors supported by a device's stock OS <b>SHOULD</b> be supported.</li>
                                    <li>All devices <b>MUST</b> be configured for SELinux Enforcing. Exceptions <b>MAY</b> be made for this.</li>
                                    <li>All devices <b>SHOULD</b> support LiveDisplay. Exceptions <b>MAY</b> be made for this.</li>
                                    <li>All commits <b>MUST</b> have proper authorship to the author of the commits.</li>
                                    <li>Your used kernel <b>MUST</b> be open source.</li>
                                    <li>If your build is deemed unstable by the team you <b>MAY NOT</b> be allowed to maintain officially.</li>
                                    <li>Exceptions <b>MAY</b> be made for some of these mentioned requirements.</li>
                                </ul>
                                <br />
                                <p>
                                    This document uses work from LineageOS' <a 
                                        href="https://github.com/LineageOS/charter/blob/master/device-support-requirements.md" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        device support requirements
                                    </a> which is licensed under CC-BY-3.0, some modifications were made to it.
                                </p>
                            </div>
                        </div>

                        {/* Application Section */}
                        <div className="build-section">
                            <h2>
                                <i className="fas fa-check-circle"></i> Eligible?
                            </h2>
                            <p>If you meet all the requirements, you can apply to become an official maintainer.</p>
                            <a 
                                href="https://t.me/superxorn" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="btn"
                            >
                                <i className="fas fa-file-alt"></i> Apply Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Build;
