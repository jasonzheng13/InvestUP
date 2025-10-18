// Handler searches for properties based on optional filters
// Provides property search feature in UI


import { searchProperties, listAllProperties } from '../services/propertyService.js';
import { successResponse, errorResponse } from '../utils/response.js';

export async function handleSearch(c) {
    try {
        const city = c.req.query('city');
        const minPrice = c.req.query('minPrice') ? parseInt(c.req.query('minPrice')) : null;
        const maxPrice = c.req.query('maxPrice') ? parseInt(c.req.query('maxPrice')) : null;
        const propertyType = c.req.query('propertyType');
        const bedrooms = c.req.query('bedrooms') ? parseInt(c.req.query('bedrooms')) : null;

        const filters = {};
        
        if (city) filters.city = city;
        if (minPrice !== null) filters.minPrice = minPrice;
        if (maxPrice !== null) filters.maxPrice = maxPrice;
        if (propertyType) filters.propertyType = propertyType;
        if (bedrooms !== null) filters.bedrooms = bedrooms;

        const properties = Object.keys(filters).length > 0
            ? await searchProperties(filters)
            : await listAllProperties();
            
        return c.json(successResponse({
            count: properties.length,
            properties,
    }));

    } catch (error) {
        console.error('Error in handleSearch:', error);
        return c.json(errorResponse('Failed to search properties.', error.message), 500);
    }
}   

