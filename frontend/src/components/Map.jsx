import { useEffect, useRef } from 'react';
import L from 'leaflet';

function Map() {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    // Only initialize the map once
    if (mapInstanceRef.current) return;

    // Initialize the map
    const map = L.map(mapRef.current).setView([51.505, -0.09], 13);

    // Add the tile layer (the actual map images)
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // Add a marker
    L.marker([51.5, -0.09]).addTo(map)
      .bindPopup('A pretty CSS popup.<br> Easily customizable.')
      .openPopup();

    // Store the map instance
    mapInstanceRef.current = map;

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return <div ref={mapRef} style={{ height: '400px', width: '100%' }} />;
}

export default Map;