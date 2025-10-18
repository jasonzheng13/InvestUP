import React from 'react';

function Map({ selectedProperty }) {
  return (
    <div className="h-[600px] rounded-3xl overflow-hidden shadow-lg bg-white">
      {/* Map placeholder - replace with real map (Leaflet/Mapbox) later */}
      <div className="w-full h-full flex items-center justify-center text-gray-500">
        {selectedProperty ? (
          <div className="text-center">
            <p className="font-semibold text-gray-800">Map focused on:</p>
            <p className="mt-2 font-bold">{selectedProperty.address}</p>
            <p className="text-sm text-gray-600">{selectedProperty.city}, {selectedProperty.state}</p>
          </div>
        ) : (
          <div className="text-center">
            <p className="font-semibold text-gray-800">Map Placeholder</p>
            <p className="text-sm text-gray-600">Add a map (Leaflet/Mapbox/Google) here</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Map;
