import { useState } from 'react';

function PropertyCard({ property, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative h-80 rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(property)}
    >
      {/* Property Image Background */}
      <img
        src={property.imageUrl}
        alt={property.address}
        className="w-full h-full object-cover"
      />

      {/* Dark Overlay on Hover - Shows Income Info */}
      {isHovered && (
        <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center text-white p-6 animate-fadeIn">
          <div className="space-y-3 text-center">
            <p className="text-lg font-semibold">
              Airbnb Est. Income: <span className="text-green-400">${property.airbnbIncome}/mo</span>
            </p>
            <p className="text-lg font-semibold">
              Lease Est. Income: <span className="text-green-400">${property.leaseIncome}/mo</span>
            </p>
            <p className="text-lg font-semibold">
              Flip Profit: <span className="text-green-400">${property.flipProfit}</span> (6 months)
            </p>
          </div>
          <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-colors">
            View Details
          </button>
        </div>
      )}

      {/* Favorite Heart Icon (Top Right) */}
      {/* <div className="absolute top-4 right-4">
        <div className={`bg-white rounded-full p-2 shadow-lg transition-all ${isHovered ? 'scale-110' : ''}`}>
          <svg 
            className={`w-6 h-6 ${property.isFavorite ? 'fill-red-500' : 'fill-none'} stroke-gray-800`}
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
      </div> */}

      {/* Property Info Badge (Bottom Left) - Always Visible */}
      {!isHovered && (
        <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 rounded-2xl px-4 py-2 shadow-lg">
          <p className="font-bold text-gray-900">${(property.price / 1000).toFixed(0)}k</p>
          <p className="text-sm text-gray-600">{property.bedrooms} bed • {property.bathrooms} bath</p>
        </div>
      )}
    </div>
  );
}

export default PropertyCard;