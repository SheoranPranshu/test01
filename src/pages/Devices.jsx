import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../components/css/Devices.css';

const Devices = () => {
    const [devices, setDevices] = useState([]);
    const [filteredDevices, setFilteredDevices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeFilter, setActiveFilter] = useState('all');
    const [selectedDevice, setSelectedDevice] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100
        });

        document.body.classList.add('light-theme');
        fetchDeviceData();

        return () => {
            document.body.classList.remove('light-theme');
        };
    }, []);

    // Fetch device data from API
    const fetchDeviceData = async () => {
        try {
            setLoading(true);
            console.log('Fetching device data...');

            // Fetch unified device info from JSON
            const deviceInfoRes = await fetch('https://raw.githubusercontent.com/AxionAOSP/official_devices/refs/heads/main/dinfo.json');
            
            if (!deviceInfoRes.ok) {
                throw new Error(`Failed to fetch device info: ${deviceInfoRes.status} ${deviceInfoRes.statusText}`);
            }
            
            const deviceData = await deviceInfoRes.json();
            console.log(`Loaded ${deviceData.devices.length} devices from API`);
            
            // Process device data
            const processedDevices = await processDevices(deviceData.devices);
            console.log(`Processed ${processedDevices.length} devices`);
            
            setDevices(processedDevices);
            setFilteredDevices(processedDevices);
            
        } catch (err) {
            console.error('Error fetching device data:', err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // Process devices from API
    const processDevices = async (devicesData) => {
        const processedDevices = [];
        const usedCodenames = new Set();

        for (const device of devicesData) {
            if (usedCodenames.has(device.codename)) {
                console.warn(`Duplicate codename skipped: ${device.codename}`);
                continue;
            }
            usedCodenames.add(device.codename);

            const brandName = getDeviceBrand(device.device_name);
            
            // Fetch flavor data for each device
            const [gmsData, vanillaData] = await Promise.all([
                fetchFlavorData(device.codename, 'GMS'),
                fetchFlavorData(device.codename, 'VANILLA'),
            ]);

            const processedDevice = {
                id: device.codename,
                name: device.device_name,
                codename: device.codename,
                brand: brandName,
                maintainer: {
                    name: device.maintainer,
                    telegram: device.support_group || ''
                },
                image: device.image_url || '/img/fallback.png',
                flavors: {
                    gms: gmsData,
                    vanilla: vanillaData
                },
                hasBuilds: !!(gmsData || vanillaData)
            };

            processedDevices.push(processedDevice);
        }

        return processedDevices;
    };

    // Fetch flavor data for a device
    const fetchFlavorData = async (codename, type) => {
        try {
            const url = `https://raw.githubusercontent.com/AxionAOSP/official_devices/main/OTA/${type}/${codename}.json`;
            const res = await fetch(url);
            
            if (!res.ok) {
                return null;
            }

            const data = await res.json();
            if (!data.response || !data.response[0]) {
                return null;
            }
            
            return data.response[0];
        } catch (error) {
            console.error(`Error fetching ${type} data for ${codename}:`, error);
            return null;
        }
    };

    // Determine device brand from name
    const getDeviceBrand = (deviceName) => {
        const brands = {
            google: /Google Pixel/i,
            samsung: /Galaxy|Samsung/i,
            poco: /POCO/i,
            realme: /Realme/i,
            xiaomi: /Xiaomi|Redmi|Mi/i,
            tecno: /TECNO/i,
            motorola: /Motorola|Moto/i,
            oneplus: /Oneplus|OnePlus/i,
        };

        const brand = Object.entries(brands).find(([_, regex]) =>
            regex.test(deviceName)
        )?.[0] || 'other';

        return brand;
    };

    // Get unique brands from devices
    const getBrands = () => {
        const brands = new Set();
        devices.forEach(device => {
            if (device.brand) {
                brands.add(device.brand);
            }
        });
        return Array.from(brands).sort();
    };

    // Handle search
    const handleSearch = (query) => {
        setSearchQuery(query);
        filterDevices(query, activeFilter);
    };

    // Handle filter
    const handleFilter = (filter) => {
        setActiveFilter(filter);
        filterDevices(searchQuery, filter);
    };

    // Filter devices based on search and brand filter
    const filterDevices = (search, filter) => {
        let filtered = devices;

        // Apply brand filter
        if (filter !== 'all') {
            filtered = filtered.filter(device => device.brand === filter);
        }

        // Apply search filter
        if (search.trim()) {
            const searchLower = search.toLowerCase();
            filtered = filtered.filter(device => 
                device.name.toLowerCase().includes(searchLower) ||
                device.codename.toLowerCase().includes(searchLower) ||
                device.maintainer.name.toLowerCase().includes(searchLower)
            );
        }

        setFilteredDevices(filtered);
    };

    // Handle device card click
    const handleDeviceClick = (device) => {
        if (!device.hasBuilds) {
            showSnackbar("No builds available for this device yet.");
            return;
        }
        setSelectedDevice(device);
        setModalOpen(true);
    };

    // Show snackbar notification
    const showSnackbar = (message) => {
        // Simple snackbar implementation - you can enhance this
        alert(message);
    };

    // Render flavor information
    const renderFlavor = (type, data) => {
        if (!data) return null;

        const sizeMB = data.size ? (data.size / 1024 / 1024).toFixed(1) + 'MB' : 'N/A';
        const buildDate = data.datetime ? new Date(data.datetime * 1000).toLocaleDateString() : 'N/A';
        const hasDownload = data.url && data.url.trim() !== '';

        return (
            <div key={type} className="flavor-card">
                <div className="flavor-header">
                    <div className="flavor-title">{type}</div>
                    {hasDownload ? (
                        <a 
                            href={data.url} 
                            className="btn btn-download"
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                        >
                            <i className="fas fa-download"></i> {sizeMB}
                        </a>
                    ) : (
                        <span className="btn btn-disabled">
                            <i className="fas fa-ban"></i> N/A
                        </span>
                    )}
                </div>
                {hasDownload && (
                    <div className="version-info">
                        <div>Version: {data.version}</div>
                        <div>Build Date: {buildDate}</div>
                        <div>File: {data.filename}</div>
                    </div>
                )}
            </div>
        );
    };

    if (loading) {
        return (
            <div className="page-content" id="devices">
                <div className="container">
                    <div className="section">
                        <div className="loading-state">
                            <i className="fas fa-spinner fa-spin"></i>
                            <p>Loading devices...</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="page-content" id="devices">
                <div className="container">
                    <div className="section">
                        <div className="error-state">
                            <i className="fas fa-exclamation-triangle"></i>
                            <p>Failed to load devices: {error}</p>
                            <p>
                                Please check the console for details or visit the{' '}
                                <a 
                                    href="https://github.com/AxionAOSP/official_devices" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    official repository
                                </a>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="page-content" id="devices">
            <div className="container">
                <div className="section">
                    <h1 className="section-title" data-aos="fade-up">
                        Experience the
                        <br />
                        <span className="highlight">Revolution.</span>
                    </h1>
                    
                    <p className="devices-intro" data-aos="fade-up">
                        Download HorizonDroid for your device. Select your device from the
                        list below to get the latest ROM.
                    </p>

                    {/* Search Bar */}
                    <div className="search-container" data-aos="fade-up">
                        <div className="search-wrapper">
                            <i className="fas fa-search"></i>
                            <input 
                                type="text"
                                placeholder="Find your device..."
                                value={searchQuery}
                                onChange={(e) => handleSearch(e.target.value)}
                                className="search-input"
                            />
                        </div>
                    </div>

                    {/* Brand Filters */}
                    <div className="brand-filters" data-aos="fade-up">
                        <button 
                            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                            onClick={() => handleFilter('all')}
                        >
                            All
                        </button>
                        {getBrands().map(brand => (
                            <button 
                                key={brand}
                                className={`filter-btn ${activeFilter === brand ? 'active' : ''}`}
                                onClick={() => handleFilter(brand)}
                            >
                                {brand.charAt(0).toUpperCase() + brand.slice(1)}
                            </button>
                        ))}
                    </div>

                    {/* Device Grid */}
                    <div className="device-grid">
                        {filteredDevices.map((device, index) => (
                            <div 
                                key={device.id}
                                className="device-card" 
                                data-aos="fade-up" 
                                data-aos-delay={index * 50}
                                onClick={() => handleDeviceClick(device)}
                            >
                                <div className="device-image">
                                    <img 
                                        src={device.image} 
                                        alt={device.name}
                                        loading="lazy"
                                        onError={(e) => {
                                            e.target.src = '/img/fallback.png';
                                        }}
                                    />
                                </div>
                                <div className="device-info">
                                    <h3>{device.name} ({device.codename})</h3>
                                    <p className="maintainer-info">
                                        Maintainer: <span className="maintainer-name">
                                            {device.maintainer.name}
                                        </span>
                                    </p>
                                    <div className="device-status">
                                        {device.hasBuilds ? (
                                            <span className="status-available">
                                                <i className="fas fa-check-circle"></i> Builds Available
                                            </span>
                                        ) : (
                                            <span className="status-unavailable">
                                                <i className="fas fa-clock"></i> Coming Soon
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredDevices.length === 0 && !loading && (
                        <div className="no-results">
                            <i className="fas fa-search"></i>
                            <p>No devices found matching your criteria.</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Modal for device details */}
            {modalOpen && selectedDevice && (
                <div className="modal-overlay" onClick={() => setModalOpen(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button 
                            className="modal-close"
                            onClick={() => setModalOpen(false)}
                        >
                            <i className="fas fa-times"></i>
                        </button>
                        <div className="modal-header">
                            <h2>{selectedDevice.name}</h2>
                            <p>Codename: {selectedDevice.codename}</p>
                        </div>
                        <div className="modal-body">
                            {selectedDevice.flavors.gms && renderFlavor('GMS', selectedDevice.flavors.gms)}
                            {selectedDevice.flavors.vanilla && renderFlavor('Vanilla', selectedDevice.flavors.vanilla)}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Devices;
