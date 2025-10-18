// Hardcoded market rates by city
// For now, we will present mock data
// Once external API integration is done, we will replace this with dynamic data fetching

export const MARKET_RATES = {
    'Austin, TX': {
    airbnb_nightly: 185,
    rental_monthly: 2400,
    appreciation_rate: 4.8,
    property_tax_rate: 1.81,
    insurance_annual: 1800,
  },
  'Miami, FL': {
    airbnb_nightly: 220,
    rental_monthly: 2850,
    appreciation_rate: 5.2,
    property_tax_rate: 1.02,
    insurance_annual: 2100,
  },
  'Phoenix, AZ': {
    airbnb_nightly: 160,
    rental_monthly: 2100,
    appreciation_rate: 4.1,
    property_tax_rate: 0.62,
    insurance_annual: 1500,
  },
  'Nashville, TN': {
    airbnb_nightly: 175,
    rental_monthly: 2350,
    appreciation_rate: 5.5,
    property_tax_rate: 0.74,
    insurance_annual: 1600,
  },
  'Denver, CO': {
    airbnb_nightly: 210,
    rental_monthly: 2900,
    appreciation_rate: 4.3,
    property_tax_rate: 0.51,
    insurance_annual: 1700,
  },
};

// How to return market data for location

export function getMarketData(city, state) {
    const location = `${city}, ${state}`;
    // Can change null return to default; discuss with team
    return MARKET_RATES[location] || null;
}

// Get all available market locations
export function getAvailableLocations() {
    return Object.keys(MARKET_RATES);
}