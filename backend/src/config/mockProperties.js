// Mock Data will go here for testing purposes
// This file can be expanded to include various mock properties
// that can be used throughout the backend during development and testing

export const MOCK_PROPERTIES = [
  // Austin, TX (5 properties)
  {
    id: 'mock_1',
    address: '2304 Longview St',
    city: 'Austin',
    state: 'TX',
    zip: '78705',
    price: 385000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1850,
    yearBuilt: 2018,
    propertyType: 'Single Family',
    latitude: 30.2920,
    longitude: -97.7421,
    imageUrl: 'https://source.unsplash.com/800x600/?modern-house',
    description: 'Beautiful modern home in central Austin'
  },
  {
    id: 'mock_2',
    address: '1507 Shoal Creek Blvd',
    city: 'Austin',
    state: 'TX',
    zip: '78701',
    price: 425000,
    bedrooms: 4,
    bathrooms: 2.5,
    sqft: 2100,
    yearBuilt: 2020,
    propertyType: 'Single Family',
    latitude: 30.2785,
    longitude: -97.7538,
    imageUrl: 'https://source.unsplash.com/800x600/?luxury-home',
    description: 'Spacious family home near downtown'
  },
  {
    id: 'mock_3',
    address: '3412 Windsor Rd',
    city: 'Austin',
    state: 'TX',
    zip: '78703',
    price: 340000,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1450,
    yearBuilt: 2019,
    propertyType: 'Condo',
    latitude: 30.2951,
    longitude: -97.7586,
    imageUrl: 'https://source.unsplash.com/800x600/?condo',
    description: 'Modern condo with great amenities'
  },
  {
    id: 'mock_4',
    address: '5803 Berkman Dr',
    city: 'Austin',
    state: 'TX',
    zip: '78723',
    price: 395000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1900,
    yearBuilt: 2017,
    propertyType: 'Single Family',
    latitude: 30.3038,
    longitude: -97.6987,
    imageUrl: 'https://source.unsplash.com/800x600/?family-house',
    description: 'Charming home in quiet neighborhood'
  },
  {
    id: 'mock_5',
    address: '1204 E 51st St',
    city: 'Austin',
    state: 'TX',
    zip: '78723',
    price: 415000,
    bedrooms: 3,
    bathrooms: 2.5,
    sqft: 2050,
    yearBuilt: 2021,
    propertyType: 'Single Family',
    latitude: 30.3108,
    longitude: -97.7174,
    imageUrl: 'https://source.unsplash.com/800x600/?new-construction',
    description: 'Brand new construction with modern finishes'
  },

  // Miami, FL (5 properties)
  {
    id: 'mock_6',
    address: '2450 Brickell Ave',
    city: 'Miami',
    state: 'FL',
    zip: '33129',
    price: 485000,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1400,
    yearBuilt: 2020,
    propertyType: 'Condo',
    latitude: 25.7617,
    longitude: -80.1918,
    imageUrl: 'https://source.unsplash.com/800x600/?miami-condo',
    description: 'Luxury condo in Brickell'
  },
  {
    id: 'mock_7',
    address: '1428 SW 22nd St',
    city: 'Miami',
    state: 'FL',
    zip: '33145',
    price: 410000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1750,
    yearBuilt: 2018,
    propertyType: 'Single Family',
    latitude: 25.7543,
    longitude: -80.2298,
    imageUrl: 'https://source.unsplash.com/800x600/?miami-house',
    description: 'Beautiful home in Coral Way'
  },
  {
    id: 'mock_8',
    address: '3800 Collins Ave',
    city: 'Miami',
    state: 'FL',
    zip: '33140',
    price: 520000,
    bedrooms: 2,
    bathrooms: 2.5,
    sqft: 1550,
    yearBuilt: 2019,
    propertyType: 'Condo',
    latitude: 25.8181,
    longitude: -80.1209,
    imageUrl: 'https://source.unsplash.com/800x600/?beach-condo',
    description: 'Oceanfront condo in Mid-Beach'
  },
  {
    id: 'mock_9',
    address: '7940 SW 104th St',
    city: 'Miami',
    state: 'FL',
    zip: '33156',
    price: 445000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2200,
    yearBuilt: 2016,
    propertyType: 'Single Family',
    latitude: 25.6850,
    longitude: -80.3267,
    imageUrl: 'https://source.unsplash.com/800x600/?florida-home',
    description: 'Spacious family home in Pinecrest'
  },
  {
    id: 'mock_10',
    address: '1901 Brickell Ave',
    city: 'Miami',
    state: 'FL',
    zip: '33129',
    price: 395000,
    bedrooms: 1,
    bathrooms: 1.5,
    sqft: 1100,
    yearBuilt: 2021,
    propertyType: 'Condo',
    latitude: 25.7645,
    longitude: -80.1912,
    imageUrl: 'https://source.unsplash.com/800x600/?studio-apartment',
    description: 'Modern studio in prime location'
  },

  // Phoenix, AZ (5 properties)
  {
    id: 'mock_11',
    address: '3215 E Camelback Rd',
    city: 'Phoenix',
    state: 'AZ',
    zip: '85018',
    price: 365000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1800,
    yearBuilt: 2019,
    propertyType: 'Single Family',
    latitude: 33.5092,
    longitude: -112.0158,
    imageUrl: 'https://source.unsplash.com/800x600/?desert-home',
    description: 'Desert modern home with mountain views'
  },
  {
    id: 'mock_12',
    address: '1850 E Missouri Ave',
    city: 'Phoenix',
    state: 'AZ',
    zip: '85016',
    price: 325000,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1450,
    yearBuilt: 2020,
    propertyType: 'Townhouse',
    latitude: 33.5194,
    longitude: -112.0436,
    imageUrl: 'https://source.unsplash.com/800x600/?townhouse',
    description: 'Modern townhouse near Arcadia'
  },
  {
    id: 'mock_13',
    address: '5402 N Central Ave',
    city: 'Phoenix',
    state: 'AZ',
    zip: '85012',
    price: 298000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1650,
    yearBuilt: 2017,
    propertyType: 'Single Family',
    latitude: 33.5141,
    longitude: -112.0740,
    imageUrl: 'https://source.unsplash.com/800x600/?arizona-house',
    description: 'Charming home in Central Phoenix'
  },
  {
    id: 'mock_14',
    address: '7234 E Shoeman Ln',
    city: 'Phoenix',
    state: 'AZ',
    zip: '85251',
    price: 410000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2350,
    yearBuilt: 2021,
    propertyType: 'Single Family',
    latitude: 33.4942,
    longitude: -111.9261,
    imageUrl: 'https://source.unsplash.com/800x600/?scottsdale-home',
    description: 'Luxury home in Scottsdale area'
  },
  {
    id: 'mock_15',
    address: '2401 E Camelback Rd',
    city: 'Phoenix',
    state: 'AZ',
    zip: '85016',
    price: 285000,
    bedrooms: 2,
    bathrooms: 1.5,
    sqft: 1350,
    yearBuilt: 2018,
    propertyType: 'Condo',
    latitude: 33.5098,
    longitude: -112.0332,
    imageUrl: 'https://source.unsplash.com/800x600/?phoenix-condo',
    description: 'Affordable condo near shopping'
  },

  // Nashville, TN (5 properties)
  {
    id: 'mock_16',
    address: '1214 Villa Pl',
    city: 'Nashville',
    state: 'TN',
    zip: '37212',
    price: 425000,
    bedrooms: 3,
    bathrooms: 2.5,
    sqft: 1950,
    yearBuilt: 2020,
    propertyType: 'Single Family',
    latitude: 36.1349,
    longitude: -86.8037,
    imageUrl: 'https://source.unsplash.com/800x600/?nashville-home',
    description: 'Stylish home in Midtown'
  },
  {
    id: 'mock_17',
    address: '3401 West End Ave',
    city: 'Nashville',
    state: 'TN',
    zip: '37203',
    price: 365000,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1500,
    yearBuilt: 2019,
    propertyType: 'Condo',
    latitude: 36.1512,
    longitude: -86.8082,
    imageUrl: 'https://source.unsplash.com/800x600/?nashville-condo',
    description: 'Modern condo near Vanderbilt'
  },
  {
    id: 'mock_18',
    address: '2105 Acklen Ave',
    city: 'Nashville',
    state: 'TN',
    zip: '37212',
    price: 395000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1850,
    yearBuilt: 2018,
    propertyType: 'Single Family',
    latitude: 36.1382,
    longitude: -86.7990,
    imageUrl: 'https://source.unsplash.com/800x600/?tennessee-house',
    description: 'Classic home in Green Hills'
  },
  {
    id: 'mock_19',
    address: '1010 16th Ave S',
    city: 'Nashville',
    state: 'TN',
    zip: '37212',
    price: 385000,
    bedrooms: 2,
    bathrooms: 2.5,
    sqft: 1650,
    yearBuilt: 2021,
    propertyType: 'Townhouse',
    latitude: 36.1392,
    longitude: -86.7947,
    imageUrl: 'https://source.unsplash.com/800x600/?music-city-home',
    description: 'New townhouse in Music Row'
  },
  {
    id: 'mock_20',
    address: '412 Mcgavock Pike',
    city: 'Nashville',
    state: 'TN',
    zip: '37214',
    price: 340000,
    bedrooms: 4,
    bathrooms: 2,
    sqft: 2050,
    yearBuilt: 2017,
    propertyType: 'Single Family',
    latitude: 36.1855,
    longitude: -86.6913,
    imageUrl: 'https://source.unsplash.com/800x600/?family-home',
    description: 'Spacious home in Donelson'
  },

  // Denver, CO (5 properties)
  {
    id: 'mock_21',
    address: '1350 N Ogden St',
    city: 'Denver',
    state: 'CO',
    zip: '80218',
    price: 525000,
    bedrooms: 3,
    bathrooms: 2.5,
    sqft: 2000,
    yearBuilt: 2020,
    propertyType: 'Single Family',
    latitude: 39.7392,
    longitude: -104.9750,
    imageUrl: 'https://source.unsplash.com/800x600/?denver-home',
    description: 'Modern home in Capitol Hill'
  },
  {
    id: 'mock_22',
    address: '2940 Zuni St',
    city: 'Denver',
    state: 'CO',
    zip: '80211',
    price: 465000,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1550,
    yearBuilt: 2019,
    propertyType: 'Condo',
    latitude: 39.7575,
    longitude: -105.0153,
    imageUrl: 'https://source.unsplash.com/800x600/?colorado-condo',
    description: 'Trendy condo in LoHi'
  },
  {
    id: 'mock_23',
    address: '1475 S Pearl St',
    city: 'Denver',
    state: 'CO',
    zip: '80210',
    price: 495000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1900,
    yearBuilt: 2018,
    propertyType: 'Single Family',
    latitude: 39.6857,
    longitude: -104.9789,
    imageUrl: 'https://source.unsplash.com/800x600/?denver-house',
    description: 'Beautiful home in Platt Park'
  },
  {
    id: 'mock_24',
    address: '3555 Blake St',
    city: 'Denver',
    state: 'CO',
    zip: '80205',
    price: 435000,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1450,
    yearBuilt: 2021,
    propertyType: 'Townhouse',
    latitude: 39.7643,
    longitude: -104.9735,
    imageUrl: 'https://source.unsplash.com/800x600/?modern-townhouse',
    description: 'New townhouse in RiNo'
  },
  {
    id: 'mock_25',
    address: '780 S Speer Blvd',
    city: 'Denver',
    state: 'CO',
    zip: '80223',
    price: 410000,
    bedrooms: 1,
    bathrooms: 1.5,
    sqft: 1200,
    yearBuilt: 2020,
    propertyType: 'Condo',
    latitude: 39.7160,
    longitude: -105.0008,
    imageUrl: 'https://source.unsplash.com/800x600/?loft',
    description: 'Luxury loft with city views'
  },
];

export function getAllProperties() {
  return MOCK_PROPERTIES;
}

export function getPropertyById(id) {
  return MOCK_PROPERTIES.find(p => p.id === id);
}

export function searchPropertiesByCity(city) {
  return MOCK_PROPERTIES.filter(p => 
    p.city.toLowerCase() === city.toLowerCase()
  );
}

export function filterProperties(filters = {}) {
  let results = [...MOCK_PROPERTIES];
  
  if (filters.city) {
    results = results.filter(p => 
      p.city.toLowerCase() === filters.city.toLowerCase()
    );
  }
  
  if (filters.minPrice) {
    results = results.filter(p => p.price >= filters.minPrice);
  }
  
  if (filters.maxPrice) {
    results = results.filter(p => p.price <= filters.maxPrice);
  }
  
  if (filters.bedrooms) {
    results = results.filter(p => p.bedrooms >= filters.bedrooms);
  }
  
  return results;
}