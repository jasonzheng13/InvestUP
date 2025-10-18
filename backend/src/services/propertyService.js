import {
    getAllProperties,
    getPropertyById,
    searchPropertiesByCity,
    filterProperties
} from '../config/mockProperties.js';

export async function searchProperties(filters = {}) {
    try {
        const properties = filterProperties(filters);
        return properties;
    } catch (error) {
        console.error('Error searching properties:', error);
        throw new Error('Failed to search properties.');
    }
}

export async function getPropertyDetails(propertyId) {
    try {
        const property = getPropertyById(propertyId);
        if (!property) {
            throw new Error('Property not found.');
        }

        return property;

    } catch (error) {
        console.error('Error fetching property details:', error);
        throw new Error('Failed to fetch property details.');
    }
}

export async function listAllProperties() {
    try {
        return getAllProperties();
    } catch (error) {
        console.error('Error listing all properties:', error);
        throw new Error('Failed to list properties.');
    }
}   

/**
 * When using real Zillow API
 * 
 * Placeholder for future implementation
 */

